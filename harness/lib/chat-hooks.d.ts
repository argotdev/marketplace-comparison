// Minimal typing of the hooks the web app installs on window (full type in packages/web/src/lib/testHooks.ts).
interface ChatHooksForHarness {
  state: 'idle' | 'connecting' | 'ready' | 'error';
  error?: string;
  reads: { userId: string; at: number }[];
  connect(): Promise<unknown>;
  disconnect(): Promise<void>;
  sendCard(card: unknown): Promise<unknown>;
  [k: string]: unknown;
}
interface Window {
  __chat?: ChatHooksForHarness;
  __mark?: (label: string, id?: string) => Promise<number> | void;
}
