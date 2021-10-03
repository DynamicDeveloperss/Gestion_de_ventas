import Vendedores from "./components/modulo-vendedores/Vendedores";
import Login from "./components/login/Login";
import { Productos } from "./components/AdmdeProductos/Productos";
import Roles from './components/modulo_roles/Roles';
import Ventas from './components/ventas/Ventas';
import Header from "./components/header/Header";

function App() {
  return (
    <div> 
      <Ventas/>
      <Login/>
      <Productos/>
      <Roles/>
      <Vendedores/>
    </div>
  );
};




export default App;

