import React, { useState } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//import { format } from 'date-fns';

// import { useHistory } from 'react-router-dom';

function AddDepartment() {
  // const history = useHistory();
  const navigate = useNavigate();

  //const [departmentId, setDepartmentId] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [description, setDescription] = useState('');
  const [responsibilty, setResponsibility] = useState('');
  const [managerName, setManagerName] = useState('');
  const [totalEmployee, setTotalEmployee] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [successMessage, setSuccessMessage] = useState('');
  //const [loading, setLoading] = useState(false);

  // const handleDateChange = (date) => {
  //     // Extract only the date part (YYYY-MM-DD) from the selected date
  //     const formattedDate = date.toISOString().split('T')[0];

  //     // Now you can submit the formattedDate to your backend server
  //     console.log('formattedDate date:', formattedDate);

  //     setSelectedDate(formattedDate);
  //     //setSelectedDate(formattedDate);
  //     console.log('selectedDate: ', selectedDate);
  // };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Set the selectedDate directly without formatting
    console.log('selectedDate: ', selectedDate);
  };

  // const formatDate = (date) => {
  //   return format(date, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });
  // };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //let res = await fetch("http://localhost:8080/department-add-save", {
      const response = await fetch(
        'http://localhost:8080/department-add-save',
        {
          method: 'POST',
          body: JSON.stringify({
            departmentName: departmentName,
            description: description,
            responsibilty: responsibilty,
            managerName: managerName,
            totalEmployee: totalEmployee,
            //startDate: formatDate(selectedDate), // Format the date before submission
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((r) => r);

      //navigate("/Add Department");
      // if (response.ok) {
      //     setSuccessMessage('Department added successfully!');
      //     // history.push("/Add Department");
      //     // Redirect to the same URL
      //     navigate("", { replace: true });
      // }
      if (response.ok) {
        setSuccessMessage('Department added successfully!');

        // Set a loading state to indicate the redirection is in progress
        //setLoading(true);

        // Use setTimeout to delay the navigation log
        setTimeout(() => {
          console.log('Redirecting to the same URL...');
          navigate('', { replace: true });
          //setLoading(false);
          // Reset the loading state after navigation
          // Reset form fields
          setDepartmentName('');
          setDescription('');
          setResponsibility('');
          setManagerName('');
          setTotalEmployee('');
          setSelectedDate(null);
        }, 100);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      <h2 className="content-title">Add Department</h2>
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
              <label htmlFor="departmentId" className="col-form-label col-lg-4">
                <span className="float-left">Department Id</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="departmentId"
                  name="departmentId"
                  readOnly={true}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="departmentName"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Department Name</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="departmentName"
                  name="departmentName"
                  className="form-control"
                  value={departmentName}
                  onChange={(event) => setDepartmentName(event.target.value)}
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
              <label htmlFor="managerName" className="col-form-label col-lg-4">
                <span className="float-left">Manager Name</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="managerName"
                  name="managerName"
                  className="form-control"
                  value={managerName}
                  onChange={(event) => setManagerName(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="totalEmployee"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">No of Employee</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="totalEmployee"
                  name="totalEmployee"
                  value={totalEmployee}
                  onChange={(event) => setTotalEmployee(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="addressId" className="col-form-label col-lg-4">
                <span className="float-left">Address Id</span>
                <span className="float-right">:</span>
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
            {/* <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="startDateStr" className="col-form-label col-lg-4">
                <span className="float-left">Department Start Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </div> */}
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="endDateStr" className="col-form-label col-lg-4">
                <span className="float-left">Department End Date</span>
                <span className="float-right">:</span>
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
              <label htmlFor="serail" className="col-form-label col-lg-4">
                <span className="float-left">Department Serial</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  id=""
                  name=""
                  className="form-control"
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
            {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler1" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-1</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler2" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-2</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler3" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-3</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler4" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-4</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler5" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-5</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    name="">
                                </input>
                            </div>
                        </div> */}
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

export default AddDepartment;
