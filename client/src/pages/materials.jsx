import React, { Component } from 'react'
import AppNavbar from '../components/AppNavbar'
import MaterialList from '../components/MaterialList'
import ItemModal from '../components/ItemModal'

import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from '../store'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

const MaterialPage = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar/>
                <Container>
                    <h1>Welcome to estiMate</h1>
                    <ItemModal/>
                    <MaterialList/>
                </Container>
            </div>
        </Provider>
    )
}

export default MaterialPage