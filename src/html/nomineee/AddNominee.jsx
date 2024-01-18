import React, { useState, useEffect } from 'react';
import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { dateFormatter } from '../../utils/DateFromatter';
import Swal from 'sweetalert2';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddNominee = () => {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState('');
  const [nomineeId, setNomineeId] = useState('');
  const [NID, setNID] = useState('');
  const [dobStr, setDobStr] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [relation, setRelation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  //const [nomineeIdentity, setNomineeIdentity] = useState();
  const [employees, setEmployees] = useState();

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
    const nomineeIdentity = {
      nomineeId: nomineeId,
      employeeId: employeeId,
    };
    try {
      const response = await fetch('http://localhost:8080/nominee-add-save', {
        method: 'POST',
        body: JSON.stringify({
          // employeeId: employeeId,
          // nomineeId: nomineeId,
          nomineeIdentity: nomineeIdentity,
          NID: NID,
          dobStr: dateFormatter(dobStr),
          firstName: firstName,
          lastName: lastName,
          relation: relation,
          contact: contact,
          email: email,
          status: status,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r);

      if (response.ok) {
        //setSuccessMessage('Nominee  added successfully!');

        Swal.fire({
          title: 'Nominee added Success..!!',
          icon: 'success',
          confirmButtonText: 'Continue',
        });
        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          navigate('', { replace: true });
          // Reset form fields
          setEmployeeId('');
          setNomineeId('');
          setNID('');
          setDobStr(null);
          setFirstName('');
          setLastName(null);
          setContact(null);
          setStatus('');
        }, 100);
      }
    } catch (err) {
      Swal.fire({
        title: 'Nominee added Fail..!!',
        icon: 'error',
        confirmButtonText: 'Continue',
      });
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Employee's Nominee</h2>
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="nominee-add-save"
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
                  {/* I added a check for
                  employees && before mapping over them to ensure that the
                  employees array is not undefined or null. This should prevent
                  the "Cannot read properties of undefined (reading 'map')"
                  error. */}
                  {employees &&
                    employees.map((emp) => (
                      <option key={emp.employeeId} value={emp.employeeId}>
                        {emp.fullName}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="nomineeId" className="col-form-label col-lg-4">
                <span className="float-left">Nominee ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="nomineeId"
                  name="nomineeId"
                  className="form-control"
                  value={nomineeId}
                  onChange={(event) => setNomineeId(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="NID" className="col-form-label col-lg-4">
                <span className="float-left">NID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="NID"
                  name="NID"
                  className="form-control"
                  value={NID}
                  onChange={(event) => setNID(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="dobStr" className="col-form-label col-lg-4">
                <span className="float-left">Date of Birth</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="dobStr"
                  name="dobStr"
                  dateFormat="dd-MM-yyyy"
                  selected={dobStr}
                  onChange={(date) => {
                    setDobStr(date);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="firstName" className="col-form-label col-lg-4">
                <span className="float-left">First Name</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="lastName" className="col-form-label col-lg-4">
                <span className="float-left">Last Name</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="relation" className="col-form-label col-lg-4">
                <span className="float-left">Relation</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="relation"
                  name="relation"
                  value={relation}
                  onChange={(event) => {
                    setRelation(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="contact" className="col-form-label col-lg-4">
                <span className="float-left">Contact</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={contact}
                  onChange={(event) => {
                    setContact(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="email" className="col-form-label col-lg-4">
                <span className="float-left">Email</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
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
export default AddNominee;
