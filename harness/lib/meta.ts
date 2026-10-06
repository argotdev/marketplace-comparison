import os from 'node:os';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { REPO_ROOT, REGION_LABEL } from './env.ts';
import { PLATFORM_FACTS } from './platforms.ts';

export interface RunMeta {
  platform: string;
  startedAt: string;
  regionLabel: string;
  machine: { platform: string; arch: string; cpu: string; cores: number; memGb: number; node: string };
  network: { city?: string; region?: string; country?: string; org?: string; source: string } | { error: string };
  vendor: { region: string; plan: string };
  sdk: { package: string; version: string; kitPackage?: string; kitVersion?: string };
  browser: string;
}

export function packageVersion(name: string): string {
  const candidates = [resolve(REPO_ROOT, 'node_modules', name, 'package.json'), resolve(REPO_ROOT, 'packages/web/node_modules', name, 'package.json')];
  for (const c of candidates) if (existsSync(c)) return (JSON.parse(readFileSync(c, 'utf8')) as { version: string }).version;
  return 'not installed';
}

export async function networkInfo(): Promise<RunMeta['network']> {
  try {
    const res = await fetch('https://ipinfo.io/json', { signal: AbortSignal.timeout(5000) });
    const j = (await res.json()) as Record<string, string>;
    return { city: j.city, region: j.region, country: j.country, org: j.org, source: 'ipinfo.io (IP address not stored)' };
  } catch (e) {
    return { error: String((e as Error).message ?? e) };
  }
}

export async function runMeta(platform: string, browser: string): Promise<RunMeta> {
  const facts = PLATFORM_FACTS[platform];
  const up = platform.toUpperCase();
  return {
    platform,
    startedAt: new Date().toISOString(),
    regionLabel: REGION_LABEL,
    machine: {
      platform: `${os.platform()} ${os.release()}`,
      arch: os.arch(),
      cpu: os.cpus()[0]?.model ?? 'unknown',
      cores: os.cpus().length,
      memGb: Math.round(os.totalmem() / 1073741824),
      node: process.version,
    },
    network: await networkInfo(),
    vendor: {
      region: process.env[facts?.regionEnv ?? `${up}_REGION`] ?? (platform === 'native' ? 'local docker' : 'not recorded'),
      plan: process.env[facts?.planEnv ?? `${up}_PLAN`] ?? (platform === 'native' ? 'n/a' : 'not recorded'),
    },
    sdk: {
      package: facts?.sdkPackage ?? 'unknown',
      version: facts ? packageVersion(facts.sdkPackage) : 'unknown',
      kitPackage: facts?.kitPackage,
      kitVersion: facts?.kitPackage ? packageVersion(facts.kitPackage) : undefined,
    },
    browser,
  };
}
