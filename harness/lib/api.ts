import { API_URL, MAILPIT_URL } from './env.ts';

export async function api<T = unknown>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}/api${path}`, { headers: { 'content-type': 'application/json' }, ...init });
  const text = await res.text();
  if (!res.ok) throw new Error(`${init?.method ?? 'GET'} ${path} -> ${res.status}: ${text}`);
  return (text ? JSON.parse(text) : undefined) as T;
}
export const post = <T = unknown>(path: string, body?: unknown) => api<T>(path, { method: 'POST', body: JSON.stringify(body ?? {}) });

export interface MailpitMessage {
  ID: string;
  To: { Address: string; Name: string }[];
  Subject: string;
  Snippet: string;
  Created: string;
}

export const mailpit = {
  async clear() {
    await fetch(`${MAILPIT_URL}/api/v1/messages`, { method: 'DELETE' });
  },
  async list(): Promise<MailpitMessage[]> {
    const res = await fetch(`${MAILPIT_URL}/api/v1/messages?limit=200`);
    if (!res.ok) throw new Error(`mailpit ${res.status}`);
    return ((await res.json()) as { messages: MailpitMessage[] }).messages;
  },
  async text(id: string): Promise<string> {
    const res = await fetch(`${MAILPIT_URL}/api/v1/message/${id}`);
    const j = (await res.json()) as { Text: string; HTML: string };
    return j.Text || j.HTML;
  },
};

export async function waitFor<T>(fn: () => Promise<T | undefined | false | null>, timeoutMs: number, everyMs = 250, label = 'condition'): Promise<T> {
  const t0 = Date.now();
  let last: unknown;
  while (Date.now() - t0 < timeoutMs) {
    try {
      const v = await fn();
      if (v) return v as T;
    } catch (e) {
      last = e;
    }
    await new Promise((r) => setTimeout(r, everyMs));
  }
  throw new Error(`timed out after ${timeoutMs}ms waiting for ${label}${last ? `: ${String((last as Error).message ?? last)}` : ''}`);
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
