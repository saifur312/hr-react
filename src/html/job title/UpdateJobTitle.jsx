import React, { useState } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateJobTitle() {
  const { data } = useLocation().state;

  const navigate = useNavigate();

  const [jobId, setJobId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsibilty, setResponsibility] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:8080/jobtitle-update-save',
        {
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
        }
      ).then((r) => r);

      if (response.ok) {
        setSuccessMessage('Job Title  added successfully!');

        // Set a loading state to indicate the redirection is in progress
        setLoading(true);

        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          console.log('Redirecting to the same URL...');
          navigate('', { replace: true });
          // Reset the loading state after navigation
          setLoading(false);
          // Reset form fields
          setTitle('');
          setDescription('');
          setResponsibility('');
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
      {data && (
        <div>
          <h2> Job Id fetched: {data.jobId} </h2>
          <h2> Title Id fetched: {data.title} </h2>
        </div>
      )}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
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
            <div className="form-group col-lg-12 text-center mt-lg-4">
              <button
                className="btn btn-success btn-lg col-lg-2 col-sm-5 col-xs-3"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default UpdateJobTitle;
