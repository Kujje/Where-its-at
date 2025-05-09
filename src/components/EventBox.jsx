import './EventBox.css';

export default function EventBox({ event, quantity, onIncrease, onDecrease }) {
  const total = event.price * quantity;

  return (
    <div className="event-box">
      <div className="event-total-price">
        {total} <span className="event-sek">sek</span>
      </div>
      <div className="event-quantity-wrapper">
        <button onClick={onDecrease}>–</button>
        <div>{quantity}</div>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
