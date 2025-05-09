import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/events', label: 'Events', icon: <FaCalendarAlt /> },
    { path: '/ticket', label: 'Tickets', icon: <FaTicketAlt /> },
  ];

  return (
    <nav className="navbar"aria-label="Bottom navigation">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
