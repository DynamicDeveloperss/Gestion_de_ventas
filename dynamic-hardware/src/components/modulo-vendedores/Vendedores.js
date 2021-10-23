import React from 'react'
import './vendedores.css';
import logo from './Icono.png'
import Header from '../header/Header';


const Vendedores = () => {
    return (
        <div className = "grid-container">
            <Header/>
            <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
            </section>
            <section>    
                <form action="" className="forms">
                    <h3 className="subtitulos">REGISTRO DE VENDEDORES</h3>
                    <br/>
                        <label for="apellidos">Apellidos </label>
                        <input type="text" name="apellidos" placeholder="Perez Perez" />
                        <label for="nombre">Nombres </label>
                        <input  type="text" name="nombre" placeholder="Pepito " />
                        <label for="email">Especialidad</label>
                        <input type="text" placeholder="Especialidad" required/>                
                        <label for="telefono">Telefono</label>
                        <input name="telefono"placeholder="Telefono" type="text" />
                        <label for="fecha">Fecha de Ingreso</label>
                        <input name="fecha" type="date"/>
                        <label for="codigo">Identificacion </label>
                        <input name="identificacion" placeholder="1012345679" type="number"/>     
                    <br/>
                    <div className="table-container">
                        <table className="tabla-ventas">
                            <thead>
                                <th>ID Vendedor</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Especialidad</th>
                                <th>Telefono</th>
                                <th>Fecha de Ingreso</th>
                            </thead>
                            <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>$100000000</td>
                                <td>Lorem</td>
                                <td>24-05-2021</td>
                            </tr>
                            <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
        
                            </tr>
                            <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                             
                            </tr>
                            <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                
                            </tr>
                        </table>
                    </div>
                    
                    
                    <button type="submit" className="btn btn-verde">Ingresar vendedor</button>
                    <button type="reset" className="btn btn-verde" >Eliminar</button>
                </form>
            </section>
    </main>
            
        </div>
    )
}

export default Vendedores
