import React from 'react';
import '../assets/sass/components/navbar.scss'
import {Navbar,
        Nav, 
        Form,
        FormControl,
        Row,
        Col, 
        } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import HomePage from '../pages/home'
import ObjectsPage from '../pages/objects'

import {  Route, Link, Switch } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Row>
                <Col>
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Brand as={Link} to="/">BALTICARCH.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/">Company</Nav.Link>
                                <Nav.Link as={Link} to="/objects">Objects</Nav.Link>
                                <Nav.Link as={Link} to="/">Services</Nav.Link>
                                <Nav.Link as={Link} to="/">News</Nav.Link>
                                <Nav.Link as={Link} to="/">Careers</Nav.Link>
                                <Nav.Link as={Link} to="/">Contact</Nav.Link>
                                <Form inline>
                                    <SearchIcon className="search-icon" /><FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                        
                    </Navbar>
                </Col>
            </Row>
            <Switch>
                <Route exact path='/'  component={Home} />
                <Route exact path='/objects'  component={Objects} />
            </Switch>
        </div>
    );
}

function Home() {
    return <HomePage></HomePage>;
}

function Objects() {
    return <ObjectsPage></ObjectsPage>;
}
export default NavBar;