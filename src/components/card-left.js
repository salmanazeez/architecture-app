import React from 'react';
import '../assets/sass/components/card.scss'
import Typography from '@material-ui/core/Typography';
import {Row,
        Col, 
        Image,
        } from 'react-bootstrap';

function CardLeft() {
    return (
        <Row>
            <Col className="card-border">
                <div className="contents-container">
                    <Row>
                        <Col xs={12} md={4}>
                            <Typography variant="subtitle1">Modern wooden house in the forest</Typography>
                            <Typography variant="subtitle1" className="secondary-text">in Jurmala, Latvia</Typography>
                            <div className="details-container">
                                <Typography variant="subtitle1">Customer: <span className="secondary-text">Private customer</span></Typography>
                                <Typography variant="subtitle1">Designer: <span className="secondary-text">Baltic Arch Ltd.</span></Typography>
                                <Typography variant="subtitle1">Production date: <span className="secondary-text">2013</span></Typography>
                                <Typography variant="subtitle1">Location: <span className="secondary-text">Latvia, Jurmala, 36 Piltenes street</span></Typography>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <Image src={require('../assets/img/objects1.jpg')} fluid />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}
export default CardLeft;