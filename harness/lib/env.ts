import { config } from 'dotenv';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const REPO_ROOT = resolve(fileURLToPath(import.meta.url), '../../..');
config({ path: resolve(REPO_ROOT, '.env'), quiet: true });

export const WEB_URL = process.env.WEB_URL ?? 'http://localhost:5173';
export const API_URL = process.env.API_URL ?? 'http://localhost:4000';
export const MAILPIT_URL = process.env.MAILPIT_URL ?? 'http://localhost:8025';
export const PLATFORM = process.env.PLATFORM ?? 'native';
export const REGION_LABEL = process.env.REGION_LABEL ?? 'local-dev-machine';
