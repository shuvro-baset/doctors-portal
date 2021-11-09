import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                <Form>
                    <input onChange={handleOnChange} name="email" type="text" placeholder="email" /> <br />
                    <input onChange={handleOnChange} name="password" type="text" placeholder="password" /> <br />
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