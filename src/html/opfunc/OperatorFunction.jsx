import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';

const OperatorFunction = () => {
  const [employees, setEmployees] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [operatorId, setOperatorId] = useState('');
  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employee-list`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchEmployees();
  }, [setEmployees]);

  useEffect(() => {
    const fetchFunctions = async () => {
      try {
        const response = await fetch('http://localhost:8080/function-list');
        const data = await response.json();
        //console.log(Object.values(data));
        setFunctions(data);
      } catch (error) {
        console.log('Error fetching Functions: ', error);
      }
    };
    fetchFunctions();
  }, [setFunctions]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:8080/opfunc-save', {
  //       method: 'POST',
  //       body: JSON.stringify([
  //         {
  //           //employeeId: employeeId,
  //           //functions: selectedFunctions,
  //           selectedFunctions,
  //         },
  //       ]),
  //     });
  //   } catch (error) {
  //     console.log('Error: ' + error.message);
  //   }
  // };

  //const handleFunctionCheckboxChange = (event) => {
  const handleFunctionCheckboxChange = (func) => {
    //const selectedFunctionId = event.target.value;
    // const selectedFunctionId = func;
    // console.log(Object.values(selectedFunctionId));
    const { systemId, subSystemId, functionId } = func;
    console.log(systemId, subSystemId, functionId);

    setSelectedFunctions((currentFunctionsState) => {
      if (currentFunctionsState.includes(functionId)) {
        // If already selected, remove from the array
        return currentFunctionsState.filter(
          (item) => item.functionId !== functionId
        );
      } else {
        // If not selected, add to the array
        //return [...prevIds, selectedFunctionId];
        return [
          ...currentFunctionsState,
          { operatorId, systemId, subSystemId, functionId },
        ];
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const functionsToSubmit = selectedFunctions.map((func) => ({
        operatorId: func.operatorId,
        systemId: func.systemId,
        subSystemId: func.subSystemId,
        functionId: func.functionId,
      }));

      const response = await fetch('http://localhost:8080/save-opfunc', {
        method: 'POST',
        body: JSON.stringify(functionsToSubmit),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle the response as needed
      //console.log(response);
      if (response.ok) {
        setMessage('Functions are set to operator successfully');
        setTimeout(() => {
          navigate('', { replace: true });
          setSelectedFunctions('');
        });
      } else {
        setMessage('Error: ' + response.text);
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h3> {message} </h3>
      <Col md={10}>
        <Form
          onSubmit={handleSubmit}
          method="POST"
          className="card-body label"
          style={{ backgroundColor: '#323234', color: '#fff' }}
        >
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="operatorId" className="col-form-label col-lg-4">
                <span className="float-left">Employee ID </span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  className="form-control"
                  id="operatorId"
                  name="operatorId"
                  onChange={(event) => setOperatorId(event.target.value)}
                >
                  <option value="0">Select One</option>
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
              <label htmlFor="functionName" className="col-form-label col-lg-4">
                <span className="float-left"> System Name</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                {functions &&
                  functions.map((func) => (
                    <FormControlLabel
                      key={func.functionId}
                      control={
                        <Checkbox
                          // value={func}
                          onChange={() => handleFunctionCheckboxChange(func)}
                        />
                      }
                      label={func.functionName}
                    />
                  ))}
              </div>
            </div>
          </div>

          <Row>
            <Col md={4}>
              <button className="btn btn-success m-4" type="submit">
                Save
              </button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
export default OperatorFunction;
