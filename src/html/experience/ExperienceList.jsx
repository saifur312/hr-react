import React, { useEffect, useState } from 'react';

const ExperienceList = () => {
  const [employees, setEmployees] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
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
        `http://localhost:8080/experience-list?employeeId=${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setExperienceList(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="col-12 card bg-light mx-auto" style={{ marginTop: '6px' }}>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="card-body label"
        style={{ backgroundColor: '#323234', color: '#fff' }}
      >
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
              Search{' '}
            </button>
          </div>
        </div>
      </form>
      <div className="form-group row col-lg-12 m-0 mt-4">
        <table width="100%" className="table table-hover table-borderless">
          <tbody className="text-center">
            <tr className="table-header">
              <th scope="col">SL</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Last Active Date</th>
              <th scope="col">Company Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Time</th>
              <th scope="col">responsibilities</th>
              {/* <th scope="col">Status</th> */}
            </tr>

            {experienceList.map((exp, index) => {
              return (
                <tr key={exp.employeeId}>
                  <td> {index + 1} </td>
                  <td> {exp.employeeId} </td>
                  <td> {exp.lastActiveDate} </td>
                  <td> {exp.companyName} </td>
                  <td> {exp.designation} </td>
                  <td> {exp.startDate} </td>
                  <td> {exp.endDate} </td>
                  <td> {exp.responsibilities} </td>
                  {/* <td> {exp.status} </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ExperienceList;
