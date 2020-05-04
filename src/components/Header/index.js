import React from 'react';
import './style.css';
import logo from './logo.svg';

function Header() {
  return (
    <div className="wrapper">
      <div className="left">
        <img src={logo} alt="Shortly Logo" className="logo" />
        <div className="menu">
          <span className="item">Features</span>
          <span className="item">Pricing</span>
          <span className="item">Resource</span>
        </div>
      </div>
      <div className="right">
        <div className="menu">
          <span className="item button">Login</span>
          <span className="item button green">Signup</span>
        </div>
        <div className="mobile-menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
