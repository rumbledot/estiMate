import React from 'react'
import { Container } from 'reactstrap'
import AppNavBar from '../components/AppNavbar'

const MainPage = () => {
    return (
        <div>
        <AppNavBar/>
        <Container>
            <h1>Welcome to estiMate</h1>
        </Container>
        </div>
    )
}

export default MainPage