import React, { useState } from "react";

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams, generatePath } from 'react-router-dom';
import { DatePicker } from "@mui/x-date-pickers";

function AddEmployee() {


    const [departmentId, setDepartmentId] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [description, setDescription] = useState('');
    const [responsibilty, setResponsibilty] = useState('');
    const [managerName, setManagerName] = useState('');
    const [totalEmployee, setTotalEmployee] = useState('');
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // let res = await fetch("http://localhost:8080/department-add-save", {
            //     method: "POST",
            //     body: JSON.stringify({
            //         departmentId: departmentId,
            //         departmentName: departmentName,
            //         description: description,
            //         responsibilty: responsibilty,
            //         managerName: managerName,
            //         totalEmployee: totalEmployee,

            //     }),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }).then(r => r);

            navigate("/Add Employee");

        } catch (err) {
            console.log(err);
        }

    };
    
    return (

        <Row className="justify-content-md-center m-4" >
            {/* <Col sm={1}>sm=8</Col> */}
            <Col md={10}>
                <form onSubmit={handleSubmit}
                    action="department-add-save"
                    method="POST"
                    className="card-body label"
                    style={{
                        backgroundColor: "#323234", color: "#fff",
                        paddingBottom: "30px", marginBottom: "30px"
                    }}
                >
                    <div className="row" >

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="NID" className="col-form-label col-lg-4">
                                <span className="float-left">NID</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name=""
                                    required="required">
                                </input>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="imageFile" className="col-form-label col-lg-4">
                                <span className="float-left">Upload Image</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="file" className="form-control" ></input>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="employeeId" className="col-form-label col-lg-4">
                                <span className="float-left">Employee ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""
                                    readOnly={true}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="fingerId" className="col-form-label col-lg-4">
                                <span className="float-left">Finger ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    required="required"
                                    id=""
                                    name=""></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="fullName" className="col-form-label col-lg-4">
                                <span className="float-left">Employee Name</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    required="required"
                                    id=""
                                    name=""></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="nickName" className="col-form-label col-lg-4">
                                <span className="float-left">Nick Name</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="jobId" className="col-form-label col-lg-4">
                                <span className="float-left">Job Title</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control" >
                                    <option value="0">Select One</option>
                                    <option ></option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="departmentId" className="col-form-label col-lg-4">
                                <span className="float-left">Department</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="0">Select One</option>
                                    <option> </option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="sectionId" className="col-form-label col-lg-4">
                                <span className="float-left">Section</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="0">Select One</option>
                                    <option> </option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="categoryId" className="col-form-label col-lg-4">
                                <span className="float-left">Category</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="0">Select One</option>
                                    <option> </option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="gender" className="col-form-label col-lg-4">
                                <span className="float-left">Gender</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="">Select One</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="religion" className="col-form-label col-lg-4">
                                <span className="float-left">Religion</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="">Select One</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Hinduism">Hinduism</option>
                                    <option value="Buddhist">Buddhist</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="mobileNo" className="col-form-label col-lg-4">
                                <span className="float-left">Mobile No</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="email" className="col-form-label col-lg-4">
                                <span className="float-left">Email</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="email" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="tin" className="col-form-label col-lg-4">
                                <span className="float-left">TIN</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="pfID" className="col-form-label col-lg-4">
                                <span className="float-left">PF ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler1" className="col-form-label col-lg-4">
                                <span className="float-left">Address Id</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""
                                    readOnly={true}></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="dobStr" className="col-form-label col-lg-4">
                                <span className="float-left">DOB</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-4">
                                {/* <DatePicker className="form-control"/> */}
                                <DatePicker className="form-control"/>
                            </div>
                            <div className="col-lg-3" >
                                <label htmlFor="age" className="col-form-label">
                                    <span className="float-left">Age</span>
                                    <span className="float-right">:</span>
                                </label>
                                <div className="input-group col-lg-3" >
                                    <input type="text" className="form-control" placeholder="100 y" readonly="readonly"></input>
                                </div>
                                <div className="input-group col-lg-3" >
                                    <input type="text" className="form-control" placeholder="12 m" readonly="readonly"></input>
                                </div>
                                <div className="input-group col-lg-3" >
                                    <input type="text" className="form-control" placeholder="31 d" readonly="readonly"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="pfJoinDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">PF Join Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                {/* <DatePicker className="form-control"/> */}
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="appliacationDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Application Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="interviewDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Interview Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="joinDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Join Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="confirmDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Confirm Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="finalSettleDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Final Settle Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="incrementDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Increment Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="retiermentDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Promotion Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="retiermentDate" className="col-form-label col-lg-4">
                                <span className="float-left">Retirement Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="status" className="col-form-label col-lg-4">
                                <span className="float-left">Status</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="">Select One</option>
                                    <option value="Active">Active</option>
                                    <option value="Terminated">Terminated</option>
                                    <option value="Suspended">Suspended</option>
                                    <option value="Resigned">Resigned</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="nationality" className="col-form-label col-lg-4">
                                <span className="float-left">Nationality</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""></input>
                            </div>

                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="emergencyContact" className="col-form-label col-lg-4">
                                <span className="float-left">Emerg. Contact</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="bloodGroup" className="col-form-label col-lg-4">
                                <span className="float-left">Blood Group</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="">Select One</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="maritalStatus" className="col-form-label col-lg-4">
                                <span className="float-left">Marital Status </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="">Select One</option>
                                    <option value="Married">Married</option>
                                    <option value="Unmarried">Unmarried</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="netSalary" className="col-form-label col-lg-4">
                                <span className="float-left">Basic Salary </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""></input>
                            </div>

                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="grade" className="col-form-label col-lg-4">
                                <span className="float-left">Grade </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control">
                                    <option value="0">Select One</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="leaveBalance" className="col-form-label col-lg-4">
                                <span className="float-left">Leave Balance</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler1" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-1</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler2" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-2</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler3" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-3</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler4" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-4</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler5" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-5</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group col-lg-12 text-center mt-lg-4" >
                            <a
                                href="#"
                                className="btn btn-danger btn-lg col-lg-2 mr-5 col-sm-5 col-xs-3"
                                role="button">
                                Cancel
                            </a>
                            <button
                                className="btn btn-success btn-lg col-lg-2 col-sm-5 col-xs-3"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Col>
        </Row>
    );

}

export default AddEmployee;