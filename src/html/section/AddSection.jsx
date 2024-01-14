import React, { useEffect, useState } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function AddSection() {
  //const [sectionId, setSectionId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [serail, setSerail] = useState('');
  //const [message, setMessage] = useState("");
  const [department, setDepartment] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    departmentList();
  }, []);

  const departmentList = async () => {
    const response = await fetch('http://localhost:8080/dept-list');

    console.log('Content Type ' + response.headers);

    const data = await response.json();
    setDepartment(data);
    //setMenu(await response.json());
    console.log('Fetched ' + data);
  };

  //const handleChange = e => onchange(e.target.value);
  // const departments = department.map((dept) =>
  //     <option
  //         value={dept.departmentId}
  //     >
  //         {dept.departmentId}
  //     </option>
  // )

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:8080/section-add-save', {
        method: 'POST',
        body: JSON.stringify({
          departmentId: departmentId,
          sectionName: sectionName,
          serail: serail,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r);

      navigate('/Add Section');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Section</h2>
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="section-add-save"
          method="POST"
          className="form"
        >
          <div className="row">
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="sectionId" className="col-form-label col-lg-4">
                <span className="float-left">Section Id</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="sectionId"
                  name="sectionId"
                  readOnly={true}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="departmentId" className="col-form-label col-lg-4">
                <span className="float-left">Department Name</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <select
                  className="form-control "
                  id="departmentId"
                  name="departmentId"
                  onChange={(event) => setDepartmentId(event.target.value)}
                >
                  <option>Select One</option>
                  {/* <option >Select One</option>
                                    <option ></option> */}
                  {/* {departments} */}
                  {department.map((dept) => (
                    <option key={dept.departmentId} value={dept.departmentId}>
                      {dept.departmentName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="sectionName" className="col-form-label col-lg-4">
                <span className="float-left">Section Name</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="sectionName"
                  name="sectionName"
                  className="form-control"
                  value={sectionName}
                  onChange={(event) => setSectionName(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="serail" className="col-form-label col-lg-4">
                <span className="float-left">Section Serial</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="serail"
                  name="serail"
                  className="form-control"
                  value={serail}
                  onChange={(event) => setSerail(event.target.value)}
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
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="filler1" className="col-form-label col-lg-4">
                <span className="float-left">Filler-1</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name=""
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="filler2" className="col-form-label col-lg-4">
                <span className="float-left">Filler-2</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name=""
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="filler3" className="col-form-label col-lg-4">
                <span className="float-left">Filler-3</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name=""
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="filler4" className="col-form-label col-lg-4">
                <span className="float-left">Filler-4</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name=""
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="filler5" className="col-form-label col-lg-4">
                <span className="float-left">Filler-5</span>
                <span className="float-right">:</span>{' '}
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name=""
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
}

export default AddSection;
