import React from 'react'
import './Home.css';
import logo from './Icono.png'
import imgBanner from './banner.jpg'
import usuarios from './usuario.jpg'
import ventas from './ventas.jpg'
import productos from './productos.jpg'
import registro from './producto.jpg'

export const Home = () => {
    return (
        <div> 
            
            <main>
                <section id="banner">
                    <figure>
                        <img src={imgBanner}/>
                    </figure>
                    <div class="contenedor">
                        <h2>Dynamic Hardware</h2>
                    </div>
                </section>
                <section id="paginas">
                    <h1>¿A donde quieres ir?</h1>
                    <div class="contenedor">
                        <article>
                            <img src={usuarios}/>
                            <h4>Registro Usuarios</h4>

                        </article>
                        <article>
                            <img src={ventas}/>
                            <h4>Ventas</h4>

                        </article>
                        <article>
                            <img src={productos}/>
                            <h4>Registro Productos</h4>

                        </article>
                        <article>
                            <img src={registro}/>
                            <h4>Registro vendedores</h4>

                        </article>
                    </div>

                </section>
            </main> 
        
        
        </div>
    )
}

export default Home
