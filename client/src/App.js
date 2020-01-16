import React, { Component } from 'react'
// import AppNavbar from './components/AppNavbar'
// import MaterialList from './components/MaterialList'
// import ItemModal from './components/ItemModal'

// import { Container } from 'reactstrap'

// import { Provider } from 'react-redux'
// import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from "./pages/index"
import MaterialPage from "./pages/materials"
import EstimatePage from "./pages/estimate"
import P5 from "./pages/p5"
import {
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/"           component={ Home }/>
        <Route exact path="/materials"  component={ MaterialPage }/>
        <Route exact path="/estimate"   component={ EstimatePage }/>
        <Route exact path="/p5"         component={ P5 }/>
      </div>
    );
  }
}

export default App