import './TicketPage.css';
import { useStore } from '../store/useStore';
import barcode from '../assets/barcode.png';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function TicketPage() {
  const { tickets } = useStore();

  return (
    <div className="ticket-page">
       <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />
      {tickets.map((ticket) => (
        <div className="ticket" key={ticket.id}>
          <div className="ticket-section ticket-header">
            <div className="ticket-label">WHAT</div>
            <div className="ticket-event-name">{ticket.event.name}</div>
          </div>

          <div className="ticket-section ticket-where">
            <div className="ticket-label">WHERE</div>
            <div className="ticket-venue">{ticket.event.where}</div>
          </div>

          <div className="ticket-section ticket-when">
            <div className="when-box">
              <span className="label">WHEN</span>
              <span>{ticket.event.when.date.split(' ')[0]}{" "}
              {ticket.event.when .date.split(' ')[1]?.slice(0, 3).toUpperCase()}</span>
            </div>
            <div className="when-box">
              <span className="label">FROM</span>
              <span>{ticket.event.when.from}</span>
            </div>
            <div className="when-box">
              <span className="label">TO</span>
              <span>{ticket.event.when.to}</span>
            </div>
          </div>

          <div className="ticket-section ticket-info">
            <div className="ticket-label">INFO</div>
            <div className="info-text">
              Section {ticket.section} – seat {ticket.seat}
            </div>
          </div>

          <div className="ticket-barcode">
            <img src={barcode} alt="barcode" />
            <p className="ticket-id">#{ticket.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
