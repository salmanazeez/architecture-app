import React from 'react';
import '../assets/sass/home.scss'
import NavBar from '../components/navbar';

import {Row,
        Col, 
        Image,
        } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';

function Home() {
    return (
        <div className="homepage-container">
            <Row>
                <Col>
                    <NavBar></NavBar>
                </Col>
            </Row>
            <div className="contents-container">
                <Row>
                    <Col xs={12} md={6}>
                        <Col xs={12} md={4}></Col>
                        <Col xs={12} md={8}>
                            <div className="text-container">
                                <Typography variant="subtitle1">Modern architecture</Typography>
                                <Typography variant="h1">Design &</Typography>
                                <Typography variant="h1"><strong>Architecture</strong></Typography>
                                <Typography variant="subtitle1">Found in Riga with 7 offices in Latvia, Baltic Arch is a company made up of a highly specialized team of architects, designers and engineers.</Typography>
                            </div>
                        </Col>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="social-container">
                            <Image src={require('../assets/img/facebook.png')} fluid />
                            <Image src={require('../assets/img/instagram.png')} fluid />
                            <Image src={require('../assets/img/twitter.png')} fluid />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Home;