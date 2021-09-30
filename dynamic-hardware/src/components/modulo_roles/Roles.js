import React from 'react'

const Roles = () => {
    return (
        <div>
            <main className="main">
            <section  className="main-logo"> 
                <img src="./src/Imagenes y diseño/Imagenes/Icono.png" alt="Logo" class="logo-Grande">
                <h1 className="titulo-principal">NEW ANDROID</h1>
            </section>
            <section>    
                <form action="" className="forms">
                    <h3 className="subtitulos">REGISTRO USUARIOS</h3>
                    <br/>
                        <label for="apellidos">Apellidos </label>
                        <input type="text" name="apellidos" placeholder="Perez Perez" />
                        <label for="nombre">Nombres </label>
                        <input  type="text" name="nombre" placeholder="Pepito " />
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email del empleado" required>                
                        <label for="cargo"> Cargo </label>
                        <input name="sueldo" placeholder="vendedor" type="text" />
                        <label for="sueldo"> Sueldo </label>
                        <input name="sueldo" placeholder="10000"  type="number"/>
                        <label for="turno">Turno</label>
                        <input name="turno" placeholder="Diurno" type="text" />
                        <label for="codigo">Identificacion </label>
                        <input name="identificacion" placeholder="1012345679" type="number"/>
                        <section>
                    <h3 class="subtitulos">Roles de usuario</h3>
                        <select name="roles" id="rol" class="roles">
                            <option value="administrador">Administrador</option>
                            <option value="vendedor">Vendedor</option>
                            <option value="usuario">Usuario</option>
                        </select>  

                    <h3 class="subtitulos">Estado del Usuario</h3>
                    <select name="estado" id="rol" class="roles">
                        <option value="Pendiente">Pendiente</option>
                        <option value="autorizado">Autorizado</option>
                        <option value="no autorizado">No Autorizado</option>
                    </select>  
                </section>      
                    <br/>        
                <button type="submit" class="btn btn-verde">Enviar Datos</button>
                <button type="reset" class="btn btn-verde" >Reiniciar</button>
            
                </form>
            </section>
    </main>  
        </div>
    )
}

export default Roles
