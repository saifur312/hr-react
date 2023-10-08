
import React, { useEffect, useState } from "react";

import './../../App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UpdateEmployee() {

    return (

        <div class="col-12 card bg-light mx-auto">
            <form class="label" action="#" method="post">

                    {/* <input type="hidden" class="form-control" id=""  >  */}

                    <div class="form-group row col-lg-12">
                        <label for="location1" class="col-form-label col-lg-3"><span class="float-left">NID</span><span class="float-right">:</span>&nbsp; </label>
                        <div class="col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                        <div class="col-lg-2"><a href="#" class="btn btn-primary col-lg-12" role="button">Search</a> </div>
                    </div>

                    <div class="form-group row col-lg-12">
                        <label for="location1" class="col-form-label col-lg-3"><span class="float-left">Employee ID</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location1" class="col-form-label col-lg-3"><span class="float-left">Finger ID</span><span class="float-right">:</span></label>
                        <div class="col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location24" class="col-form-label col-lg-3"><span class="float-left">Employee Name</span><span class="float-right">:</span>&nbsp; </label>
                        <div class="col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location24" class="col-form-label col-lg-3"><span class="float-left">Job Id</span><span class="float-right">:</span>&nbsp; </label>
                        <div class="col-lg-7">
                            <select class="form-control" id="" >
                                <option value="0">Select One</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location2" class="col-form-label col-lg-3"><span class="float-left">Nick Name</span><span class="float-right">:</span>&nbsp; </label>
                        <div class="col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location1" class="col-form-label col-lg-3">
                            <span class="float-left">Department</span><span class="float-right">:</span>
                        </label>
                        <div class="col-lg-7">
                            <select class="form-control" id="" >
                                <option value="0">Select One</option>
                                <option ></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location1" class="col-form-label col-lg-3"><span class="float-left">Section</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="col-lg-7">
                            <select class="form-control" id="" >
                                <option value="0">Select One</option>
                                <option></option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row col-lg-12">
                        <label for="location1" class="col-form-label col-lg-3"><span class="float-left">Category</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="col-lg-7">
                            <select class="form-control" id="" >
                                <option value="0">Select One</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="pricefrom" class="col-form-label col-lg-3"><span class="float-left">Gender</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                            <select class="form-control" >
                                <option value="">Select One</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="priceto" class="col-form-label col-lg-3"><span class="float-left">Religion</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                            <select class="form-control" id="" >
                                <option value="">Select One</option>
                                <option value="Islam">Islam</option>
                                <option value="Hinduism">Hinduism</option>
                                <option value="Buddhist">Buddhist</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location4" class="col-form-label col-lg-3"><span class="float-left">Mobile No</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location3" class="col-form-label col-lg-3"><span class="float-left">Email</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                            <input type="email" class="form-control" id=""  ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location7" class="col-form-label col-lg-3"><span class="float-left">TIN</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location8" class="col-form-label col-lg-3"><span class="float-left">PF ID</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location12" class="col-form-label col-lg-3"><span class="float-left">PF Join Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location13" class="col-form-label col-lg-3"><span class="float-left">DOB</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location10" class="col-form-label col-lg-3"><span class="float-left">Application Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location6" class="col-form-label col-lg-3"><span class="float-left">Interview Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location9" class="col-form-label col-lg-3"><span class="float-left">Join Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location14" class="col-form-label col-lg-3"><span class="float-left">Confirm Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location15" class="col-form-label col-lg-3"><span class="float-left">Final Settle Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location23" class="col-form-label col-lg-3"><span class="float-left">Increment Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>

                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location17" class="col-form-label col-lg-3"><span class="float-left">Promotion Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>

                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location18" class="col-form-label col-lg-3"><span class="float-left">Status</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                            <select class="form-control" id="" >
                                <option value="">Select One</option>
                                <option value="Active">Active</option>
                                <option value="Terminated">Terminated</option>
                                <option value="Suspended">Suspended</option>
                                <option value="Resigned">Resigned</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location19" class="col-form-label col-lg-3"><span class="float-left">Retierment Date</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>

                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location21" class="col-form-label col-lg-3"><span class="float-left">Nationality</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>

                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location22" class="col-form-label col-lg-3"><span class="float-left">Emergency Contact</span><span class="float-right">:</span>&nbsp;</label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Blood Group</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                            <select class="form-control" id="" >
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
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Marital Status </span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                            <select class="form-control" id="" >
                                <option value="">Select One</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Net Salary </span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>

                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Grade </span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                            <select class="form-control" id="" >
                                <option value="0">Select One</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Leave Balance</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Filler-1</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Filler-2</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Filler-3</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Filler-4</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group row col-lg-12">
                        <label for="location5" class="col-form-label col-lg-3"><span class="float-left">Filler-5</span><span class="float-right">:</span></label>
                        <div class="input-group col-lg-7">
                             <input type="text" class="form-control" id="" ></input>
                        </div>
                    </div>
                    <div class="form-group col-lg-12 text-center mt-lg-4">
                        <a href="#" class="btn btn-danger btn-lg col-lg-2 mr-lg-5" role="button">Cancel</a>
                        {/* <a href="#" class="btn btn-success btn-lg col-lg-2" role="button">Save</a> */}
                        <button type="submit" class="btn btn-success btn-lg col-lg-2">Save </button>
                    </div>
            </form>
        </div>

    );
}

export default UpdateEmployee;