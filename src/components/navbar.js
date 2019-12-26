import React from 'react';
import '../assets/sass/home.scss'
import {Navbar,
        Nav, 
        Form,
        FormControl,
        } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

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
                        <Form inline>
                            <SearchIcon className="search-icon" /><FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export default NavBar;