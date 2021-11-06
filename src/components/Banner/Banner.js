import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from './../../images/chair.png';
import './Banner.css'


const Banner = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className="banner d-flex flex-column justify-content-center ">
                        <h2>Your New Smile <br /> Starts Here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam soluta odit distinctio, unde dolor voluptatibus libero autem reiciendis eum.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="banner d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid" src={bannerImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;