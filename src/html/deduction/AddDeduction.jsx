import React, { useState, useEffect } from 'react';

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function AddDeduction() {
  const [employees, setEmployees] = useState([]);

  const [employeeId, setEmployeeId] = useState('');
  const [deductionId, setDeductionId] = useState('');
  const [roomCharge, setRoomCharge] = useState('');
  const [incomeTax, setIncomeTax] = useState('');
  const [providentFund, setProvidentFund] = useState('');
  const [walefareFund, setWalefareFund] = useState('');
  const [meal, setMeal] = useState('');
  const [otherDeductions, setOtherDeductions] = useState('');
  //const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  //const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employee-list`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEmployees();
  }, [setEmployees]);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/deduction-add-save', {
        method: 'POST',
        body: JSON.stringify({
          employeeId: employeeId,
          deductionId: deductionId,
          roomCharge: roomCharge,
          incomeTax: incomeTax,
          providentFund: providentFund,
          walefareFund: walefareFund,
          meal: meal,
          otherDeductions: otherDeductions,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Deduction  added successfully!');

        // Set a loading state to indicate the redirection is in progress
        //setLoading(true);

        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          console.log('Redirecting to the same URL...');
          navigate('', { replace: true });
          // Reset the loading state after navigation
          //setLoading(false);
          // Reset form fields
          setEmployeeId('');
          setDeductionId('');
          setRoomCharge('');
          setIncomeTax('');
          setProvidentFund('');
          setWalefareFund('');
          setOtherDeductions('');
        }, 100);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      <Col md={10}>
        <Form
          onSubmit={handleSubmit}
          action=""
          method="POST"
          className="card-body label"
          style={{ backgroundColor: '#323234', color: '#fff' }}
        >
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
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
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="deductionId" className="col-form-label col-lg-4">
                <span className="float-left">Deduction ID </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="deductionId"
                  name="deductionId"
                  readOnly={true}
                  onChange={(event) => setDeductionId(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="roomCharge" className="col-form-label col-lg-4">
                <span className="float-left">Room Charge </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="roomCharge"
                  name="roomCharge"
                  onChange={(event) => setRoomCharge(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="incomeTax" className="col-form-label col-lg-4">
                <span className="float-left">Income Tax</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="incomeTax"
                  name="incomeTax"
                  onChange={(event) => setIncomeTax(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="providentFund"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Provident Fund </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="providentFund"
                  name="providentFund"
                  onChange={(event) => setProvidentFund(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="walefareFund" className="col-form-label col-lg-4">
                <span className="float-left">walefare Fund </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="walefareFund"
                  name="walefareFund"
                  onChange={(event) => setWalefareFund(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="meal" className="col-form-label col-lg-4">
                <span className="float-left">Meal </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="meal"
                  name="meal"
                  onChange={(event) => setMeal(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="otherDeductions"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Other Deductions</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="otherDeductions"
                  name="otherDeductions"
                  onChange={(event) => setOtherDeductions(event.target.value)}
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
              <button className="justify-content-md-end btn btn-danger m-4">
                Cancel
              </button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default AddDeduction;
