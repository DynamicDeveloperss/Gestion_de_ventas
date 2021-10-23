import React from 'react';
import { Component } from "react";
import Vendedores from "./components/modulo-vendedores/Vendedores";
import Login from "./components/login/Login";
import Productos  from "./components/AdmdeProductos/Productos";
import Roles from './components/modulo_roles/Roles';
import Ventas from './components/ventas/Ventas';
import Home from './components/paginaHome/Home';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default class App extends Component {
  render() {
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
        <Route path = '/'>
          <Home/>
        </Route> 
    </Switch>
    </Router>
    </div>
  );
};
};



