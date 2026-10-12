/**
 * Builds results/requirements-matrix.csv (7 requirements x 9 builds) and results/integration-effort.csv.
 * Inputs: results/matrix-input/<platform>.json (how each requirement is satisfied: native/built/gated/
 * unavailable + note), results/checks/<platform>.json (did the check pass), results/loc.json,
 * results/effort-input/<platform>.json (dashboard steps, backend needed, etc.).
 *
 *   npm run matrix
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { PLATFORMS } from '@mkt/shared';
import { REPO_ROOT } from './env.ts';
import { csvEscape, readJson, type CheckRun } from './results.ts';

type Status = 'native' | 'built' | 'gated' | 'unavailable' | 'not run';
interface MatrixInput {
  platform: string;
  requirements: Record<string, { status: Status; note: string; loc?: number; gate?: string }>;
}
interface EffortInput {
  dashboardStepsBeforeFirstMessage: number | string;
  backendNeededForFirstMessage: boolean | string;
  notes?: string;
}
const REQ_TITLES: Record<string, string> = {
  '1': '1:1 order channel',
  '2': 'Order card with live status',
  '3': 'Moderation + user report',
  '4': 'Offline notification (documented, not tested)',
  '5': 'Auto-translation',
  '6': 'Escalation to agent',
  '7': 'Receipts, typing, attachments',
};

const loc = readJson<Record<string, Record<string, number>>>(resolve(REPO_ROOT, 'results/loc.json')) ?? {};
const matrixLines = ['platform,requirement,title,status,check_outcome,note'];
const effortLines = ['platform,dashboard_steps_before_first_message,backend_needed_for_first_message,adapter_loc,server_vendor_loc,kit_view_loc,kit_order_card_renderer_loc,notes'];

for (const platform of PLATFORMS) {
  const input = readJson<MatrixInput>(resolve(REPO_ROOT, 'results/matrix-input', `${platform}.json`));
  const checks = readJson<CheckRun>(resolve(REPO_ROOT, 'results/checks', `${platform}.json`));
  for (const req of ['1', '2', '3', '4', '5', '6', '7']) {
    const r = input?.requirements[req];
    const c = checks?.results.find((x) => x.req === Number(req));
    let status: Status = r?.status ?? 'not run';
    let note = r?.note ?? (input ? 'not assessed' : 'adapter not written');
    if (r?.status === 'built' && r.loc !== undefined) note = `${note} (${r.loc} LOC)`;
    if (r?.status === 'gated' && r.gate) note = `${note} [needs: ${r.gate}]`;
    if (c?.outcome === 'skip' && status !== 'gated' && status !== 'unavailable') status = 'not run';
    // Requirement 4 is documented only (decision 2026-10-12): the cell carries the vendor-doc note, never a check outcome.
    if (req === '4' && input) {
      matrixLines.push([platform, req, REQ_TITLES[req], `documented: ${r?.status ?? 'unknown'}`, 'not tested', note].map(csvEscape).join(','));
      continue;
    }
    // One status per cell: until the check has run, the cell is `not run` and the note says why and what was designed.
    if (!c && input) {
      status = 'not run';
      note = `not run: no keys in .env (adapter written). Designed as ${r?.status ?? 'unknown'}: ${note}`;
    }
    const checkOutcome = c ? c.outcome : 'not run';
    const checkNote = c && c.outcome !== 'pass' ? ` | check: ${c.note}` : '';
    matrixLines.push([platform, req, REQ_TITLES[req], status, checkOutcome, `${note}${checkNote}`].map(csvEscape).join(','));
  }
  const effort = readJson<EffortInput>(resolve(REPO_ROOT, 'results/effort-input', `${platform}.json`));
  const l = loc[platform];
  effortLines.push(
    [
      platform,
      effort?.dashboardStepsBeforeFirstMessage ?? 'not run',
      effort?.backendNeededForFirstMessage ?? 'not run',
      l?.adapter ?? 'not run',
      l?.serverVendor ?? 'not run',
      l?.kitView ?? 'not run',
      l?.kitOrderCardRenderer ?? 'not run',
      effort?.notes ?? (l ? '' : 'adapter not written'),
    ]
      .map(csvEscape)
      .join(','),
  );
}
writeFileSync(resolve(REPO_ROOT, 'results/requirements-matrix.csv'), matrixLines.join('\n') + '\n');
writeFileSync(resolve(REPO_ROOT, 'results/integration-effort.csv'), effortLines.join('\n') + '\n');
console.log(`[matrix] wrote results/requirements-matrix.csv (${matrixLines.length - 1} rows) and results/integration-effort.csv`);
void existsSync;
void readFileSync;
