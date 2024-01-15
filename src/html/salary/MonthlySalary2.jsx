import React, { useEffect, useState } from 'react';
import {
  companySums,
  filterByMonth,
  monthlySalaryData,
  salaryData,
} from './MonthlySalaryData2';

const MonthlySalary2 = () => {
  //console.log('salary data ' + JSON.stringify(monthlySalaryData));
  const [sectionDetails, setSectionDetails] = useState(null);
  const [month, setMonth] = useState(0);

  // Example: Filter for month 1
  // filterByMonth(1);
  // console.log(filteredDataMonth1[0].sections);

  // useEffect(() => {
  //   filterByMonth(month);
  //   console.log(salaryData);
  //   console.log(monthlySalaryData);
  // }, [month]);

  // useEffect(() => {
  //   filterByMonth(1);
  //   console.log(salaryData);
  //   console.log(monthlySalaryData);
  // }, []);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div>
      <h2 className="content-title">Monthly Salary </h2>
      <form
        className="justify-content-md-center row col-lg-12"
        style={{ color: '#fff' }}
      >
        <div className="form-group row col-lg-6 mt-4">
          <label htmlFor="month" className="col-form-label col-lg-4">
            <b>Select Month</b>
          </label>
          <div className="col-lg-6">
            <select
              id="month"
              name="month"
              className="form-control"
              onChange={(event) => {
                setMonth(event.target.value);
                filterByMonth(event.target.value);
              }}
              value={month}
            >
              <option value="0">Select One</option>
              {months.map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <h3 style={{ color: 'green' }}>Whole Company section wise</h3>
      {monthlySalaryData && (
        <table width="100%" className="table table-hover table-borderless">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Section</th>
              <th>Basic</th>
              <th>Allowance</th>
              <th>Overtime</th>
              <th>Total Salary</th>
              <th>Deduction</th>
              <th>Net Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {monthlySalaryData.map((section, index) => {
              return (
                <tr key={section.id}>
                  <td> {index + 1}</td>
                  <td> {section.sectionName}</td>
                  <td> {section.basic} </td>
                  <td> {section.allowance} </td>
                  <td> {section.ot} </td>
                  <td> {section.totalSalary} </td>
                  <td> {section.deduction} </td>
                  <td> {section.netSalary} </td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => setSectionDetails(section)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}> Total</th>
              {/* <th> {companySums.sectionName}</th> */}
              <th> {companySums.basic} </th>
              <th> {companySums.allowance} </th>
              <th> {companySums.ot} </th>
              <th> {companySums.totalSalary} </th>
              <th> {companySums.deduction} </th>
              <th> {companySums.netSalary} </th>
            </tr>
          </tfoot>
        </table>
      )}

      {sectionDetails && (
        <div>
          <h4 style={{ color: 'green' }}>
            Section: {sectionDetails.sectionName}{' '}
          </h4>
          <table width="100%" className="table table-hover table-borderless">
            <thead>
              <tr>
                <th> Sl</th>
                <th> Name</th>
                <th> Basic</th>
                <th> Allowance</th>
                <th> Overtime</th>
                <th> Total</th>
                <th> Deduction</th>
                <th> NetSalary</th>
              </tr>
            </thead>
            <tbody>
              {sectionDetails.employees.map((employee, index) => {
                return (
                  <tr key={employee.id}>
                    <td> {index + 1}</td>
                    <td> {employee.name}</td>
                    <td> {employee.basic} </td>
                    <td> {employee.allowance} </td>
                    <td> {employee.ot} </td>
                    <td> {employee.total()} </td>
                    <td> {employee.deduction} </td>
                    <td> {employee.netSalary()} </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}> Total</th>
                <th> {sectionDetails.basic} </th>
                <th> {sectionDetails.allowance} </th>
                <th> {sectionDetails.ot} </th>
                <th> {sectionDetails.totalSalary} </th>
                <th> {sectionDetails.deduction} </th>
                <th> {sectionDetails.netSalary} </th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};
export default MonthlySalary2;
