import { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_ORDER_ID, isPlatform, serverApi, USERS, type ChatAdapter, type Order, type UserId } from '@mkt/shared';
import { adapters } from '../lib/registry.ts';
import { ChatView } from '../components/ChatView.tsx';

export function AdapterPage() {
  const { platform = '' } = useParams();
  const [sp] = useSearchParams();
  const userId = (sp.get('user') ?? 'buyer_ana') as UserId;
  const orderId = sp.get('order') ?? DEFAULT_ORDER_ID;
  const autoConnect = sp.get('auto') !== '0';
  const user = USERS[userId];
  const [adapter, setAdapter] = useState<ChatAdapter | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [tokenInfo, setTokenInfo] = useState<{ token: string; extra?: Record<string, string> } | null>(null);
  const [error, setError] = useState<string>();
  const loader = useMemo(() => (isPlatform(platform) ? adapters[platform] : null), [platform]);

  useEffect(() => {
    if (!isPlatform(platform) || !user) return;
    if (!loader) {
      setError(`No adapter implemented yet for "${platform}".`);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const [mod, o, t] = await Promise.all([loader(), serverApi.order(orderId) as Promise<Order>, serverApi.token(platform, userId)]);
        if (cancelled) return;
        setOrder(o);
        setTokenInfo(t);
        setAdapter(mod.createAdapter(user));
      } catch (e) {
        setError((e as Error).message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [platform, userId, orderId, loader, user]);

  if (!isPlatform(platform)) return <div className="app">Unknown platform: {platform}</div>;
  if (!user) return <div className="app">Unknown user: {userId}</div>;
  if (error) return <div className="app" data-state="error"><div className="error" data-testid="error">{error}</div></div>;
  if (!adapter || !order || !tokenInfo) return <div className="app" data-state="loading">Loading {platform}…</div>;
  return <ChatView key={`${platform}:${userId}`} adapter={adapter} user={user} order={order} autoConnect={autoConnect} tokenInfo={tokenInfo} />;
}
