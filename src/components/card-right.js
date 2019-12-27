import React from 'react';
import '../assets/sass/components/card.scss'
import Typography from '@material-ui/core/Typography';
import {Row,
        Col, 
        Image,
        } from 'react-bootstrap';

function CardRight() {
    return (
        <Row>
            <Col className="card-border">
                <div className="contents-container">
                    <Row>
                        <Col xs={12} md={8}>
                            <Image src={require('../assets/img/objects2.jpg')} fluid />
                        </Col>
                        <Col xs={12} md={4}>
                            <Typography variant="subtitle1">Jurmala Sun Terraces</Typography>
                            <Typography variant="subtitle1" className="secondary-text">Three new residential buildings and 12 storeys, housing a total of 100 thousand m2 of accommodation in Latvia, Jurmala</Typography>
                            <div className="details-container">
                                <Typography variant="subtitle1">Customer: <span className="secondary-text">Jurmala Real Estates</span></Typography>
                                <Typography variant="subtitle1">Designer: <span className="secondary-text">Baltic Arch Ltd.</span></Typography>
                                <Typography variant="subtitle1">Production date: <span className="secondary-text">2014-2015</span></Typography>
                                <Typography variant="subtitle1">Location: <span className="secondary-text">Latvia, Jurmala, 92 Viktorijas street</span></Typography>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
export default CardRight;