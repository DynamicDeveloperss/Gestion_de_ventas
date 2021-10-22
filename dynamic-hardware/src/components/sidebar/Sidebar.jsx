import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div
      className="sidebar"
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        className={`mx-2 fas fa-${
          mostrarNavegacion ? 'times' : 'bars'
        } `}
      />
      {mostrarNavegacion && (
        <ul className="lista">
          <ResponsiveRoute nombre='Login' ruta='/login' />
          <ResponsiveRoute nombre='Vendedores' ruta='/vendedores' />
          <ResponsiveRoute nombre='Roles' ruta='roles' />
          <ResponsiveRoute nombre='Productos' ruta='productos' />
          <ResponsiveRoute nombre='Ventas' ruta='ventas' />
         
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <li>{nombre}</li>
    </Link>
  );
};

export default Sidebar;