import React, { useEffect, useState } from 'react';

const AddressList = () => {
  const [employees, setEmployees] = useState([]);
  const [nominieeList, setNominieeList] = useState([]);
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
        `http://localhost:8080/nominee-list?employeeId=${employeeId}`
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
              <th scope="col">Address ID</th>
              <th scope="col">Type</th>
              <th scope="col">Last Name</th>
              <th scope="col">Relation</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
              {/* <th scope="col">Status</th> */}
            </tr>

            {nominieeList &&
              nominieeList.map((exp, index) => {
                return (
                  <tr key={exp.nomineeIdentity.employeeId}>
                    <td> {index + 1} </td>
                    <td> {exp.nomineeIdentity.employeeId} </td>
                    <td> {exp.nomineeIdentity.nomineeId} </td>
                    <td> {exp.firstName} </td>
                    <td> {exp.relation} </td>
                    <td> {exp.contact} </td>
                    <td> {exp.email} </td>
                    <td> {exp.dob} </td>
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
export default AddressList;
