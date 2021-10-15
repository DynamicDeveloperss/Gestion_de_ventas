import React from 'react';
import './header.css';
import logo from './Icono.png';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (       
    <header className="header">
      <div className="contenedor_sidebar">
        <Sidebar/>  
        <div className="nombre-logo">           
        <img src={logo} alt="Logo" className="logo" />
        <h1>Dynamic Hardware</h1>
        
      </div>
      </div>
      <nav>
        <ul class="nav-bar">
          <li>
              <Link to= "/login">
              <i class="fas fa-home"></i>
              </Link>
          </li>
          <li>
          <Link to= "/vendedores">
              <i class="fas fa-user-circle"></i>
              </Link>
              </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
