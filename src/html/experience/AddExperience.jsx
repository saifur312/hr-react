import React, { useState, useEffect } from 'react';
import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { dateFormatter } from '../../utils/DateFromatter';
import Swal from 'sweetalert2';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddExperience = () => {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState('');
  const [lastActiveDateStr, setLastActiveDateStr] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startDateStr, setStartDateStr] = useState(null);
  const [endDateStr, setEndDateStr] = useState('');
  const [designation, setDesignation] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employee-list`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching Employee data:', error);
      }
    };
    fetchEmployees();
  }, [setEmployees]);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:8080/experience-add-save',
        {
          method: 'POST',
          body: JSON.stringify({
            employeeId: employeeId,
            lastActiveDateStr: dateFormatter(lastActiveDateStr),
            companyName: companyName,
            startDateStr: dateFormatter(startDateStr),
            endDateStr: dateFormatter(endDateStr),
            designation: designation,
            responsibilities: responsibilities,
            status: status,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((r) => r);

      if (response.ok) {
        //setSuccessMessage('Experience  added successfully!');
        Swal.fire({
          title: 'Experience added Success..!!',
          icon: 'success',
          confirmButtonText: 'Continue',
        });
        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          navigate('', { replace: true });
          // Reset form fields
          setEmployeeId('');
          setLastActiveDateStr('');
          setCompanyName('');
          setStartDateStr(null);
          setEndDateStr('');
          setDesignation(null);
          setResponsibilities(null);
          setStatus('');
        }, 100);
      }
    } catch (err) {
      Swal.fire({
        title: 'Experience added Fail..!!',
        icon: 'error',
        confirmButtonText: 'Continue',
      });
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Employee's Experience</h2>
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="experience-add-save"
          method="POST"
          className="form"
        >
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="employeeId" className="col-form-label col-lg-4">
                <span className="float-left">Employee ID </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
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
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="lastActiveDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Last ActiveDat</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  id="lastActiveDateStr"
                  name="lastActiveDateStr"
                  className="form-control"
                  dateFormat="dd-MM-yyyy"
                  selected={lastActiveDateStr}
                  onChange={(event) => setLastActiveDateStr(event)}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="companyName" className="col-form-label col-lg-4">
                <span className="float-left">CompanyName</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-control"
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="startDateStr" className="col-form-label col-lg-4">
                <span className="float-left">Start Date</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="startDateStr"
                  name="startDateStr"
                  dateFormat="dd-MM-yyyy"
                  selected={startDateStr}
                  onChange={(date) => {
                    setStartDateStr(date);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="endDateStr" className="col-form-label col-lg-4">
                <span className="float-left">End Date</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="endDateStr"
                  name="endDateStr"
                  dateFormat="dd-MM-yyyy"
                  selected={endDateStr}
                  onChange={(date) => {
                    setEndDateStr(date);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="designation" className="col-form-label col-lg-4">
                <span className="float-left">Designation</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  name="designation"
                  onChange={(event) => {
                    setDesignation(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="responsibilities"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Responsibilities</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="responsibilities"
                  name="responsibilities"
                  onChange={(event) => {
                    setResponsibilities(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="status" className="col-form-label col-lg-4">
                <span className="float-left">Status</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <select
                  className="form-control chosen-select"
                  required="required"
                  id="status"
                  name="status"
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
            <div className="form-group col-lg-12 text-center mt-lg-4">
              <button className="btn btn-danger btn-lg col-lg-2 mr-5 col-sm-5 col-xs-3">
                Cancel
              </button>
              <button
                className="btn btn-success btn-lg col-lg-2 col-sm-5 col-xs-3"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </Col>
    </Row>
  );
};
export default AddExperience;
