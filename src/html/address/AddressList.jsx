import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AddressList = () => {
  const [employees, setEmployees] = useState([]);
  const [addressList, setAddressList] = useState([]);
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
        `http://localhost:8080/address-list?employeeId=${employeeId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAddressList(data);
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
    <div className="col-12 mx-auto" style={{ marginTop: '6px' }}>
      <h2 className="content-title">Employee's Addresses</h2>
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
              <th scope="col">Address ID</th>
              <th scope="col">Type</th>
              <th scope="col">division</th>
              <th scope="col">district</th>
              <th scope="col">subDistrict</th>
              <th scope="col">city</th>
              <th scope="col">village</th>
              {/* <th scope="col">Status</th> */}
            </tr>

            {addressList &&
              addressList.map((address, index) => {
                return (
                  <tr key={address.addressId}>
                    <td> {index + 1} </td>
                    <td> {address.employeeId} </td>
                    <td> {address.addressId} </td>
                    <td> {address.addressType} </td>
                    <td> {address.division} </td>
                    <td> {address.district} </td>
                    <td> {address.subDistrict} </td>
                    <td> {address.city} </td>
                    <td> {address.village} </td>
                    {/* <td> {address.status} </td> */}
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
