import React, { useState } from "react";
import TopMenuBar from "../Template/TopMenuBar";
import LeftSidebar from "../Template/LeftSideBar";
import Login from './Login';
import PasswordReset from './PasswordReset';

import './../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, Route, Router, Routes, useNavigate, useParams} from 'react-router-dom';



function LoginVerification() {
    //const [userId, setUserId] = useState('');
    const [loginCode, setLoginCode] = useState("");
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const params = useParams();
    
    var isVerified = false;
    
    //const { id } = useParams();

    // const handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }

    //   setValidated(true);
    // };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/verify-login", {
                method: "POST",
                body: JSON.stringify({
                    userId: params.id,
                    loginCode: loginCode,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r);
            
            // console.log("Test Response " + JSON.stringify(res.data));
            //console.log("Test Response " + await res.text());
            console.log("Res Status" + res.status);
            console.log("Test Res Json " + res);

            // let resJson = await res.json();
            
            //let resJson = await JSON.stringify(res);
            
            isVerified = await res.text();
            
            //isVerified = await res.text().then(f=>f)
            console.dir(res);
            //console.log("set value isVerified" + isVerified);

            if (res.status === 200) {
                setLoginCode("");
                setMessage("Code entered successfully");
            } else {
                setMessage("Some error occured");
            }

            if(isVerified === 'true')
                navigate('/profile/' + params.id);
            else   
                setMessage("Code does not matched !!");

        } catch (err) {
            console.log(err);
        }

        console.log("Params " + params.id);
        
        // console.log("fecth Data " + fetch("http://localhost:8080/employee-login/")
        // .then((response) => response.json())
        // .then((data) => setData(data)) );

        console.log("verified " + isVerified);
        
        
    };


    return (
        <Container>
            {/* <TopMenuBar /> */}
            
            {/* <LeftSidebar /> */}

            <Container>
                <Row className="justify-content-md-center mt-4 mb-4" >
                    {/* <Col sm={1}>sm=8</Col> */}
                    <Col md={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}
                        >
                            <Form.Group className="mb-3 " controlId="loginCode">
                                <Form.Label > Enter Code :</Form.Label>
                                <Form.Control type="number" placeholder="Enter code" required
                                    value={loginCode}
                                    onChange={(event) => setLoginCode(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="userId">
                                <Form.Control type="hidden" value={params.id} readOnly
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Button className="justify-content-md-start " variant="primary" type="submit">
                                        submit
                                    </Button>
                                </Col>

                                <Col md={6}>
                                    <Button className="justify-content-md-end" variant="primary" type="submit">
                                        Resend Code?
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        
                        <div style={{color: "red"}}> {message} </div>
                    </Col>
                </Row>
            </Container>

            <Link to="/Login"> Login </Link>

            {/* <Link to={"./Login"}>
                Login
            </Link> */}
            {/* <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/forgot-password" element={<PasswordReset/>} />
                </Routes>
            </Router> */}
        </Container>
    );
}

export default LoginVerification;