import React, { useEffect, useState } from 'react';

import './../../App.css';

function DepartmentList() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const departmentList = async () => {
      //const response = await fetch("http://localhost:8080/dept-list");
      fetch('http://localhost:8080/dept-list')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return new Promise([]);
          }
        })
        .then((data) => setDepartment(data))
        .catch((err) => {
          console.log(err);
        });

      // console.log("Content Type " + response.headers);

      // const data = await response.json();
      // setDepartment(data);
      // //setMenu(await response.json());
      // console.log("Fetched " + data);
    };
    departmentList();
  }, [setDepartment]);

  return (
    <div
      className="col-12 mx-auto"
      style={{ padding: '3% 8%', marginTop: '6px' }}
    >
      <h2 className="content-title">Department List</h2>
      <div className="form-group row col-lg-12">
        <table width="100%" className="table table-hover table-borderless">
          <tbody>
            <tr className="table-header">
              <th scope="col">SL</th>
              <th scope="col">Name</th>
              <th scope="col">Desc.</th>
              <th scope="col">Responsibility</th>
              <th scope="col">Manager</th>
              <th scope="col">Total Employee</th>
            </tr>

            {department.map((department, index) => {
              return (
                <tr key={department.departmentId}>
                  <td> {index + 1} </td>
                  <td> {department.departmentName} </td>
                  <td> {department.description} </td>
                  <td> {department.responsibilty} </td>
                  <td> {department.managerName} </td>
                  <td> {department.totalEmployee} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DepartmentList;
