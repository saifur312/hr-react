import React, { useState } from "react";

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams, generatePath } from 'react-router-dom';

function AddDepartment() {


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
            let res = await fetch("http://localhost:8080/department-add-save", {
                method: "POST",
                body: JSON.stringify({
                    departmentId: departmentId,
                    departmentName: departmentName,
                    description: description,
                    responsibilty: responsibilty,
                    managerName: managerName,
                    totalEmployee: totalEmployee,

                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r);

            navigate("/Add Department");

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
                            <label htmlFor="departmentId" className="col-form-label col-lg-4">
                                <span className="float-left">Department Id</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="departmentId"
                                    name="departmentId"
                                    readOnly={true}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="departmentName" className="col-form-label col-lg-4">
                                <span className="float-left">Department Name</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id="departmentName"
                                    name="departmentName"
                                    className="form-control"
                                    value={departmentName}
                                    onChange={(event) => setDepartmentName(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="description" className="col-form-label col-lg-4">
                                <span className="float-left">Description</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    className="form-control"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}>
                                </input>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="responsibilty" className="col-form-label col-lg-4">
                                <span className="float-left">Responsibility</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id="responsibilty"
                                    name="responsibilty"
                                    className="form-control"
                                    value={responsibilty}
                                    onChange={(event) => setResponsibilty(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="managerName" className="col-form-label col-lg-4">
                                <span className="float-left">Manager Name</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id="managerName"
                                    name="managerName"
                                    className="form-control"
                                    value={managerName}
                                    onChange={(event) => setManagerName(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="totalEmployee" className="col-form-label col-lg-4">
                                <span className="float-left">No of Employee</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="totalEmployee"
                                    name="totalEmployee"
                                    value={totalEmployee}
                                    onChange={(event) => setTotalEmployee(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="addressId" className="col-form-label col-lg-4">
                                <span className="float-left">Address Id</span>
                                <span className="float-right">:</span>
                            </label>
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
                            <label htmlFor="startDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Department Start Date</span>
                                <span className="float-right">:</span>
                            </label>
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
                            <label htmlFor="endDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Department End Date</span>
                                <span className="float-right">:</span>
                            </label>
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
                            <label htmlFor="serail" className="col-form-label col-lg-4">
                                <span className="float-left">Department Serial</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id=""
                                    name=""
                                    className="form-control">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="status" className="col-form-label col-lg-4">
                                <span className="float-left">Status</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <select className="form-control chosen-select" required="required">
                                    <option >Active</option>
                                    <option >Inactive</option>
                                </select>
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

export default AddDepartment;