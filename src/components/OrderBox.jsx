import './OrderBox.css';

export default function OrderBox({ event, quantity, onIncrease, onDecrease }) {
  return (
    <div className="order-box">
      <div className="order-info">{event.name}</div>
      <div className="order-details">
        {event.when.date} kl {event.when.from} – {event.when.to}
      </div>
      <div className="order-quantity-wrapper">
        <button onClick={onDecrease}>–</button>
        <div>{quantity}</div>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
