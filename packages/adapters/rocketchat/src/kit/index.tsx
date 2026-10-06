/**
 * Rocket.Chat's prebuilt UI embedded in an iframe with `?layout=embedded`, logged in through postMessage
 * (`login-with-token`), per https://developer.rocket.chat/docs/adding-a-rocketchat-chat-room-to-your-web-app.
 * Rocket.Chat has no custom message components, so the order card appears as a message attachment, not a
 * custom type. @embeddedchat/react (0.2.3, 19 months old) requires React <19 and offers theming only, so it is not used.
 */
import { useEffect, useRef, useState } from 'react';
import { channelIdForOrder, serverApi, type UserId } from '@mkt/shared';

export default function RocketChatKit({ userId, orderId }: { userId: string; orderId: string }) {
  const [auth, setAuth] = useState<{ token: string; url: string } | null>(null);
  const [error, setError] = useState<string>();
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    serverApi
      .token('rocketchat', userId as UserId)
      .then((t) => setAuth({ token: t.token, url: t.extra?.url ?? 'http://localhost:3000' }))
      .catch((e) => setError((e as Error).message));
  }, [userId]);

  function onLoad() {
    if (!auth || !frame.current?.contentWindow) return;
    // The Rocket.Chat SPA registers its message listener after load; repeat the login command for a few seconds,
    // in both the documented (externalCommand) and the newer (event/loginToken) shapes.
    const win = frame.current.contentWindow;
    let n = 0;
    const t = window.setInterval(() => {
      win.postMessage({ externalCommand: 'login-with-token', token: auth.token }, auth.url);
      win.postMessage({ event: 'login-with-token', loginToken: auth.token }, auth.url);
      if (++n >= 12) window.clearInterval(t);
    }, 800);
  }

  if (error) return <div className="error">{error}</div>;
  if (!auth) return <div>Loading Rocket.Chat…</div>;
  return (
    <div className="kit-frame" data-kit="rocketchat">
      <iframe ref={frame} title="Rocket.Chat" onLoad={onLoad} src={`${auth.url}/group/${channelIdForOrder(orderId)}?layout=embedded`} style={{ width: '100%', height: '100%', border: 0 }} data-testid="rocketchat-iframe" />
    </div>
  );
}
