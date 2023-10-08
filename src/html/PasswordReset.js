import React, { useState } from "react";
import TopMenuBar from "../Template/TopMenuBar";

import '../Template/App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PasswordReset() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    return (
        <Container>
            {/* <TopMenuBar /> */}

            <Container>
                <Row className="justify-content-md-center mt-4" >
                    <Col md={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 " controlId="password">
                                <Form.Label > Enter New Password :</Form.Label>
                                <Form.Control type="text" placeholder="Enter user Id" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Button className="justify-content-md-start " variant="primary" type="submit">
                                        Cancel
                                    </Button>
                                </Col>

                                <Col md={6}>
                                    <Button className="justify-content-md-end" variant="success" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>



        </Container>
    );
}

export default PasswordReset;