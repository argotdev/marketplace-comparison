/**
 * Minimal DDP client over the browser WebSocket, following https://developer.rocket.chat/docs/realtime-api.
 * The official @rocket.chat/ddp-client cannot be installed with npm (yarn-only `patch:` dependency), so this
 * speaks the protocol directly: connect, method calls, subscriptions to `stream-room-messages` and `stream-notify-room`.
 */
export type DdpMessage = { msg: string; id?: string; collection?: string; fields?: { eventName?: string; args?: unknown[] }; result?: unknown; error?: { message?: string; reason?: string }; [k: string]: unknown };

export class Ddp {
  private ws: WebSocket | null = null;
  private seq = 0;
  private pending = new Map<string, { resolve: (v: unknown) => void; reject: (e: Error) => void }>();
  private streams = new Map<string, (args: unknown[]) => void>(); // `${stream}/${eventName}` -> handler
  private subIds: string[] = [];

  async connect(url: string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      const ws = new WebSocket(url);
      this.ws = ws;
      ws.onerror = () => reject(new Error(`rocketchat: websocket error ${url}`));
      ws.onopen = () => ws.send(JSON.stringify({ msg: 'connect', version: '1', support: ['1'] }));
      ws.onmessage = (ev) => {
        const m = JSON.parse(String(ev.data)) as DdpMessage;
        if (m.msg === 'connected') resolve();
        this.handle(m);
      };
    });
  }

  private handle(m: DdpMessage): void {
    if (m.msg === 'ping') this.ws?.send(JSON.stringify({ msg: 'pong', id: m.id }));
    else if (m.msg === 'result' && m.id) {
      const p = this.pending.get(m.id);
      this.pending.delete(m.id);
      if (!p) return;
      if (m.error) p.reject(new Error(m.error.reason ?? m.error.message ?? 'ddp error'));
      else p.resolve(m.result);
    } else if (m.msg === 'changed' && m.collection && m.fields?.eventName) {
      const h = this.streams.get(`${m.collection}/${m.fields.eventName}`);
      if (h) h(m.fields.args ?? []);
    }
  }

  call<T = unknown>(method: string, params: unknown[]): Promise<T> {
    const id = String(++this.seq);
    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve: (v) => resolve(v as T), reject });
      this.ws!.send(JSON.stringify({ msg: 'method', method, id, params }));
    });
  }

  /** Subscribe to a stream (e.g. "stream-room-messages" with eventName = rid). */
  subscribe(stream: string, eventName: string, handler: (args: unknown[]) => void, extra: unknown[] = [false]): () => void {
    const id = `sub${++this.seq}`;
    this.streams.set(`${stream}/${eventName}`, handler);
    this.subIds.push(id);
    this.ws!.send(JSON.stringify({ msg: 'sub', id, name: stream, params: [eventName, ...extra] }));
    return () => {
      this.streams.delete(`${stream}/${eventName}`);
      this.ws?.send(JSON.stringify({ msg: 'unsub', id }));
    };
  }

  close(): void {
    this.ws?.close();
    this.ws = null;
  }
}
