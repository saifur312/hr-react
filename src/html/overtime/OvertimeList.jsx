import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import './../../App.css';

//import { timeFormatter } from "../../utils/DateFromatter";

function OvertimeList() {
  const [employees, setEmployees] = useState([]);
  const [overtimeList, setOvertimeList] = useState([]);
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
        `http://localhost:8080/overtime-list?employeeId=${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setOvertimeList(data);
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
      <h2 className="content-title">Employee's Overtimes</h2>
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
              <th scope="col">OT ID</th>
              <th scope="col">OT Type</th>
              <th scope="col">OT Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Total Hours</th>
              {/* <th scope="col">Status</th> */}
            </tr>

            {overtimeList.map((overtime, index) => {
              return (
                <tr key={overtime.overtimeId}>
                  <td> {index + 1} </td>
                  <td> {overtime.overtimeId} </td>
                  <td> {overtime.overtimeType} </td>
                  <td> {overtime.overtimeDate} </td>
                  <td> {overtime.startTime} </td>
                  <td> {overtime.endTime} </td>
                  <td> {overtime.totalHours} </td>
                  {/* <td> {overtime.status} </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OvertimeList;
