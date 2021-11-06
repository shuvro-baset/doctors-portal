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
                        <button className="custom-btn">Get Appointment</button>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="banner d-flex flex-column justify-content-center align-items-center">
                        <img className="img-fluid" src={bannerImg} alt="" />
                    </div>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={4}>
                    <div className="py-3 d-flex justify-content-evenly align-items-center banner-div">
                        <i className="far fa-clock banner-icon"></i>
                        <div>
                            <h4> Opening Hours</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="py-3 d-flex justify-content-evenly align-items-center banner-div2">
                    <i className="fas fa-map-marker-alt banner-icon"></i>
                        <div>
                            <h4>Visit Our Location</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="py-3 d-flex justify-content-evenly align-items-center banner-div">
                        <i className="fas fa-phone-alt banner-icon"></i>
                        <div>
                            <h4>Contact Us Now</h4>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Banner;