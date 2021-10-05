
import React from 'react';
import Header from '../header/Header';
import './ventas.css';
import logo from './Icono.png';


const Ventas = () => {
  return (
    <div>
      <Header />
      <main class="main">
      <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
      </section>
        <section>
          <form action="" class="forms">
            <h3 class="subtitulos">Información del Comprador</h3>
            <input type="text" placeholder="Nombre" name="nombre" />
            <input type="text" placeholder="Cédula" name="cedula" />
            <input type="email" placeholder="Correo Electrónico" name="correo" />
            <input type="text" placeholder="Teléfono" name="telefono" />
            <h3 class="subtitulos">Información de la Venta</h3>
            <label for="id-vendedor">ID Vendedor</label>
            <input type="text" id="id-vendedor" placeholder="ID Vendedor" name="id-vendedor" />
            <label for="">ID Producto</label>
            <input type="text" placeholder="ID Producto" name="id-producto" />
            <label for="">Cantidad</label>
            <input type="number" placeholder="Cantidad" name="cantidad" />
            <label for="">Valor de la Venta</label>
            <input type="text" placeholder="Valor" name="valor" />
            <label for="fecha-venta">Fecha de Venta</label>
            <input type="date" id="fecha-venta" placeholder="Fecha de Venta" name="fecha-venta" />
            <button class="btn btn-verde">Agregar Venta</button>
          </form>
        </section>
        <section class="section-tabla">
          <h3 class="subtitulos">Registro de Ventas</h3>
          <div class="input-buscar">
            <input type="text" placeholder="Buscar" />
            <i class="fas fa-search"></i>
          </div>
          <table class="tabla-ventas">
            <thead>
              <th></th>
              <th>ID Venta</th>
              <th>Cédula Comprador</th>
              <th>Productos</th>
              <th>Valor Total</th>
              <th>Fecha de Venta</th>
              <th>ID Vendedor</th>
              <th>Estado</th>
            </thead>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>
                <select name="estado" class="combo-estado">
                  <option value="0">Estado...</option>
                  <option value="entregado">Entregado</option>
                  <option value="en proceso">En proceso</option>
                  <option value="cancelada">Cancelada</option>
                </select>
              </td>
            </tr>
          </table>
          <button class="btn btn-rojo">Eliminar Venta</button>
        </section>
      </main>
    </div>
  );
};

export default Ventas;
