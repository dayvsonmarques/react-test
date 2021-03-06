import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div className="container"> 
                <div className="row text-center">
                    <div className="col-12">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                           
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;