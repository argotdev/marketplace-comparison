/**
 * No maintained first-party React kit: @pubnub/react-chat-components (0.34.0, May 2024) is archived
 * (support ended 2025-01-01, repo archived 2026-06-17). This page records that and hosts the courier demo.
 */
import { useEffect, useRef, useState } from 'react';
import { Chat } from '@pubnub/chat';
import { serverApi, type UserId } from '@mkt/shared';
import { startCourier } from '../courier.ts';

export default function PubNubKit({ userId, orderId }: { userId: string; orderId: string }) {
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string>();
  const stop = useRef<(() => void) | null>(null);
  const chat = useRef<Chat | null>(null);

  useEffect(() => () => stop.current?.(), []);

  async function toggle() {
    if (running) {
      stop.current?.();
      stop.current = null;
      setRunning(false);
      return;
    }
    try {
      if (!chat.current) {
        const t = await serverApi.token('pubnub', userId as UserId);
        chat.current = await Chat.init({ publishKey: t.extra?.publishKey ?? '', subscribeKey: t.extra?.subscribeKey ?? '', userId: `courier_${userId}`, authKey: t.token });
      }
      stop.current = startCourier(chat.current, orderId);
      setRunning(true);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <div className="kit-frame" data-kit="pubnub-none" style={{ padding: 16, overflow: 'auto' }}>
      <h3>No UI kit</h3>
      <p>
        PubNub's React chat components (<code>@pubnub/react-chat-components</code> 0.34.0) were last published in May 2024 and the repository was archived on 2026-06-17 with support ended on 2025-01-01. There is no maintained first-party kit; the order card is rendered only in the adapter view.
      </p>
      <h3>Courier location demo</h3>
      <p>Publishes a coordinate every second on <code>courier-{orderId}</code> over the same PubNub connection. Open the <a href={`/order/${orderId}?platform=pubnub`}>order page</a> to watch the marker move.</p>
      <button onClick={toggle} data-testid="courier-toggle">
        {running ? 'Stop courier' : 'Start courier'}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
