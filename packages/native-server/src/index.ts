/**
 * Native chat server: one of N identical instances. WebSocket for clients, Postgres for state,
 * Redis pub/sub to fan events out to the other instances, nodemailer for the email fallback.
 * Deliberately small; docs/vendors/native.md lists what it does not handle.
 */
import { config } from 'dotenv';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
config({ path: resolve(fileURLToPath(import.meta.url), '../../../../.env'), quiet: true });

import http from 'node:http';
import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';
import { WebSocketServer, WebSocket } from 'ws';
import Redis from 'ioredis';
import nodemailer from 'nodemailer';
import { moderate, USERS, type OrderCard, type UserId } from '@mkt/shared';
import { pool, migrate } from './db.ts';

const PORT = Number(process.env.PORT ?? 4101);
const INSTANCE = process.env.INSTANCE_ID ?? String(PORT);
const SECRET = process.env.NATIVE_TOKEN_SECRET ?? 'dev-native-secret-change-me';
const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379';
const PUBLIC_HTTP = process.env.NATIVE_PUBLIC_HTTP ?? `http://localhost:${PORT}`;
const WEB_URL = process.env.WEB_URL ?? 'http://localhost:5173';
const EVENTS_CHANNEL = 'native:events';
const PRESENCE_TTL_SEC = 6;

const redisPub = new Redis(REDIS_URL);
const redisSub = new Redis(REDIS_URL);
const mail = nodemailer.createTransport({ host: process.env.SMTP_HOST ?? 'localhost', port: Number(process.env.SMTP_PORT ?? 1025), secure: false });

// ---- types -----------------------------------------------------------------
type ClientMsg =
  | { type: 'auth'; token: string }
  | { type: 'open_channel'; channelId: string; data: Record<string, unknown>; members: string[] }
  | { type: 'send'; channelId: string; kind: 'text' | 'order_card' | 'attachment'; text?: string; data?: Record<string, unknown>; clientId: string }
  | { type: 'update'; channelId: string; messageId: string; data: Record<string, unknown> }
  | { type: 'typing'; channelId: string; typing: boolean }
  | { type: 'read'; channelId: string }
  | { type: 'history'; channelId: string; limit?: number }
  | { type: 'add_member'; channelId: string; userId: string }
  | { type: 'report'; channelId: string; targetId: string; reason: string }
  | { type: 'channel_info'; channelId: string }
  | { type: 'ping'; t: number };

interface Row {
  id: string;
  seq: string;
  channel_id: string;
  sender_id: string;
  kind: string;
  text: string | null;
  data: Record<string, unknown>;
  moderated: boolean;
  created_at: Date;
  updated_at: Date | null;
}

interface Event {
  channelId: string;
  /** Recipients. Omit to deliver to all channel members. */
  to?: string[];
  payload: Record<string, unknown>;
}

interface Session {
  ws: WebSocket;
  userId?: string;
  channels: Set<string>;
}

const sessions = new Set<Session>();

// ---- helpers ---------------------------------------------------------------
function verifyToken(token: string): string | null {
  const [userId, exp, sig] = token.split('.');
  if (!userId || !exp || !sig) return null;
  const expected = createHmac('sha256', SECRET).update(`${userId}.${exp}`).digest('hex');
  if (expected.length !== sig.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(sig))) return null;
  if (Number(exp) < Date.now() / 1000) return null;
  return userId;
}

function rowToMessage(r: Row) {
  return {
    id: r.id,
    seq: Number(r.seq),
    channelId: r.channel_id,
    senderId: r.sender_id,
    kind: r.kind,
    text: r.text ?? undefined,
    data: r.data,
    moderated: r.moderated,
    createdAt: new Date(r.created_at).getTime(),
    updatedAt: r.updated_at ? new Date(r.updated_at).getTime() : undefined,
  };
}

async function members(channelId: string): Promise<string[]> {
  const { rows } = await pool.query<{ user_id: string }>('SELECT user_id FROM channel_members WHERE channel_id=$1 ORDER BY joined_at', [channelId]);
  return rows.map((r) => r.user_id);
}

async function channelInfo(channelId: string) {
  const { rows } = await pool.query<{ id: string; data: Record<string, unknown> }>('SELECT id, data FROM channels WHERE id=$1', [channelId]);
  if (!rows[0]) return null;
  return { id: rows[0].id, data: rows[0].data, memberIds: await members(channelId) };
}

/** Publish to Redis; every instance (including this one) delivers to its own sockets. */
async function emit(ev: Event): Promise<void> {
  await redisPub.publish(EVENTS_CHANNEL, JSON.stringify(ev));
}

async function deliverLocal(ev: Event): Promise<void> {
  const to = ev.to ?? (await members(ev.channelId));
  const str = JSON.stringify(ev.payload);
  for (const s of sessions) {
    if (s.userId && to.includes(s.userId) && s.ws.readyState === WebSocket.OPEN) s.ws.send(str);
  }
}

redisSub.subscribe(EVENTS_CHANNEL);
redisSub.on('message', (_ch, raw) => {
  deliverLocal(JSON.parse(raw) as Event).catch((e) => console.error('[deliver]', e));
});

async function setPresence(userId: string, online: boolean): Promise<void> {
  const key = `native:presence:${userId}`;
  if (online) await redisPub.set(key, INSTANCE, 'EX', PRESENCE_TTL_SEC);
  else await redisPub.del(key);
}
async function isOnline(userId: string): Promise<boolean> {
  return (await redisPub.exists(`native:presence:${userId}`)) === 1;
}

async function emailOffline(channelId: string, fromUserId: string, text: string): Promise<void> {
  const to = (await members(channelId)).filter((u) => u !== fromUserId);
  for (const u of to) {
    if (await isOnline(u)) continue;
    const user = USERS[u as UserId];
    if (!user) continue;
    await mail.sendMail({
      from: '"Marketplace (native)" <no-reply@marketplace.test>',
      to: `"${user.name}" <${user.email}>`,
      subject: `[native] New message from ${USERS[fromUserId as UserId]?.name ?? fromUserId}`,
      text: `${USERS[fromUserId as UserId]?.name ?? fromUserId} wrote while you were offline:\n\n${text}\n\nOpen: ${WEB_URL}/adapter/native?user=${u}`,
      headers: { 'X-Platform': 'native', 'X-Channel': channelId },
    });
  }
}

function send(ws: WebSocket, payload: unknown): void {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(payload));
}

// ---- message handling ------------------------------------------------------
async function handle(s: Session, msg: ClientMsg): Promise<void> {
  if (msg.type === 'ping') return send(s.ws, { type: 'pong', t: msg.t });
  if (msg.type === 'auth') {
    const userId = verifyToken(msg.token);
    if (!userId) return send(s.ws, { type: 'error', error: 'bad token' });
    s.userId = userId;
    await setPresence(userId, true);
    return send(s.ws, { type: 'authed', userId, instance: INSTANCE });
  }
  if (!s.userId) return send(s.ws, { type: 'error', error: 'not authenticated' });

  switch (msg.type) {
    case 'open_channel': {
      await pool.query('INSERT INTO channels (id, data) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING', [msg.channelId, msg.data ?? {}]);
      for (const u of new Set([...(msg.members ?? []), s.userId])) {
        await pool.query('INSERT INTO channel_members (channel_id, user_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [msg.channelId, u]);
      }
      s.channels.add(msg.channelId);
      return send(s.ws, { type: 'channel', channel: await channelInfo(msg.channelId) });
    }
    case 'channel_info':
      return send(s.ws, { type: 'channel', channel: await channelInfo(msg.channelId) });
    case 'send': {
      if (!(await members(msg.channelId)).includes(s.userId)) return send(s.ws, { type: 'error', error: 'not a member', clientId: msg.clientId });
      let text = msg.text ?? null;
      let moderated = false;
      const data: Record<string, unknown> = { ...(msg.data ?? {}) };
      if (msg.kind === 'text' && text) {
        const m = moderate(text);
        if (!m.allowed) {
          // Policy: mask, don't drop, so the sender sees the message went through edited.
          text = m.masked;
          moderated = true;
        }
        // Translations are produced from the raw text before it reaches us; mask each of them as well,
        // or the reader in the other language gets the contact details back.
        const tr = data.translations as Record<string, string> | undefined;
        if (tr) data.translations = Object.fromEntries(Object.entries(tr).map(([k, v]) => [k, moderate(v).masked]));
      }
      const id = randomUUID();
      const { rows } = await pool.query<Row>(
        'INSERT INTO messages (id, channel_id, sender_id, kind, text, data, moderated) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
        [id, msg.channelId, s.userId, msg.kind, text, data, moderated],
      );
      const message = rowToMessage(rows[0]);
      send(s.ws, { type: 'sent', clientId: msg.clientId, message });
      await emit({ channelId: msg.channelId, payload: { type: 'message', message } });
      emailOffline(msg.channelId, s.userId, text ?? (msg.kind === 'order_card' ? 'Order card' : 'Attachment')).catch((e) => console.error('[email]', e));
      return;
    }
    case 'update':
      return updateMessage(msg.channelId, msg.messageId, msg.data);
    case 'typing':
      return emit({ channelId: msg.channelId, payload: { type: 'typing', channelId: msg.channelId, userId: s.userId, typing: msg.typing } });
    case 'read': {
      const { rows } = await pool.query<{ id: string }>('SELECT id FROM messages WHERE channel_id=$1 ORDER BY seq DESC LIMIT 1', [msg.channelId]);
      const lastId = rows[0]?.id ?? null;
      await pool.query(
        'INSERT INTO read_state (channel_id, user_id, last_read_message_id) VALUES ($1,$2,$3) ON CONFLICT (channel_id, user_id) DO UPDATE SET last_read_message_id=$3, updated_at=now()',
        [msg.channelId, s.userId, lastId],
      );
      return emit({ channelId: msg.channelId, payload: { type: 'read', channelId: msg.channelId, userId: s.userId, lastReadMessageId: lastId, at: Date.now() } });
    }
    case 'history': {
      if (!(await members(msg.channelId)).includes(s.userId)) return send(s.ws, { type: 'error', error: 'not a member' });
      const { rows } = await pool.query<Row>('SELECT * FROM messages WHERE channel_id=$1 ORDER BY seq ASC LIMIT $2', [msg.channelId, msg.limit ?? 200]);
      return send(s.ws, { type: 'history', channelId: msg.channelId, messages: rows.map(rowToMessage) });
    }
    case 'add_member': {
      await addMember(msg.channelId, msg.userId);
      return;
    }
    case 'report': {
      await pool.query('INSERT INTO reports (reporter_id, target_id, reason, channel_id) VALUES ($1,$2,$3,$4)', [s.userId, msg.targetId, msg.reason, msg.channelId]);
      return send(s.ws, { type: 'reported' });
    }
  }
}

async function addMember(channelId: string, userId: string): Promise<void> {
  await pool.query('INSERT INTO channel_members (channel_id, user_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [channelId, userId]);
  await emit({ channelId, payload: { type: 'channel', channel: await channelInfo(channelId) } });
}

async function updateMessage(channelId: string, messageId: string, data: Record<string, unknown>): Promise<void> {
  const { rows } = await pool.query<Row>('UPDATE messages SET data = data || $3::jsonb, updated_at = now() WHERE id=$1 AND channel_id=$2 RETURNING *', [
    messageId,
    channelId,
    JSON.stringify(data),
  ]);
  if (!rows[0]) throw new Error('message not found');
  await emit({ channelId, payload: { type: 'message_updated', message: rowToMessage(rows[0]) } });
}

// ---- HTTP: uploads + internal API for the order service -------------------
function readBody(req: http.IncomingMessage): Promise<Buffer> {
  return new Promise((res, rej) => {
    const chunks: Buffer[] = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => res(Buffer.concat(chunks)));
    req.on('error', rej);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', PUBLIC_HTTP);
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-headers', 'content-type, authorization, x-file-name, x-internal-secret');
  res.setHeader('access-control-allow-methods', 'GET,POST,PATCH,OPTIONS');
  if (req.method === 'OPTIONS') return res.writeHead(204).end();
  const json = (code: number, body: unknown) => {
    res.writeHead(code, { 'content-type': 'application/json' });
    res.end(JSON.stringify(body));
  };
  try {
    if (url.pathname === '/health') return json(200, { ok: true, instance: INSTANCE });

    if (url.pathname === '/upload' && req.method === 'POST') {
      const userId = verifyToken(String(req.headers.authorization ?? '').replace(/^Bearer /, ''));
      if (!userId) return json(401, { error: 'bad token' });
      const bytes = await readBody(req);
      if (bytes.length > 5 * 1024 * 1024) return json(413, { error: 'max 5 MB' });
      const id = randomUUID();
      const name = decodeURIComponent(String(req.headers['x-file-name'] ?? 'file'));
      await pool.query('INSERT INTO uploads (id, name, mime, bytes) VALUES ($1,$2,$3,$4)', [id, name, req.headers['content-type'] ?? 'application/octet-stream', bytes]);
      return json(200, { id, url: `${PUBLIC_HTTP}/files/${id}`, name });
    }
    if (url.pathname.startsWith('/files/')) {
      const { rows } = await pool.query<{ name: string; mime: string; bytes: Buffer }>('SELECT name, mime, bytes FROM uploads WHERE id=$1', [url.pathname.slice(7)]);
      if (!rows[0]) return json(404, { error: 'not found' });
      res.writeHead(200, { 'content-type': rows[0].mime, 'content-disposition': `inline; filename="${rows[0].name}"` });
      return res.end(rows[0].bytes);
    }

    if (url.pathname.startsWith('/internal/')) {
      if (req.headers['x-internal-secret'] !== SECRET) return json(401, { error: 'unauthorized' });
      const body = req.method === 'GET' ? {} : (JSON.parse((await readBody(req)).toString() || '{}') as Record<string, unknown>);
      const m = url.pathname.match(/^\/internal\/channels\/([^/]+)(\/members)?$/);
      if (m && !m[2] && req.method === 'GET') {
        const info = await channelInfo(decodeURIComponent(m[1]));
        return info ? json(200, info) : json(404, { error: 'not found' });
      }
      if (m && m[2] && req.method === 'POST') {
        await addMember(decodeURIComponent(m[1]), String(body.userId));
        return json(200, { ok: true });
      }
      const mm = url.pathname.match(/^\/internal\/messages\/([^/]+)$/);
      if (mm && req.method === 'PATCH') {
        await updateMessage(String(body.channelId), decodeURIComponent(mm[1]), { card: body.card as OrderCard });
        return json(200, { ok: true });
      }
      if (url.pathname === '/internal/reports') {
        const { rows } = await pool.query('SELECT * FROM reports ORDER BY id DESC LIMIT 100');
        return json(200, rows);
      }
      if (url.pathname === '/internal/reset' && req.method === 'POST') {
        await pool.query('TRUNCATE messages, read_state, reports, channel_members, channels, uploads CASCADE');
        return json(200, { ok: true });
      }
      if (url.pathname === '/internal/presence') {
        const out: Record<string, boolean> = {};
        for (const u of Object.keys(USERS)) out[u] = await isOnline(u);
        return json(200, out);
      }
      return json(404, { error: 'not found' });
    }
    json(404, { error: 'not found' });
  } catch (e) {
    console.error('[http]', e);
    json(500, { error: String((e as Error).message ?? e) });
  }
});

const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
  const s: Session = { ws, channels: new Set() };
  sessions.add(s);
  const hb = setInterval(() => {
    if (s.userId) setPresence(s.userId, true).catch(() => {});
  }, 2000);
  ws.on('message', (raw) => {
    let msg: ClientMsg;
    try {
      msg = JSON.parse(raw.toString()) as ClientMsg;
    } catch {
      return send(ws, { type: 'error', error: 'bad json' });
    }
    handle(s, msg).catch((e) => {
      console.error('[ws]', e);
      send(ws, { type: 'error', error: String((e as Error).message ?? e) });
    });
  });
  ws.on('close', () => {
    clearInterval(hb);
    sessions.delete(s);
    if (s.userId) setPresence(s.userId, false).catch(() => {});
  });
});

migrate()
  .then(() => server.listen(PORT, () => console.log(`[native:${INSTANCE}] ws+http on :${PORT}`)))
  .catch((e) => {
    console.error('[native] migrate failed', e);
    process.exit(1);
  });
