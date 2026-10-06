import type { OrderCard as OrderCardData } from '@mkt/shared';

/** The order card as rendered inside stream-chat-react, through the Attachment override. */
export function OrderCard({ card }: { card: OrderCardData }) {
  return (
    <div className="card kit-card" data-testid="order-card" data-status={card.status} data-order-id={card.orderId}>
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
