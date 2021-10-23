import React, {useState,} from 'react';
import axios from 'axios';
import './roles.css';
import logo from './Icono.png';
import Header from '../header/Header';


  
const Roles =() => {
    const [datos, setDatos] = useState({
        apellido: '',
        nombre: '',
        correo: '',
        cargo: '',
        identificacion: '',
        roles: 'administrador',
        estado: 'pendiente'

    })
    const handleInputChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault()
        console.log('enviando datos...' + JSON.stringify(datos))
        try {
            await axios.post('http://localhost:5000/agregaRoles', datos);
            alert ("informacion enviada");
            
        } catch (error) {
            console.error("hubo un error" + error);
        }
    }

      
    return (
    <div className = "grid-container">
        <Header/>
          <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
            </section>
            <section>    
                <form action="" className="forms" onSubmit={enviarDatos}>
                    <h3 className="subtitulos">REGISTRO USUARIOS</h3>
                    <br/>
                        <label htmlFor="apellidos">Apellidos </label>
                        <input type="text" name="apellido" placeholder="Perez Perez" required  onChange={handleInputChange}  />
                        <label htmlFor="nombre">Nombres </label>
                        <input  type="text" name="nombre" placeholder="Pepito " required  onChange={handleInputChange} />
                        <label htmlFor="correo">Email</label>
                        <input type="email" placeholder="Email del empleado" name="correo" required   onChange={handleInputChange} />                
                        <label htmlFor="cargo"> Cargo </label>
                        <input name="cargo" placeholder="vendedor" type="text" required  onChange={handleInputChange} />
                        <label htmlFor="codigo">Identificacion </label>
                        <input name="identificacion" placeholder="1012345679" type="number" required  onChange={handleInputChange}  />
                        <section>
                    <h3 className="subtitulos">Roles de usuario</h3>
                        <select name="roles" className="roles"  required onChange={handleInputChange}>
                            <option value="administrador">Administrador</option>
                            <option value="vendedor">Vendedor</option>
                            <option value="usuario">Usuario</option>
                        </select>  

                    <h3 className="subtitulos">Estado del Usuario</h3>
                    <select name="estado"  className="roles" required onChange={handleInputChange} >
                        <option value="pendiente">Pendiente</option>
                        <option value="autorizado">Autorizado</option>
                        <option value="no autorizado">No Autorizado</option>
                    </select>  
            </section>      
                    <br/>        
                    <button type="submit" className="btn btn-verde" >Enviar Datos</button>
                    <button type="reset" className="btn btn-verde" >Reiniciar</button>
            
                    </form>
            </section>
        </main> 

        </div>

    );
}



export default Roles;