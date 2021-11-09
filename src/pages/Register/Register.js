import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <Form>
                        <input type="text" placeholder="first name" /> <br />
                        <input type="text" placeholder="last name" /> <br />
                        <input type="text" placeholder="email" /> <br />
                        <input type="text" placeholder="password" /> <br />
                        <button type="submit">submit</button>
                    </Form>
                    <p>Already Have Account! Please <Link to="/login">login </Link> </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;