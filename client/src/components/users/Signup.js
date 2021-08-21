import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './user.css'
import { useUserContext } from '../../contexts/UserContext';
import apiUrl from '../../axios';
import { Form, Button, Container } from 'react-bootstrap';

export default function Signup() {
    const [error, setError] = useState(null);
    const confirmPassword = useRef();
    const history = useHistory();
    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword
    } = useUserContext();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword.current.value) {
            return setError('passwords do not match!');
        }

        try {
            e.preventDefault();
            const response = await apiUrl.post('/users/signup', {
                name: name,
                email: email,
                password: password
            });

        console.log(response.data);

        localStorage.setItem('token', response.data.token);
        history.push('/');
        } catch (err) {
            setError('Cannot create account!')
        }
    }

    return (
        <>
            <Container className="justify-content-center align-content-center d-flex mt-5">
                <Form style={{ minWidth: "30%" }}>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text>Enter at least 6 characters</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="mb-5" >
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
}
