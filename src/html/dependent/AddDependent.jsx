import React, { useState, useEffect } from 'react';
import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const AddDependent = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [dependentsId, setDependentsId] = useState('');
  const [NID, setNID] = useState('');
  const [name, setName] = useState(null);
  const [nickName, setNickName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [relationship, setRelationship] = useState('');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeNID, setNomineeNID] = useState('');
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
      const response = await fetch('http://localhost:8080/dependent-add-save', {
        method: 'POST',
        body: JSON.stringify({
          employeeId: employeeId,
          dependentsId: dependentsId,
          NID: NID,
          name: name,
          nickName: nickName,
          bloodGroup: bloodGroup,
          relationship: relationship,
          nomineeName: nomineeName,
          nomineeNID: nomineeNID,
          status: status,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r);

      if (response.ok) {
        setSuccessMessage('Dependent  added successfully!');
        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          navigate('', { replace: true });
          // Reset form fields
          setEmployeeId('');
          setDependentsId('');
          setNID('');
          setName(null);
          setNickName('');
          setBloodGroup(null);
          setNomineeName(null);
          setStatus('');
        }, 100);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="dependent-add-save"
          method="POST"
          className="card-body label"
          style={{
            backgroundColor: '#323234',
            color: '#fff',
            paddingBottom: '30px',
            marginBottom: '30px',
          }}
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
              <label htmlFor="dependentsId" className="col-form-label col-lg-4">
                <span className="float-left">Dependent ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  id="dependentsId"
                  name="dependentsId"
                  className="form-control"
                  value={dependentsId}
                  onChange={(event) => setDependentsId(event.target.value)}
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
              <label htmlFor="name" className="col-form-label col-lg-4">
                <span className="float-left">Name</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="nickName" className="col-form-label col-lg-4">
                <span className="float-left">Nick Name</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  className="form-control"
                  id="nickName"
                  name="nickName"
                  value={nickName}
                  onChange={(event) => {
                    setNickName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="bloodGroup" className="col-form-label col-lg-4">
                <span className="float-left">Blood Group</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="bloodGroup"
                  name="bloodGroup"
                  value={bloodGroup}
                  onChange={(event) => {
                    setBloodGroup(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="relationship" className="col-form-label col-lg-4">
                <span className="float-left">Relationship</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="relationship"
                  name="relationship"
                  value={relationship}
                  onChange={(event) => {
                    setRelationship(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="nomineeName" className="col-form-label col-lg-4">
                <span className="float-left">Nominee Name</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="nomineeName"
                  name="nomineeName"
                  value={nomineeName}
                  onChange={(event) => {
                    setNomineeName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="nomineeNID" className="col-form-label col-lg-4">
                <span className="float-left">Nominee NID</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="nomineeNID"
                  name="nomineeNID"
                  value={nomineeNID}
                  onChange={(event) => {
                    setNomineeNID(event.target.value);
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
export default AddDependent;
