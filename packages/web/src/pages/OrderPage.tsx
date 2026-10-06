import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LISTING, ORDER_STATUSES, serverApi, type Order } from '@mkt/shared';

/** Order page: the order service's view, plus a slot for the PubNub courier-location marker. */
export function OrderPage() {
  const { id = '' } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [courier, setCourier] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    serverApi.order(id).then((o) => setOrder(o as Order));
  }, [id]);

  useEffect(() => {
    // The PubNub build publishes courier coordinates; its kit registers window.__courier to feed this page.
    const t = window.setInterval(() => {
      const c = (window as unknown as { __courier?: { lat: number; lng: number } }).__courier;
      if (c) setCourier(c);
    }, 500);
    return () => window.clearInterval(t);
  }, []);

  if (!order) return <div className="app">Loading order…</div>;
  return (
    <div className="app">
      <h2>Order {order.id}</h2>
      <div className="card">
        <img src={LISTING.imageUrl} alt="" />
        <div>
          <div className="title">{LISTING.title}</div>
          <div className="price">${LISTING.priceUsd.toFixed(2)}</div>
          <span className={`badge ${order.status}`} data-testid="order-status">
            {order.status}
          </span>
        </div>
      </div>
      <p>
        {ORDER_STATUSES.map((s) => (
          <button key={s} style={{ marginRight: 6 }} onClick={() => serverApi.setOrderStatus(order.id, s).then((o) => setOrder(o as Order))}>
            {s}
          </button>
        ))}
      </p>
      <div id="courier-map" data-testid="courier-map" style={{ position: 'relative', height: 240, background: '#e6efe6', borderRadius: 10, overflow: 'hidden' }}>
        {courier && (
          <div
            data-testid="courier-marker"
            style={{ position: 'absolute', left: `${((courier.lng + 180) / 360) * 100}%`, top: `${((90 - courier.lat) / 180) * 100}%`, width: 14, height: 14, borderRadius: 7, background: '#d00', transform: 'translate(-50%,-50%)' }}
            title={`${courier.lat.toFixed(4)}, ${courier.lng.toFixed(4)}`}
          />
        )}
        <span style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 12, color: '#555' }}>Courier: {courier ? `${courier.lat.toFixed(4)}, ${courier.lng.toFixed(4)}` : 'no position yet'}</span>
      </div>
    </div>
  );
}
