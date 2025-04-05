import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [selectedCity, setSelectedCity] = useState('Select City');
  const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata'];

  return (
    <header className="header">
        <div className="logo">
            <h1>Ticket</h1>
        </div>
        <div className='header-logo'>
        <div className="city-select-wrapper">
            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="city-select">
                <option disabled>Select City</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
        <nav className={`links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="link">Home</Link>
            <Link to="/mapview" className="link">Maps</Link>
            <Link to="/sign" className="link">Sign Up</Link>
            <Link to="/report" className="link">Scan</Link>
        </nav>
        <div className="hamburger" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;