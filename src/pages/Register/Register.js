import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {

    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    // const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }


    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <Form>
                        <input onBlur={handleOnBlur} name="name" type="text" placeholder="name" /> <br />
                        <input onBlur={handleOnBlur} name="email" type="text" placeholder="email" /> <br />
                        <input onBlur={handleOnBlur} name="password" type="text" placeholder="password" /> <br />
                        <button type="submit">submit</button>
                    </Form>
                    <p>Already Have Account! Please <Link to="/login">login </Link> </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;