import React, {useRef, useState, useEffect} from 'react'
import './vendedores.css';
import axios from 'axios'
import logo from './Icono.png'

const Vendedores = () => {

    const formVenta = useRef(null);
    const [datos, setDatos] = useState([]);
    // const [keyword, setKeyword] = useState('');
    // const [filtro, setFiltro] = useState([]);

    useEffect(() => {
        obtenerVentas();
    }, []);
    
      const obtenerVentas = async () => {
        const options = { method: 'GET', url: 'http://localhost:5000/obtenervendedores' };
        await axios
          .request(options)
          .then(function (response) {
            setDatos(response.data);
            //setFiltro(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        };

    

    const enviarData = async (e) => {
        e.preventDefault()
        const fd = new FormData(formVenta.current); // Aqui se almacena la informacion del formulario
        const nuevaVenta = {};
        e.target.reset();
        fd.forEach((item, key) => {
            nuevaVenta[key] = item;
        });
        setDatos([...datos, nuevaVenta]);
        // console.log('enviando datos...' + JSON.stringify(datos))
        // try {
        //     await axios.post('http://localhost:5000/agregavendedores', datos);
        //     alert ("informacion enviada");
    
        // } catch (error) {
        //     console.error("hubo un error" + error);
        // }
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/agregavendedores',
            headers: { 'Content-Type': 'application/json' },
            data: {
              lastname: nuevaVenta.lastname,
              sailsName: nuevaVenta.sailsName,
              phone: nuevaVenta.phone,
              dateOfAdmision: nuevaVenta.dateOfAdmision,
              sailsId: nuevaVenta.sailsId,
            },
          };

          await axios
            .request(options)
            .then(function (response) {
                obtenerVentas();
            })
            .catch(function (error) {
                console.error(error);
            });


    };

    // useEffect(() => {
    //     setFiltro(
    //       datos.filter((elemento) => {
    //         return JSON.stringify(elemento).toLowerCase().includes(keyword.toLowerCase());
    //       })
    //     );
    // }, [keyword]);


    return (
        <div>
            <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
            </section>
            <section>    
                <form ref={formVenta} onSubmit={enviarData} id="formTable" action="" className="forms">
                    <h3 className="subtitulos">REGISTRO DE VENDEDORES</h3>
                    <br/>
                        <label for="lastname">Apellidos </label>
                        <input id="lastname" type="text" name="lastname" placeholder="Apellido" required/>
                        <label for="sailsName">Nombres </label>
                        <input id="sailsName" type="text" name="sailsName" placeholder="Nombre" required/>                
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
                                <th>Telefono</th>
                                <th>Fecha de Ingreso</th>
                            </thead>
                            {datos.map((item, key) => {
                                return (
                                    <tr>
                                        <td>{item.sailsId}</td>
                                        <td>{item.sailsName}</td>
                                        <td>{item.lastname}</td>
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
