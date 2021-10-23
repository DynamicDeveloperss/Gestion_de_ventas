import React, {useState,} from 'react';
import axios from 'axios';
import './Productos.css'
import logo from './Icono.png'
import Header from '../header/Header';



const Productos = () => {
    const [datos, setDatos] = useState({
        nombre_producto: '',
        id_producto: '',
        precio: '',
        unidades: '',
        estado_producto: 'disponible',
        descripcion: ''

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
            await axios.post('http://localhost:5000/agregaProductos', datos);
            alert ("informacion enviada");
            
        } catch (error) {
            console.error("hubo un error" + error);
        }
    }

    return (
        <div>
            <Header/>
            <body className="grid-container">
                <main className="main">
                    <section className="main-logo">
                        <img src= {logo} alt="Logo" className="logo-Grande"/>
                        <h1 className ="titulo-principal">DYNAMIC HARDWARE</h1>
                    </section>
                    <section>
                        <form action="" className="forms" onSubmit={enviarDatos}>
                            <h3 className="subtitulos">REGISTRO DE PRODUCTOS</h3>
                            <br />
                            <label htmlFor="nombre_producto">Nombre Producto </label>
                            <input type="text" name="nombre_producto" placeholder=""   required  onChange={handleInputChange}></input>
                            <label htmlFor="id_producto">ID de Producto </label>
                            <input type="text" name="id_producto" placeholder=""  required  onChange={handleInputChange}></input>
                            <label htmlFor="precio">Precio por Unidad</label>
                            <input type="number" name="precio" placeholder="" required onChange={handleInputChange}></input>
                                <label htmlFor="unidades">Numero de Unidades </label>
                                <input name= "unidades" placeholder="" type="text"  required  onChange={handleInputChange}></input>
                                    <h3 className="subtitulos">Estado del Producto</h3>
                                    <select name="estado-producto" id="estado" className="roles"  required  onChange={handleInputChange}>
                                        <option value="disponible">Disponible</option>
                                        <option value="noDisponible">No Disponible</option>
                                    </select>
                                    <br />

                                    <h3 className="subtitulos">Descripción</h3>
                                    <textarea  name="descripcion" id="descripción" required cols="98" rows="10" placeholder="Escribe la descripción del producto..."  required  onChange={handleInputChange}></textarea >

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
export default Productos;