import React, { useEffect, useState } from 'react';

const DependentList = () => {
  const [employees, setEmployees] = useState([]);
  const [dependentList, setNominieeList] = useState([]);
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
        `http://localhost:8080/dependent-list?employeeId=${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setNominieeList(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="col-12  mx-auto" style={{ marginTop: '6px' }}>
      <h2 className="content-title">Employee's Dependent Info</h2>
      <form onSubmit={handleSubmit} method="POST" className="form">
        <div className="form-group row col-lg-12 mt-4">
          <label htmlFor="employeeId" className="col-form-label col-lg-4">
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
              <th scope="col">Dependent ID</th>
              <th scope="col">NID</th>
              <th scope="col">Name</th>
              <th scope="col">Nick Name</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Relationship</th>
              <th scope="col">Nominee Name</th>
              <th scope="col">Nominee NID</th>
              {/* <th scope="col">Status</th> */}
            </tr>

            {dependentList.map((dpn, index) => {
              return (
                <tr key={dpn.employeeId}>
                  <td> {index + 1} </td>
                  <td> {dpn.employeeId} </td>
                  <td> {dpn.dependentsId} </td>
                  <td> {dpn.NID} </td>
                  <td> {dpn.name} </td>
                  <td> {dpn.nickName} </td>
                  <td> {dpn.bloodGroup} </td>
                  <td> {dpn.relationship} </td>
                  <td> {dpn.nomineeName} </td>
                  <td> {dpn.nomineeNID} </td>
                  {/* <td> {dpn.status} </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DependentList;
