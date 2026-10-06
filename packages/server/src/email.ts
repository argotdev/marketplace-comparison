import nodemailer from 'nodemailer';
import { env } from './env.ts';
import { USERS, type UserId } from '@mkt/shared';

const transport = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: false,
  tls: { rejectUnauthorized: false },
});

export interface OfflineEmail {
  platform: string;
  toUserId: UserId;
  fromUserId: string;
  text: string;
  channelId: string;
}

export const sentEmails: (OfflineEmail & { at: string; messageId?: string })[] = [];

/** Email fallback used by every build that lacks a native one. Lands in Mailpit (localhost:8025). */
export async function sendOfflineEmail(e: OfflineEmail): Promise<void> {
  const to = USERS[e.toUserId];
  if (!to) throw new Error(`unknown user ${e.toUserId}`);
  const fromName = USERS[e.fromUserId as UserId]?.name ?? e.fromUserId;
  const info = await transport.sendMail({
    from: `"Marketplace (${e.platform})" <no-reply@marketplace.test>`,
    to: `"${to.name}" <${to.email}>`,
    subject: `[${e.platform}] New message from ${fromName}`,
    text: `${fromName} wrote while you were offline:\n\n${e.text}\n\nOpen the conversation: ${env.WEB_URL}/adapter/${e.platform}?user=${e.toUserId}`,
    headers: { 'X-Platform': e.platform, 'X-Channel': e.channelId },
  });
  sentEmails.push({ ...e, at: new Date().toISOString(), messageId: info.messageId });
}
