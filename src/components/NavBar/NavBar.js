import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        // menubar 
        <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu-item" to="/home">Home</NavLink>
                    <NavLink className="menu-item" to="/">About</NavLink>
                    <NavLink className="menu-item" to="/">Dental Services</NavLink>
                    <NavLink className="menu-item" to="/">Reviews</NavLink>
                    <NavLink className="menu-item" to="/">Blog</NavLink>
                    <NavLink className="menu-item" to="/">Contact Us</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;