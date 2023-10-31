import React, { useState } from "react";

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams, generatePath } from 'react-router-dom';

function AddDepartment() {

    return (

        <Row className="justify-content-md-center m-4" >
            {/* <Col sm={1}>sm=8</Col> */}
            <Col md={10}>
                <form className="card-body label" action="#" method="post"
                    style={{ backgroundColor: "#323234", color: "#fff", paddingBottom: "30px", marginBottom: "30px"}}
                >
                    <div className="row" >

                        <div className="form-group row col-lg-12 mt-4">
                            <label for="departmentId" className="col-form-label col-lg-4"><span className="float-left">Department Id</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control"  readonly="readonly"></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="departmentName" className="col-form-label col-lg-4"><span className="float-left">Department Name</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control"  ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="description" className="col-form-label col-lg-4"><span className="float-left">Description</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control"  ></input>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label for="responsibilty" className="col-form-label col-lg-4"><span className="float-left">Responsibility</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control"  ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="managerName" className="col-form-label col-lg-4"><span className="float-left">Manager Name</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control"  ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="totalEmployee" className="col-form-label col-lg-4"><span className="float-left">No of Employee</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="addressId" className="col-form-label col-lg-4"><span className="float-left">Address Id</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="startDateStr" className="col-form-label col-lg-4"><span className="float-left">Department Start Date</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="endDateStr" className="col-form-label col-lg-4"><span className="float-left">Department End Date</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="serail" className="col-form-label col-lg-4"><span className="float-left">Department Serial</span><span className="float-right">:</span></label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control"  ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="status" className="col-form-label col-lg-4"><span className="float-left">Status</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <select className="form-control chosen-select"  required="required">
                                    <option >Active</option>
                                    <option >Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="filler1" className="col-form-label col-lg-4"><span className="float-left">Filler-1</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="filler2" className="col-form-label col-lg-4"><span className="float-left">Filler-2</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="filler3" className="col-form-label col-lg-4"><span className="float-left">Filler-3</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="filler4" className="col-form-label col-lg-4"><span className="float-left">Filler-4</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label for="filler5" className="col-form-label col-lg-4"><span className="float-left">Filler-5</span><span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" ></input>
                            </div>
                        </div>
                        <div className="form-group col-lg-12 text-center mt-lg-4" >
                            <a href="#" className="btn btn-danger btn-lg col-lg-2 mr-5 col-sm-5 col-xs-3" role="button">Cancel</a>
                            <button className="btn btn-success btn-lg col-lg-2 col-sm-5 col-xs-3" type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </Col>
        </Row>
    );

}

export default AddDepartment;