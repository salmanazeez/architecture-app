import React from 'react';
import '../assets/sass/pages/works.scss'
import {Row,
    Col, 
    Image,
    } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { Helmet } from 'react-helmet'

const pageTitle = 'Our own works'

function Works() {
    return (
        <div className="work-container">
            <Helmet>
                <title>{ pageTitle }</title>
            </Helmet>
            <Row>
                <Col xs={12} md={6}>
                    <Image src={require('../assets/img/works/image2.jpg')} fluid /> 
                    <Typography variant="h5">Retail</Typography>
                </Col>
                <Col xs={12} md={6}>
                    <Typography variant="h1">Our works</Typography>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={require('../assets/img/works/image2.jpg')} fluid /> 
                    <Typography variant="h5">Office</Typography>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={require('../assets/img/works/image2.jpg')} fluid /> 
                    <Typography variant="h5">Residential</Typography>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={require('../assets/img/works/image2.jpg')} fluid /> 
                    <Typography variant="h5">Heritage</Typography>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={require('../assets/img/works/image2.jpg')} fluid /> 
                    <Typography variant="h5">Hospitality</Typography>
                </Col>
            </Row>
        </div>
    );
}

export default Works;