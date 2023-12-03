import React, { useState, useEffect } from "react";

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// var Typeahead = require('react-bootstrap-typeahead').Typeahead; 

// Import as a module in your JS
import 'react-bootstrap-typeahead/css/Typeahead.css';

function AddAllowance() {
    const [singleSelections, setSingleSelections] = useState([]);
    //const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const [employees, setEmployees] = useState([]);

    const [employeeId, setEmployeeId] = useState('');
    const [allowanceId, setAllowanceId] = useState('');
    const [basic, setBasic] = useState('');
    const [houseRent, setHouseRent] = useState('');
    const [medicalAllowance, setMedicalAllowance] = useState('');
    const [clinicalAllowance, setClinicalAllowance] = useState('');
    const [attendanceAllowance, setAttendanceAllowance] = useState('');
    const [dearnessAllowance, setDearnessAllowance] = useState('');
    const [nonPracticeAllowance, setNonPracticeAllowance] = useState('');
    const [conveyAllowance, setConveyAllowance] = useState('');
    const [transportAllowance, setTransportAllowance] = useState('');
    const [otherAllowance, setOtherAllowanc] = useState('');
    const [message, setMessage] = useState("");


    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch(`http://localhost:8080/employee-list`);
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchEmployees();
    }, [setEmployees]);

    const handleSelectionChange = (selectedOptions) => {
        if (selectedOptions.length > 0) {
            // Assuming 'employeeId' is the property you want to submit
            //setSelectedEmployeeId(selectedOptions[0].employeeId);
            setEmployeeId(selectedOptions[0].employeeId);
            setSingleSelections(selectedOptions);
        } else {
            //setSelectedEmployeeId(null);
            setEmployeeId(null);
            setSingleSelections([]);
        }
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/allowance-add-save", {
                method: "POST",
                body: JSON.stringify({
                    employeeId: employeeId,
                    //employeeId: selectedEmployeeId,
                    allowanceId: allowanceId,
                    basic: basic,
                    houseRent: houseRent,
                    medicalAllowance: medicalAllowance,
                    clinicalAllowance: clinicalAllowance,
                    attendanceAllowance: attendanceAllowance,
                    dearnessAllowance: dearnessAllowance,
                    nonPracticeAllowance: nonPracticeAllowance,
                    conveyAllowance: conveyAllowance,
                    transportAllowance: transportAllowance,
                    otherAllowance: otherAllowance
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
                navigate('/Add Allowance');
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
                    className="card-body label"
                    style={{ backgroundColor: "#323234", color: "#fff" }}
                >
                    <div className="row" >
                        {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="employeeId" className="col-form-label col-lg-4">
                                <span className="float-left">Employee ID </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="employeeId"
                                    name="employeeId"
                                    onChange={(event) => setEmployeeId(event.target.value)}
                                >
                                    <option value="0">Select One</option>
                                    {employees.map((emp) => (
                                        <option key={emp.employeeId} value={emp.employeeId}>
                                            {emp.fullName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div> */}

                        <Form.Group className="row" >
                            <Form.Label className="col-form-label col-lg-4">Employee ID:  </Form.Label>
                            <Typeahead className="col-lg-6"
                                id="basic-typeahead-single"
                                labelKey="fullName"
                                onChange={handleSelectionChange}
                                options={employees}
                                placeholder="Choose a state..."
                                selected={singleSelections}
                            />
                        </Form.Group>

                        {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="employeeId" className="col-form-label col-lg-4">
                                <span className="float-left">Employee ID </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="employeeId"
                                    name="employeeId"
                                    required="required"
                                    onChange={(event) => setEmployeeId(event.target.value)}
                                />
                            </div>
                        </div> */}

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="allowanceId" className="col-form-label col-lg-4">
                                <span className="float-left">Allowance ID </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="allowanceId"
                                    name="allowanceId"
                                    readOnly={true}
                                    onChange={(event) => setAllowanceId(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="basic" className="col-form-label col-lg-4">
                                <span className="float-left">Basic </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="basic"
                                    name="basic"
                                    required={true}
                                    onChange={(event) => setBasic(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="houseRent" className="col-form-label col-lg-4">
                                <span className="float-left">House Rent </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="houseRent"
                                    name="houseRent"
                                    onChange={(event) => setHouseRent(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="medicalAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Medical Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="medicalAllowance"
                                    name="medicalAllowance"
                                    onChange={(event) => setMedicalAllowance(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="clinicalAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Clinical Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="clinicalAllowance"
                                    name="clinicalAllowance"
                                    onChange={(event) => setClinicalAllowance(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="attendanceAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Attendance Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="attendanceAllowance"
                                    name="attendanceAllowance"
                                    onChange={(event) => setAttendanceAllowance(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="dearnessAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Dearness Allowance</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dearnessAllowance"
                                    name="dearnessAllowance"
                                    onChange={(event) => setDearnessAllowance(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="nonPracticeAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Non Practice Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nonPracticeAllowance"
                                    name="nonPracticeAllowance"
                                    onChange={(event) => setNonPracticeAllowance(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="conveyAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Convey Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="conveyAllowance"
                                    name="conveyAllowance"
                                    onChange={(event) => setConveyAllowance(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="transportAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Transport Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="transportAllowance"
                                    name="transportAllowance"
                                    onChange={(event) => setTransportAllowance(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="otherAllowance" className="col-form-label col-lg-4">
                                <span className="float-left">Other Allowance </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="otherAllowance"
                                    name="otherAllowance"
                                    onChange={(event) => setOtherAllowanc(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col md={4}>
                            <Button className="justify-content-md-start m-4" type="submit">
                                Submit
                            </Button>
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
        </Row >
    );

}

export default AddAllowance;