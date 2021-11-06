import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        // menubar 
        <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
                <Navbar.Brand> <Link to="/home" className="logo-text">MS Child Care</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu-item" to="/home">Home</NavLink>
                    <NavLink className="menu-item" to="/services">Service</NavLink>
                    <NavLink className="menu-item" to="/doctors">Doctors</NavLink>
                    <NavLink className="menu-item" to="/news">News & Events</NavLink>
                    <NavLink className="menu-item" to="/about">About</NavLink>
                </Nav>

               
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;