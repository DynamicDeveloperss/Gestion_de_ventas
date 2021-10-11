import React, { useRef, useState } from 'react';
import Header from '../header/Header';
import './ventas.css';
import logo from './Icono.png';
import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';

const Ventas = () => {
  const datosIniciales = [
    {
      id_venta: '123456',
      cedula: '123456',
      productos: 'Producto',
      valor: 1000000,
      fecha_venta: '25-03-2021',
      id_vendedor: '12345678',
      estado: 'En proceso',
    },
    {
      id_venta: '123456',
      cedula: '123456',
      productos: 'Monitor 4k',
      valor: 1000000,
      fecha_venta: '25-03-2021',
      id_vendedor: '12345678',
      estado: 'En proceso',
    },
    {
      id_venta: '123456',
      cedula: '123456',
      productos: 'Monitor 4k',
      valor: 1000000,
      fecha_venta: '25-03-2021',
      id_vendedor: '12345678',
      estado: 'En proceso',
    },
    {
      id_venta: '123456',
      cedula: '123456',
      productos: 'Monitor 4k',
      valor: 1000000,
      fecha_venta: '25-03-2021',
      id_vendedor: '12345678',
      estado: 'En proceso',
    },
    {
      id_venta: '123456',
      cedula: '123456',
      productos: 'Monitor 4k',
      valor: 1000000,
      fecha_venta: '25-03-2021',
      id_vendedor: '12345678',
      estado: 'Cancelada',
    },
  ];

  const formVenta = useRef(null);
  const [datos, setDatos] = useState(datosIniciales);

  const [agregarPoducto, setAgregarProducto] = useState(false);

  /* Función para generar id aleatorio */
  const alphabet = '0123456789';
  const nanoid = customAlphabet(alphabet, 10);

  // Función que captura los datos del formulario
  const enviarDatos = (e) => {
    e.preventDefault(); // Evita que el navegador refresque la página luego de un submit
    const fd = new FormData(formVenta.current); // Aqui se almacena la informacion del formulario
    const nuevaVenta = {};
    fd.forEach((item, key) => {
      nuevaVenta[key] = item;
    });
    nuevaVenta['id_venta'] = nanoid();
    console.log(nuevaVenta);
    setDatos([...datos, nuevaVenta]);
  };

  return (
    <div>
      <Header />
      <main class="main">
        <section className="main-logo">
          <img src={logo} alt="Logo" className="logo-Grande" />
          <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
        </section>
        <section>
          <form ref={formVenta} onSubmit={enviarDatos} class="forms">
            <h3 class="subtitulos">Información del Comprador</h3>
            <input type="text" placeholder="Nombre" name="nombre" required />
            <input type="text" placeholder="Cédula" name="cedula" required />
            <input type="email" placeholder="Correo Electrónico" name="correo" required />
            <input type="text" placeholder="Teléfono" name="telefono" required />
            <h3 class="subtitulos">Información de la Venta</h3>
            <label for="id_vendedor">ID Vendedor</label>
            <input
              type="text"
              id="id-vendedor"
              placeholder="ID Vendedor"
              name="id_vendedor"
              required
            />
            <label for="">ID Producto</label>
            <input type="text" placeholder="ID Producto" name="productos" required />
            <label for="">Cantidad</label>
            <input type="number" placeholder="Cantidad" name="cantidad" required />
            <label for="">Valor de la Venta</label>
            <input type="text" placeholder="Valor" name="valor" required />
            <label for="fecha_venta">Fecha de Venta</label>
            <input
              type="date"
              id="fecha-venta"
              placeholder="Fecha de Venta"
              name="fecha_venta"
              required
            />
            <button class="btn btn-verde">Agregar Venta</button>
          </form>
        </section>
        <section class="section-tabla">
          <h3 class="subtitulos">Historial de Ventas</h3>
          <div class="input-buscar">
            <input type="text" placeholder="Buscar" />
            <i class="fas fa-search"></i>
          </div>
          <table class="tabla-ventas">
            <thead>
              <th>ID Venta</th>
              <th>Cédula Comprador</th>
              <th>Productos</th>
              <th>Valor Total</th>
              <th>Fecha de Venta</th>
              <th>ID Vendedor</th>
              <th>Estado</th>
            </thead>
            {datos.map((item, key) => {
              return (
                <tr>
                  <td>{item.id_venta}</td>
                  <td>{item.cedula}</td>
                  <td>{item.productos}</td>
                  <td>{item.valor}</td>
                  <td>{item.fecha_venta}</td>
                  <td>{item.id_vendedor}</td>
                  <td>
                    <select name="estado" class="combo-estado" defaultValue={[`${item.estado}`]}>
                      <option value="0">Estado...</option>
                      <option value="Entregado">Entregado</option>
                      <option value="En proceso">En proceso</option>
                      <option value="Cancelada">Cancelada</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
      </main>
    </div>
  );
};

export default Ventas;
