import React from 'react';
import '../assets/sass/home.scss'
import NavBar from '../components/navbar';

import {Row,
        Col, 
        } from 'react-bootstrap';

function Home() {
    return (
        <div className="homepage-container">
            <Row>
                <Col>
                    <NavBar></NavBar>
                </Col>
            </Row>
        </div>
    );
}
export default Home;