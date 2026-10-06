import { config } from 'dotenv';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// .env lives at the repo root. Load it once for the whole server.
const root = resolve(fileURLToPath(import.meta.url), '../../../..');
config({ path: resolve(root, '.env'), quiet: true });

export const env = {
  PORT: Number(process.env.SERVER_PORT ?? 4000),
  PUBLIC_URL: process.env.PUBLIC_URL ?? 'http://localhost:4000',
  WEB_URL: process.env.WEB_URL ?? 'http://localhost:5173',
  SMTP_HOST: process.env.SMTP_HOST ?? 'localhost',
  SMTP_PORT: Number(process.env.SMTP_PORT ?? 1025),
  NATIVE_WS_URLS: (process.env.NATIVE_WS_URLS ?? 'ws://localhost:4101,ws://localhost:4102').split(','),
  NATIVE_HTTP_URLS: (process.env.NATIVE_HTTP_URLS ?? 'http://localhost:4101,http://localhost:4102').split(','),
  NATIVE_TOKEN_SECRET: process.env.NATIVE_TOKEN_SECRET ?? 'dev-native-secret-change-me',
  TRANSLATION_PROVIDER: process.env.TRANSLATION_PROVIDER ?? '',
  DEEPL_API_KEY: process.env.DEEPL_API_KEY ?? '',
  GOOGLE_TRANSLATE_API_KEY: process.env.GOOGLE_TRANSLATE_API_KEY ?? '',
  get(name: string): string {
    return process.env[name] ?? '';
  },
  has(...names: string[]): boolean {
    return names.every((n) => Boolean(process.env[n]));
  },
  missing(...names: string[]): string[] {
    return names.filter((n) => !process.env[n]);
  },
};
export const REPO_ROOT = root;
