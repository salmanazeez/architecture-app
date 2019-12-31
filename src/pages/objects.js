import React from 'react';
import '../assets/sass/pages/objects.scss'
import CardLeft from '../components/card-left'
import CardRight from '../components/card-right'
import Typography from '@material-ui/core/Typography'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {Row,
        Col,
        Form,
        FormControl,
        } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

const pageTitle = 'Objects and services of BALTICARCH'

function Objects() {
    return (
        <div className="page-container">
            <Helmet>
                <title>{ pageTitle }</title>
            </Helmet>
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
            <Row>
                <Col xs={12} md={6} className="newsletter-container">
                    <Typography variant="subtitle1"><strong>Subscribe to our newsletter to receive exclusive information about us and our services</strong></Typography>
                    <Form inline>
                        <FormControl type="text" placeholder="Enter your e-mail" className="mr-sm-2" /><ArrowRightAltIcon />
                    </Form>
                </Col>
                <Col xs={12} md={6}>

                </Col>
            </Row>
        </div>
    );
}
export default Objects;