import React, { useState } from 'react';
import {
  companySums,
  monthlySalaryData,
  totalNetSalary,
} from './monthlySalaryData';

const MonthlySalary = () => {
  console.log('salary data ' + JSON.stringify(monthlySalaryData));
  const [sectionDetails, setSectionDetails] = useState(null);

  /* // Calculate sums for each property
  const calculateSums = (section) => {
    const propertyKeys = ['basic', 'allowance', 'ot', 'deduction'];
    const sum = propertyKeys.reduce((acc, key) => {
      acc[key] = section.employees.reduce(
        (employeeSum, employee) => employeeSum + (employee[key] || 0),
        0
      );
      return acc;
    }, {});
    return sum;
  };

  // Update the monthlySalaryData with the calculated sums
  monthlySalaryData.forEach((section) => {
    const sums = calculateSums(section);
    // Assuming the section properties are the same as the properties to be updated
    Object.assign(section, sums);
  }); */

  return (
    <div>
      <h2 className="content-title">Monthly Salary </h2>
      <h3 style={{ color: 'green' }}>Whole Company section wise</h3>
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
            <th> Total</th>
            <th> {companySums.sectionName}</th>
            <th> {companySums.basic} </th>
            <th> {companySums.allowance} </th>
            <th> {companySums.ot} </th>
            <th> {companySums.totalSalary} </th>
            <th> {companySums.deduction} </th>
            <th> {companySums.netSalary} </th>
          </tr>
        </tfoot>
      </table>

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
export default MonthlySalary;
