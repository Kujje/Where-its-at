import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventBox from '../components/EventBox';
import './EventPage.css';

export default function EventPage() {
  const { id } = useParams();
  const { events, addToCart } = useStore();
  const event = events.find((e) => e.id === id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="event-container">
      <h2 className="event-header">Event</h2>
      <p className="event-sub">You are about to score <br /> some tickets to</p>

      <h1 className="event-name">{event.name}</h1>
      <p className="event-time-info">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
      <p className="event-location">@ {event.where}</p>

      <EventBox
        event={event}
        quantity={quantity}
        onIncrease={() => setQuantity(quantity + 1)}
        onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
      />

      <button
        className="event-add-btn"
        onClick={() => {
          addToCart(event, quantity);
          navigate('/order');
        }}
      >
        Lägg i varukorgen
      </button>
    </div>
  );
}
