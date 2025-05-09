import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import './EventsPage.css';

export default function EventsPage() {
  const { events, fetchEvents } = useStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (!Array.isArray(events)) {
    return <div className="events-container">Loading events...</div>;
  }

  return (
    <div className="events-container">
      <h2 className="events-title">Events</h2>
      <label htmlFor="search" className="sr-only">Search</label>
<input
  id="search"
  type="text"
  className="search-bar"
  placeholder="Search..."
  disabled
/>
      <div className="event-list">
    {events.map((event) => (
      <Link to={`/event/${event.id}`} key={event.id} className="event-card">
        <div className="event-date-box">
          <div className="event-date-day">{event.when?.date.split(' ')[0]}</div>
          <div className="event-date-month">
            {event.when?.date.split(' ')[1]?.slice(0, 3).toUpperCase()}
          </div>
        </div>

        <div className="event-main-content">
          <div className="event-content">
            <div className="event-title">{event.name}</div>
            <div className="event-subtitle">@ {event.where}</div>

            <div className="event-meta-row">
              <div className="event-time">
                {event.when?.from} – {event.when?.to}
              </div>
              <div className="event-price">{event.price} sek</div>
            </div>
          </div>

          <div className="event-line" />
        </div>
      </Link>
        ))}
      </div>
    </div>
  );
}
