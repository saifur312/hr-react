import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import './../../App.css';

function LoanList() {
  const [employees, setEmployees] = useState([]);
  const [employeeLoan, setEmployeeLoan] = useState([]);
  const [employeeId, setEmployeeId] = useState('');

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
    console.log('Employee Id ' + employeeId);
    try {
      const response = await fetch(
        `http://localhost:8080/loan-list?employeeId=${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmployeeLoan(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error save/fetch data',
        icon: 'error',
        confirmButtonText: 'Continue',
      });
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="col-12  mx-auto" style={{ marginTop: '6px' }}>
      <h2 className="content-title">Employee's Loans</h2>
      <form onSubmit={handleSubmit} method="POST" className="form">
        <div className="form-group row col-lg-12 mt-4">
          <label htmlFor="" className="col-form-label col-lg-4">
            <span className="float-left">Select Employee</span>
            <span className="float-right">:</span>
          </label>
          <div className="col-lg-5">
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

          <div className="col-lg-2">
            <button type="submit" className="btn btn-success btn-lg col-lg-12">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="form-group row col-lg-12 m-0 mt-4">
        <table width="100%" className="table table-hover table-borderless">
          <tbody>
            <tr className="table-header">
              <th scope="col">SL</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Loan ID</th>
              <th scope="col">Loan Amount</th>
              <th scope="col">Deduction Amount</th>
              <th scope="col">Transaction Date</th>
              <th scope="col">Loan End Date</th>
              <th scope="col">Deduction Type</th>
              {/* <th scope="col">Reamrks</th>
              <th scope="col">Status</th> */}
            </tr>

            {employeeLoan.map((empLoan, index) => {
              return (
                <tr key={empLoan.employeeId}>
                  <td> {index + 1} </td>
                  <td> {empLoan.employeeId} </td>
                  <td> {empLoan.loanId} </td>
                  <td> {empLoan.loanAmount} </td>
                  <td> {empLoan.deductionAmount} </td>
                  <td> {empLoan.transactionDate} </td>
                  <td> {empLoan.loanEndDate} </td>
                  <td> {empLoan.deductionAmount} </td>
                  {/* <td> {empLoan.remarks} </td>
                  <td> {empLoan.status} </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default LoanList;
