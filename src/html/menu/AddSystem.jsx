import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export const AddSystem = () => {
  //const [systemId, setSystemId] = useState('');
  const [functionName, setFunctionName] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/save-system', {
        method: 'POST',
        body: JSON.stringify({
          functionName: functionName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        //const data = await response.json();
        setMessage('Data saved successfull');
        // Navigate to the Employee Details route with the data as state
        navigate('/AddSystem');
      } else {
        //console.error(`Error: ${response.status} - ${response.statusText}`);
        setMessage(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h3> {message} </h3>
      <Col md={10}>
        <form
          onSubmit={handleFormSubmit}
          method="POST"
          className="card-body label"
          // style={{
          //   backgroundColor: '#323234',
          //   color: '#fff',
          //   paddingBottom: '30px',
          //   marginBottom: '30px',
          // }}
        >
          <div className="row">
            {/* <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="systemId" className="col-form-label col-lg-4">
                <span className="float-left">System ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="systemId"
                  name="systemId"
                  className="form-control"
                  value={systemId}
                  onChange={(event) => setSystemId(event.target.value)}
                ></input>
              </div>
            </div> */}

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="functionName" className="col-form-label col-lg-4">
                <span className="float-left"> System Name</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="functionName"
                  name="functionName"
                  className="form-control"
                  value={functionName}
                  onChange={(event) => setFunctionName(event.target.value)}
                ></input>
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

// export default AddMenu;
