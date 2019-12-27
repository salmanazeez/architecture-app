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
            <Col>
                <div className="contents-container">
                    <Row>
                        <Col xs={12} md={4}>
                            <Typography variant="subtitle1">Modern wooden house in the forest</Typography>
                            <Typography variant="subtitle1">in Jurmala, Latvia</Typography>
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