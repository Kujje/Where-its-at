import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import OrderBox from '../components/OrderBox';
import './OrderPage.css';

export default function OrderPage() {
  const { cart, addToCart, removeFromCart, generateTickets } = useStore();
  const navigate = useNavigate();

  const updateQuantity = (eventId, newQty) => {
    const item = cart.find((item) => item.event.id === eventId);
    if (!item) return;

    if (newQty < 1) {
      removeFromCart(eventId);
    } else {
      const diff = newQty - item.quantity;
      addToCart(item.event, diff);
    }
  };

  const handleSubmitOrder = () => {
    generateTickets();
    navigate('/ticket');
  };

  const total = cart.reduce(
    (sum, item) => sum + item.event.price * item.quantity,
    0
  );

  return (
    <div className="order-container">
      <h2 className="order-title">Order</h2>

      {cart.map(({ event, quantity }) => (
        <OrderBox
          key={event.id}
          event={event}
          quantity={quantity}
          onIncrease={() => updateQuantity(event.id, quantity + 1)}
          onDecrease={() => updateQuantity(event.id, quantity - 1)}
        />
      ))}

      <p className="order-total-label">Totalt värde på order</p>
      <div className="order-total-price">{total} sek</div>

      <button className="order-submit-btn" onClick={handleSubmitOrder}>
        Skicka order
      </button>
    </div>
  );
}
