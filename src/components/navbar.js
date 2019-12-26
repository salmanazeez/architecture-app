import React from 'react';
import '../assets/sass/home.scss'
import {Navbar,
        Nav, 
        } from 'react-bootstrap';

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="#home">BALTICARCH.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Company</Nav.Link>
                        <Nav.Link href="#pricing">Objects</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">News</Nav.Link>
                        <Nav.Link href="#pricing">Careers</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export default NavBar;