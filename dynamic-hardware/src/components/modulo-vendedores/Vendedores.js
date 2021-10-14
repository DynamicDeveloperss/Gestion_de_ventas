import React, {useRef, useState} from 'react'
import './vendedores.css';
import logo from './Icono.png'

const Vendedores = () => {
    const datosIniciales = [
    ];

    const formVenta = useRef(null);
    const [datos, setDatos] = useState(datosIniciales);
  
    //const [agregarPoducto, setAgregarProducto] = useState(false);
  
    // Función que captura los datos del formulario
    const enviarDatos = (e) => {
      e.preventDefault(); // Evita que el navegador refresque la página luego de un submit
      const fd = new FormData(formVenta.current); // Aqui se almacena la informacion del formulario
      const nuevaVenta = {};
      e.target.reset();
      fd.forEach((item, key) => {
        nuevaVenta[key] = item;
      });
      console.log(nuevaVenta);
      setDatos([...datos, nuevaVenta]);

    };

    return (
        <div>
            <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
            </section>
            <section>    
                <form ref={formVenta} onSubmit={enviarDatos} id="formTable" action="" className="forms">
                    <h3 className="subtitulos">REGISTRO DE VENDEDORES</h3>
                    <br/>
                        <label for="lastname">Apellidos </label>
                        <input id="lastname" type="text" name="lastname" placeholder="Apellido" required/>
                        <label for="sailsName">Nombres </label>
                        <input id="sailsName" type="text" name="sailsName" placeholder="Nombre" required/>
                        <label for="speciality">Especialidad</label>
                        <input id="speciality" type="text" name="speciality" placeholder="Especialidad" required/>                
                        <label for="phone">Telefono</label>
                        <input id="phone" name="phone"placeholder="Telefono" type="text" required/>
                        <label for="dateOfAdmision">Fecha de Ingreso</label>
                        <input id="dateOfAdmision" name="dateOfAdmision" type="date" required/>
                        <label for="sailsId">Identificacion </label>
                        <input id="sailsId" name="sailsId" placeholder="ID" type="number" required/>     
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
                            {datos.map((item, key) => {
                                return (
                                    <tr>
                                        <td>{item.sailsId}</td>
                                        <td>{item.sailsName}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.speciality}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.dateOfAdmision}</td>
                                    </tr>

                                );
                            })}
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
