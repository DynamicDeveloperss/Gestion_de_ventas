import React, {Component} from 'react';
import './roles.css';
import logo from './Icono.png';


  
class Roles extends Component {
        constructor(props) {
        super(props);
        this.state = {roles: 'administrador'};
        this.state = {estado : 'pendiente'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            apellido: "",
            nombre:"",
            email:"",
            cargo:"",
            sueldo:"",
            turno: "",
            identificacion:"",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        };

        handleInputChange(event) {
            this.setState({nombre: event.target.nombre});
            this.setState({apellido: event.target.apellido});
            this.setState({email: event.target.email});
            this.setState({cargo: event.target.cargo});
            this.setState({sueldo: event.target.suedo});
            this.setState({turno: event.target.turno});
            this.setState({identificacion:event.target.identificacion});
        };

        handleChange(event) {
            this.setState({roles: event.target.roles});
            this.setState({estado: event.target.estado});
        };
        
        handleSubmit(event) {
            console.log(this.state);
            
            alert('SU ROL ES: ' + this.state.roles);
            event.preventDefault();
        };

    render(){
    return (
        <body className = "grid-container">
        <main className="main">
            <section  className="main-logo"> 
                <img src={logo} alt="Logo" className="logo-Grande"/>
                <h1 className="titulo-principal">DYNAMIC HARDWARE</h1>
            </section>
            <section>    
                <form action="" className="forms">
                    <h3 className="subtitulos">REGISTRO USUARIOS</h3>
                    <br/>
                        <label htmlFor="apellidos">Apellidos </label>
                        <input type="text" name="apellidos" placeholder="Perez Perez" value = { this.state.apellido} onChange={this.handleInputChange}></input>
                        <label htmlFor="nombre">Nombres </label>
                        <input  type="text" name="nombre" placeholder="Pepito "value = { this.state.nombre} onChange={this.handleInputChange}></input>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email del empleado" required value = { this.state.email} onChange={this.handleInputChange}></input>                
                        <label htmlFor="cargo"> Cargo </label>
                        <input name="sueldo" placeholder="vendedor" type="text" value = { this.state.cargo} onChange={this.handleInputChange}></input>
                        <label htmlFor="sueldo"> Sueldo </label>
                        <input name="sueldo" placeholder="10000"  type="number" value = { this.state.sueldo} onChange={this.handleInputChange}></input>
                        <label htmlFor="turno">Turno</label>
                        <input name="turno" placeholder="Diurno" type="text" value = { this.state.turno} onChange={this.handleInputChange}></input>
                        <label htmlFor="codigo">Identificacion </label>
                        <input name="identificacion" placeholder="1012345679" type="number" value = { this.state.identificacion} onChange={this.handleInputChange}></input>
                        <section>
                    <h3 className="subtitulos">Roles de usuario</h3>
                        <select name="roles" className="roles"value={this.state.roles} onChange={this.handleChange} >
                            <option value="administrador">Administrador</option>
                            <option value="vendedor">Vendedor</option>
                            <option value="usuario">Usuario</option>
                        </select>  

                    <h3 className="subtitulos">Estado del Usuario</h3>
                    <select name="estado"  className="roles" value={this.state.estado} onChange={this.handleChange}>
                        <option value="Pendiente">Pendiente</option>
                        <option value="autorizado">Autorizado</option>
                        <option value="no autorizado">No Autorizado</option>
                    </select>  
            </section>      
                    <br/>        
                    <button type="submit" className="btn btn-verde">Enviar Datos onSubmit={this.handleSubmit}</button>
                    <button type="reset" className="btn btn-verde" >Reiniciar</button>
            
                    </form>
            </section>
        </main> 
        </body> 
    
    );
}
}


export default Roles;
