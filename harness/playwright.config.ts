import { defineConfig } from '@playwright/test';

// One id per `playwright test` invocation, shared by every worker (Playwright restarts a worker after a failure,
// and the spec must keep using the same order id and results file).
process.env.CHECK_RUN_ID ??= Date.now().toString(36);

export default defineConfig({
  testDir: './checks',
  timeout: 90_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['list'], ['json', { outputFile: '.playwright/last-run.json' }]],
  outputDir: '.playwright/output',
  use: {
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
