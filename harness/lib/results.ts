import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { REPO_ROOT } from './env.ts';

export interface CheckResult {
  req: number;
  title: string;
  outcome: 'pass' | 'fail' | 'skip';
  note: string;
  durationMs: number;
  details?: Record<string, unknown>;
  at: string;
}

export interface CheckRun {
  platform: string;
  startedAt: string;
  orderId: string;
  results: CheckResult[];
}

export function resultsDir(...parts: string[]): string {
  const d = resolve(REPO_ROOT, 'results', ...parts);
  mkdirSync(d, { recursive: true });
  return d;
}

export function writeJson(path: string, data: unknown): void {
  mkdirSync(resolve(path, '..'), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

export function readJson<T>(path: string): T | undefined {
  return existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')) as T) : undefined;
}

export function recordCheck(platform: string, orderId: string, r: Omit<CheckResult, 'at'>): void {
  const file = resolve(resultsDir('checks'), `${platform}.json`);
  const run = readJson<CheckRun>(file) ?? { platform, startedAt: new Date().toISOString(), orderId, results: [] };
  // A new run (different order id) replaces the previous file; within a run, results merge per requirement.
  if (run.orderId !== orderId) {
    run.startedAt = new Date().toISOString();
    run.orderId = orderId;
    run.results = [];
  }
  run.results = run.results.filter((x) => x.req !== r.req);
  run.results.push({ ...r, at: new Date().toISOString() });
  run.results.sort((a, b) => a.req - b.req);
  writeJson(file, run);
}

export function csvEscape(v: unknown): string {
  const s = v === undefined || v === null ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
