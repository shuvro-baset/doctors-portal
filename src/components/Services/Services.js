import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fluoride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import treatment from '../../images/treatment.png'
import './Services.css'

const Services = () => {
    return (
        <Container>
            <Row className="my-3">
                <div className="text-center service-head">
                    <h6 className="my-3">Our Services</h6>
                    <h1>Services We Provide</h1>
                </div>
            </Row>
            <Row className="my-3">
                <Col md={4} className="text-center">
                    <img className="img-fluid" src={fluoride} alt="" />
                    <h3 className="my-4">Fluoride Treatment</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ratione ipsum officia rerum mollitia repellat repudiandae non molestiae labore facilis.</p>
                </Col>
                <Col md={4} className="text-center">
                    <img className="img-fluid" src={cavity} alt="" />
                    <h3 className="my-4">Cavity Filling</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ratione ipsum officia rerum mollitia repellat repudiandae non molestiae labore facilis.</p>
                </Col>
                <Col md={4} className="text-center">
                    <img className="img-fluid" src={whitening} alt="" />
                    <h3 className="my-4">Teeth Whitening</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ratione ipsum officia rerum mollitia repellat repudiandae non molestiae labore facilis.</p>
                </Col>

            </Row>
            <Row className="my-5">
                <Col md={5} className="treatment">
                   <div className="d-flex justify-content-center align-items-center">
                        <img src={treatment} className="img-fluid" alt="" />
                   </div>
                </Col>
                <Col md={7}>
                    <div style={{'height': '400px'}} className="d-flex flex-column justify-content-center align-items-start">
                        <h2>Exceptional Dental <br /> Care, on Your Terms </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit exercitationem, nulla voluptas at fuga optio possimus ullam incidunt obcaecati aperiam reprehenderit, commodi est inventore quis iste, dolor tempore quas accusantium non nobis. Magni illum placeat natus dolorem reprehenderit ea.</p>
                        <button className="custom-btn">learn more</button>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Services;