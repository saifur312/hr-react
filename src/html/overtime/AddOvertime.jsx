import React, { useState, useEffect } from "react";

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { dateFormatter, timeFormatter } from "../../utils/DateFromatter";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddOvertime() {

    const navigate = useNavigate();

    const [employeeId, setEmployeeId] = useState('');
    const [overtimeId, setOvertimeId] = useState('');
    const [overtimeType, setOvertimeType] = useState('');
    const [overtimeDateStr, setOvertimeDateStr] = useState(null);
    const [startTimeStr, setStartTimeStr] = useState('');
    const [endTimeStr, setEndTimeStr] = useState('');
    const [status, setStatus] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch(`http://localhost:8080/employee-list`);
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchEmployees();
    }, [setEmployees]);

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/overtime-add-save", {
                method: "POST",
                body: JSON.stringify({
                    employeeId: employeeId,
                    overtimeId: overtimeId,
                    overtimeType: overtimeType,
                    overtimeDateStr: dateFormatter(overtimeDateStr),
                    startTimeStr: timeFormatter(startTimeStr),
                    endTimeStr: timeFormatter(endTimeStr),
                    status: status,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r);

            if (response.ok) {
                setSuccessMessage('Overtime  added successfully!');

                // Set a loading state to indicate the redirection is in progress
                setLoading(true);

                // Use setTimeout to delay the navigation log
                setTimeout(() => {
                    console.log('Redirecting to the same URL...');
                    navigate("", { replace: true });
                    // Reset the loading state after navigation
                    setLoading(false);
                    // Reset form fields
                    setOvertimeId('');
                    setOvertimeType('');
                    setOvertimeDateStr(null);
                    setStartTimeStr('');
                    setEndTimeStr(null);
                    setStatus('');
                }, 100);
            }

        } catch (err) {
            console.log(err);
        }

    };

    return (

        <Row className="justify-content-md-center m-4" >
            {/* <Col sm={1}>sm=8</Col> */}
            {successMessage && <h3 style={{ color: "green" }}>{successMessage}</h3>}
            <Col md={10}>
                <form onSubmit={handleSubmit}
                    action="department-add-save"
                    method="POST"
                    className="card-body label"
                    style={{
                        backgroundColor: "#323234", color: "#fff",
                        paddingBottom: "30px", marginBottom: "30px"
                    }}
                >
                    <div className="row" >
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
                            <label htmlFor="overtimeId" className="col-form-label col-lg-4">
                                <span className="float-left">Overtime ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id="overtimeId"
                                    name="overtimeId"
                                    className="form-control"
                                    value={overtimeId}
                                    onChange={(event) => setOvertimeId(event.target.value)}>
                                </input>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="overtimeType" className="col-form-label col-lg-4">
                                <span className="float-left">Overtime Type</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    id="overtimeType"
                                    name="overtimeType"
                                    className="form-control"
                                    value={overtimeType}
                                    onChange={(event) => setOvertimeType(event.target.value)}>
                                </input>
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="overtimeDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Overtime Date</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="overtimeDateStr"
                                    name="overtimeDateStr"
                                    dateFormat="dd-MM-yyyy"
                                    selected={overtimeDateStr}
                                    onChange={(date) => { setOvertimeDateStr(date); }}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="startTimeStr" className="col-form-label col-lg-4">
                                <span className="float-left">Start Time</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="startTimeStr"
                                    name="startTimeStr"
                                    selected={startTimeStr}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15} // specify the time intervals if needed
                                    timeCaption="Time"
                                    dateFormat="HH:mm"
                                    onChange={(time) => { setStartTimeStr(time); }}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="endTimeStr" className="col-form-label col-lg-4">
                                <span className="float-left">End Time</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="endTimeStr"
                                    name="endTimeStr"
                                    selected={endTimeStr}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15} // specify the time intervals if needed
                                    timeCaption="Time"
                                    dateFormat="HH:mm"
                                    onChange={(time) => { setEndTimeStr(time); }}
                                />
                            </div>
                        </div>

                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="status" className="col-form-label col-lg-4">
                                <span className="float-left">Status</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control chosen-select"
                                    required="required"
                                    id="status" name="status"
                                    onChange={(event) => setStatus(event.target.value)}
                                >
                                    <option >Active</option>
                                    <option >Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group col-lg-12 text-center mt-lg-4" >
                            <button
                                className="btn btn-danger btn-lg col-lg-2 mr-5 col-sm-5 col-xs-3"
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-success btn-lg col-lg-2 col-sm-5 col-xs-3"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Col>
        </Row >
    );

}

export default AddOvertime;