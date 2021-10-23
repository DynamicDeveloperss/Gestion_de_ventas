import Login from "./components/login/Login";
import { Component } from "react";
import Vendedores from "./components/modulo-vendedores/Vendedores";
import { Productos } from "./components/AdmdeProductos/Productos";
import Roles from './components/modulo_roles/Roles';
import Ventas from './components/ventas/Ventas';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <Login/>
        <Ventas/>
        <Productos/>
        <Roles/>
        <Vendedores/>
      </div>
    );
  }
}

export default App;

