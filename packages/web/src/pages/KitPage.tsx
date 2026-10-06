import { lazy, Suspense, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_ORDER_ID, isPlatform } from '@mkt/shared';
import { kits } from '../lib/registry.ts';

export function KitPage() {
  const { platform = '' } = useParams();
  const [sp] = useSearchParams();
  const userId = sp.get('user') ?? 'buyer_ana';
  const orderId = sp.get('order') ?? DEFAULT_ORDER_ID;
  const loader = isPlatform(platform) ? kits[platform] : null;
  const Kit = useMemo(() => (loader ? lazy(loader) : null), [loader]);
  if (!isPlatform(platform)) return <div className="app">Unknown platform: {platform}</div>;
  if (!Kit)
    return (
      <div className="app" data-kit="none">
        <p>
          No kit view for <b>{platform}</b>. Either the vendor ships no React UI kit, or it is not wired yet. See docs/vendors/{platform}.md.
        </p>
      </div>
    );
  return (
    <div className="app" data-kit={platform} data-user={userId}>
      <Suspense fallback={<div>Loading {platform} kit…</div>}>
        <Kit userId={userId} orderId={orderId} />
      </Suspense>
    </div>
  );
}
