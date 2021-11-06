import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import Services from '../../components/Services/Services';
import doctor from '../../images/doctor.png'
import './Home.css'
const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>


            <Container>
                <Row>
                    <div className="make-appointment">
                        <Col md={6}>
                            <img className="img-fluid" src={doctor} alt="" />
                        </Col>
                        <Col md={6}>

                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Home;