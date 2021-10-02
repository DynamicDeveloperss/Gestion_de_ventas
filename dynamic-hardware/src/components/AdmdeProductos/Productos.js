import React from 'react'
import './Productos.css'
import logo from './Icono.png'

export const Productos = () => {
    return (
        <div>
            <body className="grid-container">
                <main className="main">
                    <section className="main-logo">
                        <img src= {logo} alt="Logo" className="logo-Grande"/>
                        <h1 className ="titulo-principal">NEW ANDROID</h1>
                    </section>
                    <section>
                        <form action="" className="forms">
                            <h3 className="subtitulos">REGISTRO DE PRODUCTOS</h3>
                            <br />
                            <label for="nombre_producto">Nombre Producto </label>
                            <input type="text" name="nombre_producto" placeholder="" ></input>
                            <label for="id_producto">ID de Producto </label>
                            <input type="text" name="id_producto" placeholder=""></input>
                            <label for="precio">Precio por Unidad</label>
                            <input type="email" name="precio" placeholder="" required></input>
                                <label for="unidades">Numero de Unidades </label>
                                <input name="sueldo" name="unidades" placeholder="" type="text"></input>
                                    <h3 className="subtitulos">Estado del Producto</h3>
                                    <select name="roles" id="rol" className="roles">
                                        <option value="disponible">Disponible</option>
                                        <option value="noDisponible">No Disponible</option>
                                    </select>
                                    <br />

                                    <h3 className="subtitulos">Descripción</h3>
                                    <textarea  name="descripción" id="descripción" required cols="98" rows="10" placeholder="Escribe la descripción del producto..."></textarea>


                                    <br/>
                                        <h3 className="subtitulos">Imagen del Producto</h3>
                                        <input type="file" name="archivo" id="file"></input>
                                            <button type="submit" className="btn btn-verde" onclick="document.getElementById('file').click()">Subir Archivo</button>

                                            <br/>
                                                <button type="submit" className="btn btn-verde">Enviar Datos</button>
                                                <button type="reset" className="btn btn-verde" >Reiniciar</button>

                                            </form>
                    </section>
                                    </main>

                                </body>

        </div>
                            )
}
