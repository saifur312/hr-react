import React, { useState } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateJobTitle() {
  const { data } = useLocation().state;
  //console.log('JobId From url: ' + data.jobId);

  const navigate = useNavigate();

  // const [jobId, setJobId] = useState('');
  // const [title, setTitle] = useState('');
  //const [jobId, setJobId] = useState(data.jobId);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [responsibilty, setResponsibility] = useState(data.responsibilty);
  const [status, setStatus] = useState(data.status);
  const [successMessage, setSuccessMessage] = useState('');
  const [savedJobTile, setSavedJobTile] = useState(false);

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:8080/jobtitle-update-save',
        {
          method: 'POST',
          body: JSON.stringify({
            jobId: data.jobId,
            title: title,
            description: description,
            responsibilty: responsibilty,
            status: status,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setSuccessMessage('Job Title  updated successfully!');
        const data = await response.json();
        setSavedJobTile(data);
        //console.log('Saved Job Title: ' + savedJobTile);
        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          console.log('Redirecting to the same URL...');
          navigate('/Update Job Title', {
            state: { data: savedJobTile },
          });
        }, 100);
      }
    } catch (error) {
      console.error('Error updating Job Title:', error);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}
      {/* {data && (
        <div>
          <h2> Job Id fetched: {data.jobId} </h2>
          <h2> Title Id fetched: {data.title} </h2>
        </div>
      )} */}

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
                {/* <input
                  type="text"
                  id="jobId"
                  name="jobId"
                  className="form-control"
                  value={data.jobId}
                  onChange={(event) => setJobId(event.target.value)}
                /> */}
                <p
                  className="form-control-plaintext"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    textAlign: 'left',
                    padding: '6px 12px',
                  }}
                >
                  {data.jobId}
                </p>
                {/* Hidden input to include jobId in the payload */}
                <input type="hidden" name="jobId" value={data.jobId} />
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
                  value={title !== '' ? title : data.title}
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
                  value={description !== '' ? description : data.description}
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
                  value={
                    responsibilty !== '' ? responsibilty : data.responsibilty
                  }
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
                  value={status !== '' ? status : data.status}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
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
