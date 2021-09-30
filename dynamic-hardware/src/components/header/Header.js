import React from 'react';
import './header.css';
import logo from './Icono.png';
const Header = () => {
  return (
    <header className="header">
      <div className="nombre-logo">
        <i class="fas fa-align-justify"></i>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Dynamic Hardware</h1>
      </div>
      <nav>
        <ul class="nav-bar">
          <li>
            <i class="fas fa-home"></i>
          </li>
          <li>
            <i class="fas fa-user-circle"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
