import React, { useState } from "react";
import TopMenuBar from "../Template/TopMenuBar";

import './../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate, useParams, generatePath} from 'react-router-dom';



function LoginNoFormik () {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    var isValid = false;

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/employee-login", {
                method: "POST",
                body: JSON.stringify({
                    userId: userId,
                    password : password,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r);
            
            //console.log("Test Response " + await res.text());

            // if (res.status === 200) {
            //     setLoginCode("");
            //     setMessage("Code entered successfully");
            // } else {
            //     setMessage("Some error occured");
            // }

            isValid = await res.text();
            console.log("Valid user " + isValid);
            if(isValid === 'true')
                navigate("/verify-login/" + userId);
            else   
                setMessage("User Id and Password does not matched !!");
        } catch (err) {
            console.log(err);
        }
        //let url = "/verify-login/" + userId;
        //navigate('/verify-login');
        //userId && navigate(generatePath("/verify-login/:code", { userId }));
        //navigate("/verify-login/" + userId);
       // navigate(`/verify-login/${userId}`);

        
    };



    return (
        <Container>

            <Container>
                <Row className="justify-content-md-center mt-4" >
                    {/* <Col sm={1}>sm=8</Col> */}
                    <Col md={6}>
                        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
                        <Form onSubmit={handleSubmit}
                            action="employee-login"
                            method="POST"
                        >
                            <Form.Group className="mb-3" controlId="userId">
                                <Form.Label > User Id :</Form.Label>
                                <Form.Control type="text" placeholder="Enter user Id" 
                                    value={userId}
                                    onChange={(event) => setUserId(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Button className="justify-content-md-start " variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>

                                <Col md={6}>
                                    <Button className="justify-content-md-end" variant="primary" type="submit">
                                        Forgot Password
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        
                        <div style={{color: "red"}}> {message} </div>

                    </Col>
                </Row>
            </Container>


        </Container>
    );
}

export default LoginNoFormik;