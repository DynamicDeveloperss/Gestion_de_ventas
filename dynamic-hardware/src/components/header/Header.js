import React from 'react';
import './header.css';
import logo from './Icono.png';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useGoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const CLIENT_ID = "788811814863-doldm5d1gdgpgp1qj9vkeq7m8qnbrs9d.apps.googleusercontent.com";

const Header = () => {
  
  const history = useHistory();

  const logout = () => {
    history.push("/login")
  }

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
        <ul className="nav-bar">
          <li>
              <Link to= "/home">
              <i class="fas fa-home"></i>
              </Link>
          </li>
          <li>
          <GoogleLogout
              clientId={CLIENT_ID}
              onLogoutSuccess={logout}
            ></GoogleLogout>
            </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
