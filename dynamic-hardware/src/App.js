
import React from 'react';
import Vendedores from "./components/modulo-vendedores/Vendedores";
import Login from "./components/login/Login";
import { Productos } from "./components/AdmdeProductos/Productos";
import Ventas from './components/ventas/Ventas';
import Header from "./components/header/Header";*/
import Roles from './components/modulo_roles/Roles';
import Productos from './components/AdmdeProductos/Productos';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/vendedores'>
          <Vendedores/>
        </Route>
        <Route path= '/roles'>
          <Roles/>
        </Route>
        <Route path= '/productos'>
          <Productos/>
        </Route>
        <Route path= '/ventas'>
          <Ventas/>
        </Route>
    </Switch>
    </Router>
    </div>
  );
};




export default App;

