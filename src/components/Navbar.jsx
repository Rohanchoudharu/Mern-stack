import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onLoginClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };  

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="brand">
          <img
            src="../component/paradoy.png"
            alt="PARADOY icon"
            className="brand-icon"
          />
          PARADOY
        </a>
        <nav className="nav">
          {['  ','  ','  ','  ','Home', 'About', 'Services','community', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}
          <button onClick={onLoginClick} className="login-button">
            Login
          </button>
        </nav>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav>
            {['Home', 'About', 'Services','community', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                onLoginClick();
                setMobileMenuOpen(false);
              }}
              className="login-button"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
