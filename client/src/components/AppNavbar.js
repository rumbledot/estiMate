import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
import '../App.css';

import {
    Link
} from 'react-router-dom'

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">estiMate</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/rumbledot">
                                    Github
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link className="navItem" to="/">
                                        Home
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link className="navItem" to="/materials">
                                        Materials
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href="">
                                    <Link className="navItem" to="/estimate">
                                        Estimate my house
                                    </Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}


export default AppNavbar