import React, { useEffect, useState } from "react";
import './../../App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function AddEmployee() {

  return (
    <Container>
      <Row className="justify-content-md-center mt-4" >
        <Col md={12}>
          <form className="label" action="#" method="post">

            <input type="hidden" className="form-control"></input>

            <div className="form-group row col-lg-12">
              <label for="NID" className="col-form-label col-lg-2">
                <span className="float-left">NID</span>
                <span className="float-right">:</span>&nbsp;
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" required="required"></input>
              </div>
            </div>

            <div className="form-group row col-lg-12">
              <label for="imageFile" className="col-form-label col-lg-2">
                <span className="float-left">Upload Image</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="file" className="form-control" ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12">
              <label for="employeeId" className="col-form-label col-lg-2">
                <span className="float-left">Employee ID</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" readonly="readonly"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="fingerId" className="col-form-label col-lg-2">
                <span className="float-left">Finger ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" required="required"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="fullName" className="col-form-label col-lg-2">
                <span className="float-left">Employee Name</span>
                <span className="float-right">:</span>&nbsp;
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" required="required"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="nickName" className="col-form-label col-lg-2">
                <span className="float-left">Nick Name</span>
                <span className="float-right">:</span>&nbsp;
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="jobId" className="col-form-label col-lg-2">
                <span className="float-left">Job Title</span>
                <span className="float-right">:</span>&nbsp;
              </label>
              <div className="col-lg-7">
                <select className="form-control" >
                  <option value="0">Select One</option>
                  <option ></option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="departmentId" className="col-form-label col-lg-2">
                <span className="float-left">Department</span>
                <span className="float-right">:</span>
            </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="0">Select One</option>
                  <option> </option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="sectionId" className="col-form-label col-lg-2">
                <span className="float-left">Section</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="0">Select One</option>
                  <option> </option>
                </select>
              </div>
            </div>

            <div className="form-group row col-lg-12">
              <label for="categoryId" className="col-form-label col-lg-2">
                <span className="float-left">Category</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="0">Select One</option>
                  <option> </option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="gender" className="col-form-label col-lg-2">
                <span className="float-left">Gender</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="">Select One</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="religion" className="col-form-label col-lg-2">
                <span className="float-left">Religion</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="">Select One</option>
                  <option value="Islam">Islam</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="mobileNo" className="col-form-label col-lg-2">
                <span className="float-left">Mobile No</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="email" className="col-form-label col-lg-2">
                <span className="float-left">Email</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="email" className="form-control" ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="tin" className="col-form-label col-lg-2">
                <span className="float-left">TIN</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="pfID" className="col-form-label col-lg-2">
                <span className="float-left">PF ID</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="filler1" className="col-form-label col-lg-2">
                <span className="float-left">Address Id</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" readonly="readonly"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="dobStr" className="col-form-label col-lg-2">
                <span className="float-left">DOB</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-4">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
              <div className="col-lg-3" >
                <label for="age" className="col-form-label">
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
            <div className="form-group row col-lg-12">
              <label for="pfJoinDateStr" className="col-form-label col-lg-2">
                <span className="float-left">PF Join Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="appliacationDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Application Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="interviewDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Interview Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="joinDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Join Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="confirmDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Confirm Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="finalSettleDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Final Settle Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="incrementDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Increment Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="retiermentDateStr" className="col-form-label col-lg-2">
                <span className="float-left">Promotion Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="retiermentDate" className="col-form-label col-lg-2">
                <span className="float-left">Retirement Date</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control" placeholder="dd-mm-yyyy"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="status" className="col-form-label col-lg-2">
                <span className="float-left">Status</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="">Select One</option>
                  <option value="Active">Active</option>
                  <option value="Terminated">Terminated</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Resigned">Resigned</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="nationality" className="col-form-label col-lg-2">
                <span className="float-left">Nationality</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>

            </div>
            <div className="form-group row col-lg-12">
              <label for="emergencyContact" className="col-form-label col-lg-2">
                <span className="float-left">Emerg. Contact</span>
                <span className="float-right">:</span> 
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="bloodGroup" className="col-form-label col-lg-2">
                <span className="float-left">Blood Group</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
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
            <div className="form-group row col-lg-12">
              <label for="maritalStatus" className="col-form-label col-lg-2">
                <span className="float-left">Marital Status </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="">Select One</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="netSalary" className="col-form-label col-lg-2">
                <span className="float-left">Basic Salary </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>

            </div>
            <div className="form-group row col-lg-12">
              <label for="grade" className="col-form-label col-lg-2">
                <span className="float-left">Grade </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <select className="form-control">
                  <option value="0">Select One</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="leaveBalance" className="col-form-label col-lg-2">
                <span className="float-left">Leave Balance</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="filler1" className="col-form-label col-lg-2">
                <span className="float-left">Filler-1</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="filler2" className="col-form-label col-lg-2">
                <span className="float-left">Filler-2</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="filler3" className="col-form-label col-lg-2">
                <span className="float-left">Filler-3</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="filler4" className="col-form-label col-lg-2">
                <span className="float-left">Filler-4</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group row col-lg-12">
              <label for="filler5" className="col-form-label col-lg-2">
                <span className="float-left">Filler-5</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="form-group col-lg-12 text-center mt-lg-4">
              <a href="#" className="btn btn-danger btn-lg col-lg-2 mr-lg-5" role="button">Cancel</a>
              <button type="submit" className="btn btn-success btn-lg col-lg-2">Save </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );

}
export default AddEmployee;