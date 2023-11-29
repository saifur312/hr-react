import React, { useEffect, useState } from "react";

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function AddDummy() {
    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    
    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/", {
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    name: name
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const data = await response.json();
                // Handle the data (EmployeeDto) as needed
                console.log(data);
                setMessage("Data saved successfull");
                // Navigate to the Employee Details route with the data as state
                navigate('/Add Dummy');
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }

        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    return (

        <Row className="justify-content-md-center m-4" >
            <Col md={10}>
                <Form onSubmit={handleSubmit}
                    action=""
                    method="POST"
                    style={{ backgroundColor: "#323234", color: "#fff" }}
                >
                    <Form.Group as={Row} className="p-4" controlId="id">
                        <Form.Label column sm={4}> User Id :</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                placeholder="Enter id"
                                value={id}
                                onChange={(event) => setId(event.target.value)}
                            />
                        </Col>
                    </Form.Group>


                    <div className="form-group row col-lg-12 mt-4">
                        <label htmlFor="name" className="col-form-label col-lg-4">
                            <span className="float-left"> Name</span>
                            <span className="float-right">:</span>&nbsp;
                        </label>
                        <div className="col-lg-6">
                            <input type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}>
                            </input>
                        </div>
                    </div>

                    <Row>
                        <Col md={4}>
                            <Button className="justify-content-md-start m-4"  type="submit">
                                Submit
                            </Button>
                        </Col>

                        <Col md={4}>
                            <button
                                className="btn btn-success m-4"
                                type="submit">
                                Save
                            </button>
                        </Col>

                        <Col md={4}>
                            <button
                                className="justify-content-md-end btn btn-danger m-4">
                                Cancel
                            </button>
                        </Col>
                    </Row>
                </Form>

                <div style={{ color: "red" }}> {message} </div>
            </Col>
        </Row>
    );

}

export default AddDummy;