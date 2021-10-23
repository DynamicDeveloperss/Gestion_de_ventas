import React from 'react'
import './Home.css';
import imgBanner from './banner.jpg'
import usuarios from './usuario.jpg'
import ventas from './ventas.jpg'
import productos from './productos.jpg'
import registro from './producto.jpg'
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div> 
            
            <main>
                <section id="banner">
                    <figure>
                        <img src={imgBanner} alt="Logo"/>
                    </figure>
                    <div class="contenedor">
                        <h2>Dynamic Hardware</h2>
                    </div>
                </section>
                <section id="paginas">
                    <h1>¿A donde quieres ir?</h1>
                    <div class="contenedor">
                        <article>
                            <Link to= "/roles">
                            <img src={usuarios} alt="Logo"/>
                            <h4>Registro Usuarios</h4>
                            </Link>

                        </article>
                        <article>
                            <Link to = "/ventas">
                            <img src={ventas} alt="Logo"/>
                            <h4>Ventas</h4>
                            </Link>

                        </article>
                        <article>
                        <Link to= "/productos">
                            <img src={productos} alt="Logo"/>
                            <h4>Registro Productos</h4>
                        </Link>

                        </article>
                        <article>
                            <Link to = "/vendedores">
                            <img src={registro} alt="Logo" />
                            <h4>Registro vendedores</h4>
                            </Link>
                        </article>
                    </div>

                </section>
            </main> 
        
        
        </div>
    )
}

export default Home
