import type { OrderCard } from '@mkt/shared';

/** The plain-UI renderer for the order card. Kit views have their own renderer using the kit's API. */
export function OrderCardView({ card }: { card: OrderCard }) {
  return (
    <div className="card" data-testid="order-card" data-status={card.status} data-order-id={card.orderId}>
      <img src={card.imageUrl} alt="" />
      <div>
        <div className="title">{card.listingTitle}</div>
        <div className="price">${card.priceUsd.toFixed(2)} USD</div>
        <div className="order">Order {card.orderId}</div>
        <span className={`badge ${card.status}`} data-testid="order-status">
          {card.status}
        </span>
      </div>
    </div>
  );
}
