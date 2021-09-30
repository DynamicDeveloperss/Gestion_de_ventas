import React from 'react';
import './roles.css';
import logo from './Icono.png';

const Roles = () => {
    return (
        <body className = "grid-container">
        <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">NEW ANDROID</h1>
            </section>
            <section>    
                <form action="" className="forms">
                    <h3 className="subtitulos">REGISTRO USUARIOS</h3>
                    <br/>
                        <label for="apellidos">Apellidos </label>
                        <input type="text" name="apellidos" placeholder="Perez Perez"></input>
                        <label for="nombre">Nombres </label>
                        <input  type="text" name="nombre" placeholder="Pepito "></input>
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email del empleado" required></input>                
                        <label for="cargo"> Cargo </label>
                        <input name="sueldo" placeholder="vendedor" type="text"></input>
                        <label for="sueldo"> Sueldo </label>
                        <input name="sueldo" placeholder="10000"  type="number"></input>
                        <label for="turno">Turno</label>
                        <input name="turno" placeholder="Diurno" type="text"></input>
                        <label for="codigo">Identificacion </label>
                        <input name="identificacion" placeholder="1012345679" type="number"></input>
                        <section>
                    <h3 className="subtitulos">Roles de usuario</h3>
                        <select name="roles" id="rol" className="roles">
                            <option value="administrador">Administrador</option>
                            <option value="vendedor">Vendedor</option>
                            <option value="usuario">Usuario</option>
                        </select>  

                    <h3 className="subtitulos">Estado del Usuario</h3>
                    <select name="estado" id="rol" className="roles">
                        <option value="Pendiente">Pendiente</option>
                        <option value="autorizado">Autorizado</option>
                        <option value="no autorizado">No Autorizado</option>
                    </select>  
            </section>      
                    <br/>        
                    <button type="submit" className="btn btn-verde">Enviar Datos</button>
                    <button type="reset" className="btn btn-verde" >Reiniciar</button>
            
                    </form>
            </section>
        </main> 
        </body> 
    
    );
};

export default Roles
