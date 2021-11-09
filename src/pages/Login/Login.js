import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                <Form>
                    <input type="text" placeholder="email" /> <br />
                    <input type="text" placeholder="password" /> <br />
                    <button type="submit">submit</button>
                </Form>
                <p>Don't Have Any Account! Please <Link to="/register">Register </Link> </p>
                <button className="btn btn-primary">Google Sign-in</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;