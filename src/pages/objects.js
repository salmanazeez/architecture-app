import React from 'react';
import '../assets/sass/pages/objects.scss'
import CardLeft from '../components/card-left'
import CardRight from '../components/card-right'
import Typography from '@material-ui/core/Typography'
import {Row,
        Col,
        } from 'react-bootstrap';

function Objects() {
    return (
        <div className="page-container">
            <Row>
                <Col xs={12} md={6}>
                    <Typography variant="h1">Objects</Typography>
                </Col>
                <Col className="sub-category" xs={12} md={6}>
                    <Typography variant="subtitle1">house-building</Typography>
                    <Typography variant="subtitle1">landscape architecture</Typography>
                    <Typography variant="subtitle1" className="active">designing</Typography>
                    <Typography variant="subtitle1">interior designs</Typography>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardLeft></CardLeft>
                    <CardRight></CardRight>
                    <CardLeft></CardLeft>
                    <CardRight></CardRight>
                </Col>
            </Row>
        </div>
    );
}
export default Objects;