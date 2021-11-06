import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>


            <Container>
                <Row>
                    <div>
                        <Col md={6}>
                            
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