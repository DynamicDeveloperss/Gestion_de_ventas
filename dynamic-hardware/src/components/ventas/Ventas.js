import React, { useRef, useState, useEffect } from 'react';
import Header from '../header/Header';
import './ventas.css';
import logo from './Icono.png';
import { customAlphabet } from 'nanoid';
import axios from 'axios';

const Ventas = () => {
  /* Función para generar id aleatorio */
  const alphabet = '0123456789';
  const nanoid = customAlphabet(alphabet, 10);

  const formVenta = useRef(null);
  const [datos, setDatos] = useState([]);

  // Cargar datos iniciales de la base de datos
  useEffect(() => {
    obtenerVentas();
  }, []);

  const obtenerVentas = async () => {
    const options = { method: 'GET', url: 'http://localhost:5000/obtenerVentas' };
    await axios
      .request(options)
      .then(function (response) {
        setDatos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // Función que captura los datos del formulario
  const enviarDatos = async (e) => {
    e.preventDefault(); // Evita que el navegador refresque la página luego de un submit
    const fd = new FormData(formVenta.current); // Aqui se almacena la informacion del formulario
    const nuevaVenta = {};
    fd.forEach((item, key) => {
      nuevaVenta[key] = item;
    });
    nuevaVenta['id_venta'] = nanoid();
    console.log(nuevaVenta);

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/agregarVenta',
      headers: { 'Content-Type': 'application/json' },
      data: {
        id_venta: nuevaVenta.id_venta,
        cedula: nuevaVenta.cedula,
        productos: nuevaVenta.productos,
        valor: nuevaVenta.valor,
        id_vendedor: nuevaVenta.id_vendedor,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        obtenerVentas();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Header />
      <main className="main">
        <section className="main-logo">
          <img src={logo} alt="Logo" className="logo-Grande" />
          <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
        </section>
        <section>
          <form ref={formVenta} onSubmit={enviarDatos} className="forms">
            <h3 className="subtitulos">Información del Comprador</h3>
            <input type="text" placeholder="Nombre" name="nombre" required />
            <input type="text" placeholder="Cédula" name="cedula" required />
            <input type="email" placeholder="Correo Electrónico" name="correo" required />
            <input type="text" placeholder="Teléfono" name="telefono" required />
            <h3 className="subtitulos">Información de la Venta</h3>
            <label htmlFor="id_vendedor">ID Vendedor</label>
            <input
              type="text"
              id="id-vendedor"
              placeholder="ID Vendedor"
              name="id_vendedor"
              required
            />
            <label htmlFor="">ID Producto</label>
            <input type="text" placeholder="ID Producto" name="productos" required />
            <label htmlFor="">Cantidad</label>
            <input type="number" placeholder="Cantidad" name="cantidad" required />
            <label htmlFor="">Valor de la Venta</label>
            <input type="text" placeholder="Valor" name="valor" required />
            <button className="btn btn-verde">Agregar Venta</button>
          </form>
        </section>
        <section className="section-tabla">
          <h3 className="subtitulos">Historial de Ventas</h3>
          <div className="input-buscar">
            <input type="text" placeholder="Buscar" />
            <i className="fas fa-search"></i>
          </div>
          <table className="tabla-ventas">
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>Cédula Comprador</th>
                <th>Productos</th>
                <th>Valor Total</th>
                <th>Fecha de Venta</th>
                <th>ID Vendedor</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((item, key) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.cedula_comprador}</td>
                    <td>{item.id_producto}</td>
                    <td>${item.valor}</td>
                    <td>{item.fecha}</td>
                    <td>{item.id_vendedor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Ventas;
