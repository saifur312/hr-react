import React, { useEffect, useState } from 'react';

import './../../App.css';

function AllowanceList() {
  const [employees, setEmployees] = useState([]);
  const [employeeAllowance, setEmployeeAllowance] = useState([]);
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
        `http://localhost:8080/allowance-list?employeeId=${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmployeeAllowance(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="col-12  mx-auto" style={{ marginTop: '6px' }}>
      <h2 className="content-title">Employee's Allowances</h2>
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
              Search{' '}
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
              <th scope="col">Allowance ID</th>
              <th scope="col">Basic</th>
              <th scope="col">House Rent</th>
              <th scope="col">MA</th>
              <th scope="col">CA</th>
              <th scope="col">AA</th>
              <th scope="col">DA</th>
              <th scope="col">NPA</th>
              <th scope="col">Con. A</th>
              <th scope="col">TA</th>
              <th scope="col">OA</th>
            </tr>

            {employeeAllowance.map((empAl, index) => {
              return (
                <tr key={empAl.employeeId}>
                  <td> {index + 1} </td>
                  <td> {empAl.employeeId} </td>
                  <td> {empAl.allowanceId} </td>
                  <td> {empAl.basic} </td>
                  <td> {empAl.houseRent} </td>
                  <td> {empAl.medicalAllowance} </td>
                  <td> {empAl.clinicalAllowance} </td>
                  <td> {empAl.attendanceAllowance} </td>
                  <td> {empAl.dearnessAllowance} </td>
                  <td> {empAl.nonPracticeAllowance} </td>
                  <td> {empAl.conveyAllowance} </td>
                  <td> {empAl.transportAllowance} </td>
                  <td> {empAl.otherAllowance} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AllowanceList;
