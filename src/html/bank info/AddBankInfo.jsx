import React, { useState } from 'react';

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function AddBankInfo() {
  const [employeeId, setEmployeeId] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/bankInfo-add-save', {
        method: 'POST',
        body: JSON.stringify({
          employeeId: employeeId,
          accountNo: accountNo,
          bankName: bankName,
          branchName: branchName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Handle the data (EmployeeDto) as needed
        console.log(data);
        setMessage('Data saved successfull');
        // Navigate to the Employee Details route with the data as state
        navigate('/Add Bank Info');
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Employee's Bank Info</h2>
      <Col md={10}>
        <Form
          onSubmit={handleSubmit}
          action=""
          method="POST"
          className="form"
          style={{ backgroundColor: '#323234', color: '#fff' }}
        >
          <div className="row">
            {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="employeeId" className="col-form-label col-lg-4">
                                <span className="float-left">Employee ID </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control" >
                                    <option> </option>
                                </select>
                            </div>
                        </div> */}

            <div className="form-group row col-lg-12 mt-4">
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
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="accountNo" className="col-form-label col-lg-4">
                <span className="float-left">Bank Account No </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="accountNo"
                  name="accountNo"
                  required="required"
                  onChange={(event) => setAccountNo(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="bankName" className="col-form-label col-lg-4">
                <span className="float-left">Bank Name </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bankName"
                  required="required"
                  onChange={(event) => setBankName(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="branchName" className="col-form-label col-lg-4">
                <span className="float-left">Branch Name </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branchName"
                  onChange={(event) => setBranchName(event.target.value)}
                />
              </div>
            </div>

            {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler1" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-1 </span>
                                <span  className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="" 
                                    onChange={(event) => set(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler2" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-2 </span>
                                <span  className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="" 
                                    onChange={(event) => set(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler3" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-3 </span>
                                <span  className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="" 
                                    onChange={(event) => set(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler4" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-4 </span>
                                <span  className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="" 
                                    onChange={(event) => set(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler5" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-5 </span>
                                <span  className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="" 
                                    onChange={(event) => set(event.target.value)}
                                />
                            </div>
                        </div> */}
          </div>
          <Row>
            <Col md={4}>
              <Button className="justify-content-md-start m-4" type="submit">
                Submit
              </Button>
            </Col>

            <Col md={4}>
              <button className="btn btn-success m-4" type="submit">
                Save
              </button>
            </Col>

            <Col md={4}>
              <button className="justify-content-md-end btn btn-danger m-4">
                Cancel
              </button>
            </Col>
          </Row>
        </Form>

        <div style={{ color: 'red' }}> {message} </div>
      </Col>
    </Row>
  );
}

export default AddBankInfo;
