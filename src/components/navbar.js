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
import CompanyPage from '../pages/company'
import WorksPage from '../pages/works'

import {  Route, Link, Switch } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Row>
                <Col className="nav-border">
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Brand as={Link} to="/"><span>BALTIC</span>ARCH.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/company">Company</Nav.Link>
                                <Nav.Link as={Link} to="/objects">Objects</Nav.Link>
                                <Nav.Link as={Link} to="/works">Works</Nav.Link>
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
                <Route exact path='/company'  component={Company} />
                <Route exact path='/works'  component={Works} />
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

function Company() {
    return <CompanyPage></CompanyPage>;
}

function Works() {
    return <WorksPage></WorksPage>;
}
export default NavBar;