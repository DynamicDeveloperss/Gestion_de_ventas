import React from 'react'
import './vendedores.css';
import logo from './Icono.png'
import ScriptTag from 'react-script-tag';
const Demo = props => (
<ScriptTag type="text/javascript" src="./form.js" />
)

const Vendedores = () => {
    return (
        <div>
            <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
            </section>
            <section>    
                <form id="formTable" action="" className="forms">
                    <h3 className="subtitulos">REGISTRO DE VENDEDORES</h3>
                    <br/>
                        <label for="lastname">Apellidos </label>
                        <input id="lastname" type="text" name="lastname" placeholder="Perez Perez" />
                        <label for="sailsName">Nombres </label>
                        <input id="sailsName" type="text" name="sailsName" placeholder="Pepito " />
                        <label for="speciality">Especialidad</label>
                        <input id="speciality" type="text" name="speciality" placeholder="Especialidad" required/>                
                        <label for="phone">Telefono</label>
                        <input id="phone" name="phone"placeholder="Telefono" type="text" />
                        <label for="dateOfAdmision">Fecha de Ingreso</label>
                        <input id="dateOfAdmision" name="dateOfAdmision" type="date"/>
                        <label for="sailsId">Identificacion </label>
                        <input id="sailsId" name="sailsId" placeholder="ID" type="number"/>     
                    <br/>
                    <div className="table-container">
                        <table id="recordTable" className="tabla-ventas">
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
