import Vendedores from "./components/ejemplo/modulo-vendedores/Vendedores";
import { Productos } from "./components/AdmdeProductos/Productos";
import Roles from './components/modulo_roles/Roles';
import Ventas from './components/ventas/Ventas';
import './components/modulo_roles/roles.css';
import './App.css';


function App() {
  return (
    <div> 
      <Vendedores/>
      <Productos></Productos>
    </div>
  );
};




export default App;

