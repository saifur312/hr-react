import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export const AddFunction = () => {
  const [systemId, setSystemId] = useState('');
  const [subSystemId, setSubSystemId] = useState('');
  const [functionName, setFunctionName] = useState('');
  const [functionRoute, setFunctionRoute] = useState('');
  const [systems, setSystems] = useState([]);
  const [subSystems, setSubSystems] = useState([]);
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

  // The setSystemId function is asynchronous, so when you call subSystemList() immediately after setting the state, the systemId might not have been updated yet.
  // To solve this issue, you can use the callback function of setSystemId to ensure that the state has been updated before calling subSystemList(). Here's the modified code:

  // const handleChangeSystemId = (event) => {
  //   const selectedSystemId = event.target.value;
  //   setSystemId(selectedSystemId, () => {
  //     console.log('selected system id:', selectedSystemId);
  //     subSystemList();
  //   });
  // };

  // const subSystemList = async () => {
  //   try {
  //     console.log('selected system id:', systemId);
  //     const response = await fetch(
  //       `http://localhost:8080/sub-system-list?systemId=${systemId}`
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSubSystems(data);
  //     } else {
  //       console.log(`Error: ${response.status} - ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };

  useEffect(() => {
    const fetchSubSystems = async () => {
      try {
        if (systemId !== '') {
          // Use 'systemId' directly in the fetch URL
          const response = await fetch(
            `http://localhost:8080/sub-system-list?systemId=${systemId}`
          );
          const data = await response.json();
          setSubSystems(data);
        }
      } catch (error) {
        console.error('Error fetching sub-systems:', error.message);
      }
    };

    fetchSubSystems(); // Call the function directly inside the useEffect
  }, [systemId]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/save-function', {
        method: 'POST',
        body: JSON.stringify({
          systemId: systemId,
          subSystemId: subSystemId,
          functionName: functionName,
          route: functionRoute,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setMessage('Function saved successfully...!!');
        navigate('', { replace: true });
      } else {
        setMessage(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Function</h2>
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
                  // onChange={(event) => {
                  //   setSystemId(event.target.value);
                  //   subSystemList();
                  // }}
                  //onChange={handleChangeSystemId}
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
              <label htmlFor="subSystemId" className="col-form-label col-lg-4">
                <span className="float-left">Sub System ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  className="form-control"
                  id="subSystemId"
                  name="subSystemId"
                  onChange={(event) => setSubSystemId(event.target.value)}
                >
                  <option value="0">Select One</option>
                  {/* This is an nested array iteration, means array of arrays not array of objects */}
                  {subSystems.map((subSystem) => (
                    <option key={subSystem[0]} value={subSystem[0]}>
                      {subSystem[1]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="functionName" className="col-form-label col-lg-4">
                <span className="float-left">Function Name</span>
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
                />
              </div>
            </div>

            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="functionRoute"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Route</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="functionRoute"
                  name="functionRoute"
                  className="form-control"
                  value={functionRoute}
                  onChange={(event) => setFunctionRoute(event.target.value)}
                />
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
