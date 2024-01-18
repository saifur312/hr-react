import React, { useState, useEffect } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { dateFormatter } from '../../utils/DateFromatter';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function AddEducation() {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState('');
  const [certificate, setCertificate] = useState('');
  const [institute, setInstitute] = useState('');
  const [completionDateStr, setCompletionDateStr] = useState(null);
  const [studyGroup, setStudyGroup] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [, setLoading] = useState(false);

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employee-list`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchEmployees();
  }, [setEmployees]);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/education-add-save', {
        method: 'POST',
        body: JSON.stringify({
          employeeId: employeeId,
          certificate: certificate,
          institute: institute,
          completionDateStr: dateFormatter(completionDateStr),
          result: result,
          studyGroup: studyGroup,
          status: status,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r);

      if (response.ok) {
        // setSuccessMessage('Education  added successfully!');

        // Set a loading state to indicate the redirection is in progress
        // setLoading(true);
        Swal.fire({
          title: 'Education added Success..!!',
          icon: 'success',
          confirmButtonText: 'Continue',
        });

        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          console.log('Redirecting to the Add Education URL...');
          navigate('', { replace: true });
          // Reset the loading state after navigation
          setLoading(false);
          // Reset form fields
          setEmployeeId('');
          setCertificate('');
          setInstitute('');
          setCompletionDateStr(null);
          setResult('');
          setStudyGroup(null);
          setStatus('');
        }, 100);
      }
    } catch (err) {
      Swal.fire({
        title: 'Education added Fail..!!',
        icon: 'error',
        confirmButtonText: 'Continue',
      });
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Employee's Education</h2>
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="leave-add-save"
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
              <label htmlFor="certificate" className="col-form-label col-lg-4">
                <span className="float-left">Certificate</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="certificate"
                  name="certificate"
                  className="form-control"
                  value={certificate}
                  onChange={(event) => setCertificate(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="institute" className="col-form-label col-lg-4">
                <span className="float-left">Institute</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="institute"
                  name="institute"
                  className="form-control"
                  value={institute}
                  onChange={(event) => setInstitute(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="completionDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Completion Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="completionDateStr"
                  name="completionDateStr"
                  dateFormat="dd-MM-yyyy"
                  selected={completionDateStr}
                  onChange={(date) => {
                    setCompletionDateStr(date);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="studyGroup" className="col-form-label col-lg-4">
                <span className="float-left">Study Group</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="studyGroup"
                  name="studyGroup"
                  value={studyGroup}
                  onChange={(event) => {
                    setStudyGroup(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="result" className="col-form-label col-lg-4">
                <span className="float-left">Result</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="result"
                  name="result"
                  value={result}
                  onChange={(event) => {
                    setResult(event.target.value);
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
}

export default AddEducation;
