import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';
import OrderPage from './pages/OrderPage';
import TicketPage from './pages/TicketPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
