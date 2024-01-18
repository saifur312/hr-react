import React, { useState } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddJobTitle() {
  const navigate = useNavigate();

  const [jobId, setJobId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsibilty, setResponsibility] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  //const [loading, setLoading] = useState(false);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/jobtitle-add-save', {
        method: 'POST',
        body: JSON.stringify({
          //jobId: jobId,
          title: title,
          description: description,
          responsibilty: responsibilty,
          status: status,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r);

      if (response.ok) {
        setSuccessMessage('Job Title  added successfully!');

        // Set a loading state to indicate the redirection is in progress
        // setLoading(true);

        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          console.log('Redirecting to the same URL...');
          navigate('', { replace: true });
          // Reset the loading state after navigation
          //setLoading(false);
          // Reset form fields
          setTitle('');
          setDescription('');
          setResponsibility('');
          setStatus('');
        }, 100);
        Swal.fire({
          title: 'Job Title added Success!',
          icon: 'success',
          confirmButtonText: 'Continue',
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'Job Title added Failed!',
        icon: 'error',
        confirmButtonText: 'Continue',
      });
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Job Title</h2>
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="department-add-save"
          method="POST"
          className="form"
        >
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="jobId" className="col-form-label col-lg-4">
                <span className="float-left">Job ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="jobId"
                  name="jobId"
                  className="form-control"
                  value={jobId}
                  onChange={(event) => setJobId(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="title" className="col-form-label col-lg-4">
                <span className="float-left">Title</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="description" className="col-form-label col-lg-4">
                <span className="float-left">Description</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="responsibilty"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Responsibility</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="responsibilty"
                  name="responsibilty"
                  className="form-control"
                  value={responsibilty}
                  onChange={(event) => setResponsibility(event.target.value)}
                ></input>
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

export default AddJobTitle;
