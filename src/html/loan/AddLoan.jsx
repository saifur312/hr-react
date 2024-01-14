import React, { useState, useEffect } from 'react';

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { dateFormatter } from '../../utils/DateFromatter';

function AddLoan() {
  const [employees, setEmployees] = useState([]);

  const [employeeId, setEmployeeId] = useState('');
  const [loanId, setLoanId] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [deductionAmount, setDeductionAmount] = useState('');
  const [transactionDateStr, setTransactionDateStr] = useState('');
  const [loanEndDateStr, setLoanEndDateStr] = useState('');
  const [deductionType, setDeductionType] = useState('');
  const [remarks, setRemarks] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

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
      const response = await fetch('http://localhost:8080/loan-add-save', {
        method: 'POST',
        body: JSON.stringify({
          employeeId: employeeId,
          loanId: loanId,
          loanAmount: loanAmount,
          deductionAmount: deductionAmount,
          transactionDateStr: dateFormatter(transactionDateStr),
          loanEndDateStr: dateFormatter(loanEndDateStr),
          deductionType: deductionType,
          remarks: remarks,
          status: status,
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
        navigate('/Add Loan');
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Employee's Loan</h2>
      <Col md={10}>
        <Form
          onSubmit={handleSubmit}
          action=""
          method="POST"
          className="form"
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
              <label htmlFor="loanId" className="col-form-label col-lg-4">
                <span className="float-left">Loan ID </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="loanId"
                  name="loanId"
                  readOnly={true}
                  onChange={(event) => setLoanId(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="loanAmount" className="col-form-label col-lg-4">
                <span className="float-left">Loan Amount </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="loanAmount"
                  name="loanAmount"
                  onChange={(event) => setLoanAmount(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="deductionAmount"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Deduction Amount </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="deductionAmount"
                  name="deductionAmount"
                  onChange={(event) => setDeductionAmount(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="transactionDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Transaction Date </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  type="text"
                  className="form-control"
                  id="transactionDateStr"
                  name="transactionDateStr"
                  dateFormat="dd-MM-yyyy"
                  selected={transactionDateStr}
                  onChange={(event) => setTransactionDateStr(event)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="loanEndDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Loan End Date </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="loanEndDateStr"
                  name="loanEndDateStr"
                  dateFormat="dd-MM-yyyy"
                  selected={loanEndDateStr}
                  onChange={(event) => setLoanEndDateStr(event)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="deductionType"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Deduction Type </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="deductionType"
                  name="deductionType"
                  onChange={(event) => setDeductionType(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="remarks" className="col-form-label col-lg-4">
                <span className="float-left">remarks</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="remarks"
                  name="remarks"
                  onChange={(event) => setRemarks(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="status" className="col-form-label col-lg-4">
                <span className="float-left">Status </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  onChange={(event) => setStatus(event.target.value)}
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

        <div style={{ color: 'red' }}> {message} </div>
      </Col>
    </Row>
  );
}

export default AddLoan;
