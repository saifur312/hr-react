import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export const AddSubSystem = () => {
  const [systemId, setSystemId] = useState('');
  //const [subSystemId, setSubSystemId] = useState('');
  const [functionName, setFunctionName] = useState('');
  const [systems, setSystems] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSystems = async () => {
      try {
        const response = await fetch(`http://localhost:8080/system-list`);
        const data = await response.json();
        setSystems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSystems();
  }, [setSystems]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //alert('Selected system Id ' + systemId);
    try {
      const response = await fetch('http://localhost:8080/save-sub-system', {
        method: 'POST',
        body: JSON.stringify({
          systemId: systemId,
          functionName: functionName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setMessage('Subsystem saved successfully..!!');
        navigate('/AddSubSystem');
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
      console.log('Error: ' + error.message);
    }
  };

  // let handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   alert('Selected system Id ' + systemId);
  // };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Sub System</h2>
      <h3> {message} </h3>
      <Col md={10}>
        <form onSubmit={handleFormSubmit} method="POST" className="form">
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="systemId" className="col-form-label col-lg-4">
                <span className="float-left"> System ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  className="form-control"
                  id="systemId"
                  name="systemId"
                  onChange={(event) => setSystemId(event.target.value)}
                >
                  <option value="0">Select One</option>
                  {/* This is an nested array iteration, means array of arrays not array of objects */}
                  {systems.map((system) => (
                    <option key={system[0]} value={system[0]}>
                      {system[1]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="functionName" className="col-form-label col-lg-4">
                <span className="float-left">Sub System Name</span>
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
