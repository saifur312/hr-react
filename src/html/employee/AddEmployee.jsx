import React, { useEffect, useState } from "react";

import './../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams, generatePath } from 'react-router-dom';
import { DatePicker } from "@mui/x-date-pickers";

function AddEmployee() {

    const [employeeId, setEmployeeId] = useState('');
    const [NID, setNID] = useState('');
    const [fingerId, setFingerId] = useState('');
    const [fullName, setFullName] = useState('');
    const [nickName, setNickName] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [sectionId, setSectionId] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [tin, setTin] = useState('');
    const [dobStr, setDobStr] = useState('');
    const [appliacationDateStr, setAppliacationDateStr] = useState('');
    const [interviewDateStr, setInterviewDateStr] = useState('');
    const [confirmDateStr, setConfirmDateStr] = useState('');
    const [joinDateStr, setJoinDateStr] = useState('');
    const [incrementDateStr, setIncrementDateStr] = useState('');
    const [promotionDateStr, setPromotionDateStr] = useState('');
    const [retiermentDateStr, setRetiermentDateStr] = useState('');
    const [pfID, setPfID] = useState('');
    const [pfJoinDateStr, setPfJoinDateStr] = useState('');
    const [nationality, setNationality] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [basicSalary, setBasicSalary] = useState('');
    const [grade, setGrade] = useState('');
    const [status, setStatus] = useState('');
    const [leaveBalance, setLeaveBalance] = useState('');
    const [message, setMessage] = useState("");

    const [department, setDepartment] = useState([]);
    const [section, setSection] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        departmentList()
    }, [])

    const departmentList = async () => {
        const response = await fetch("http://localhost:8080/dept-list");

        console.log("Content Type " + response.headers);

        const data = await response.json();
        setDepartment(data);
        //setMenu(await response.json());
        console.log("Fetched " + data);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // let res = await fetch("http://localhost:8080/department-add-save", {
            //     method: "POST",
            //     body: JSON.stringify({
            //         departmentId: departmentId,
            //         departmentName: departmentName,
            //         description: description,
            //         responsibilty: responsibilty,
            //         managerName: managerName,
            //         totalEmployee: totalEmployee,

            //     }),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }).then(r => r);

            navigate("/Add Employee");

        } catch (err) {
            console.log(err);
        }

    };

    return (

        <Row className="justify-content-md-center m-4" >
            {/* <Col sm={1}>sm=8</Col> */}
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
                            <label htmlFor="NID" className="col-form-label col-lg-4">
                                <span className="float-left">NID</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="NID"
                                    name="NID"
                                    required="required"
                                    value={NID}
                                    onChange={(event) => setNID(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="employeeId" className="col-form-label col-lg-4">
                                <span className="float-left">Employee ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="employeeId"
                                    name="employeeId"
                                    readOnly={true}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="fingerId" className="col-form-label col-lg-4">
                                <span className="float-left">Finger ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    required="required"
                                    id=""
                                    name=""
                                    value={fingerId}
                                    onChange={(event) => setFingerId(event.target.value)}></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="fullName" className="col-form-label col-lg-4">
                                <span className="float-left">Employee Name</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    required="required"
                                    id="fullName"
                                    name="fullName"
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="nickName" className="col-form-label col-lg-4">
                                <span className="float-left">Nick Name</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="nickName"
                                    name="nickName"
                                    value={nickName}
                                    onChange={(event) => setNickName(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="jobId" className="col-form-label col-lg-4">
                                <span className="float-left">Job Title</span>
                                <span className="float-right">:</span>&nbsp;
                            </label>
                            <div className="col-lg-6">
                                <select className="form-control" >
                                    <option value="0">Select One</option>
                                    <option ></option>
                                </select>
                            </div>
                        </div> */}
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="departmentId" className="col-form-label col-lg-4">
                                <span className="float-left">Department</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="departmentId"
                                    name="departmentId"
                                    onChange={(event) => setDepartmentId(event.target.value)}
                                >
                                    <option value="0">Select One</option>
                                    {department.map((dept) => (
                                        <option value={dept.departmentId}>
                                            {dept.departmentName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="sectionId" className="col-form-label col-lg-4">
                                <span className="float-left">Section</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="sectionId"
                                    name="sectionId"
                                    onChange={(event) => setSectionId(event.target.value)}
                                >
                                    <option value="0">Select One</option>
                                    <option> </option>
                                </select>
                            </div>
                        </div>

                        {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="categoryId" className="col-form-label col-lg-4">
                                <span className="float-left">Category</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id=""
                                    name=""
                                    onChange={(event) => set(event.target.value)}
                                >
                                    <option value="0">Select One</option>
                                    <option> </option>
                                </select>
                            </div>
                        </div> */}
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="gender" className="col-form-label col-lg-4">
                                <span className="float-left">Gender</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="gender"
                                    name="gender"
                                    onChange={(event) => setGender(event.target.value)}
                                >
                                    <option value="">Select One</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="religion" className="col-form-label col-lg-4">
                                <span className="float-left">Religion</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="religion"
                                    name="religion"
                                    onChange={(event) => setReligion(event.target.value)}
                                >
                                    <option value="">Select One</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Hinduism">Hinduism</option>
                                    <option value="Buddhist">Buddhist</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="mobileNo" className="col-form-label col-lg-4">
                                <span className="float-left">Mobile No</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="mobileNo"
                                    name="mobileNo"
                                    value={mobileNo}
                                    onChange={(event) => setMobileNo(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="email" className="col-form-label col-lg-4">
                                <span className="float-left">Email</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="tin" className="col-form-label col-lg-4">
                                <span className="float-left">TIN</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="tin"
                                    name="tin"
                                    value={tin}
                                    onChange={(event) => setTin(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="dobStr" className="col-form-label col-lg-4">
                                <span className="float-left">DOB</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-4">
                                {/* <DatePicker className="form-control"/> */}
                                <DatePicker
                                    className="form-control"
                                    id="dobStr"
                                    name="dobStr"
                                    value={dobStr}
                                    onChange={(event) => setDobStr(event.target.value)}
                                />
                            </div>
                            <div className="row col-lg-4" >
                                {/* <label htmlFor="age" className="col-form-label">
                                    <span className="float-left">Age</span>
                                    <span className="float-right">:</span>
                                </label> */}
                                <div className="col-lg-4" style={{ padding: "0px" }}>
                                    <input type="text" className="form-control" placeholder="00y" readonly="readonly"></input>
                                </div>
                                <div className="col-lg-4" style={{ padding: "0px" }}>
                                    <input type="text" className="form-control" placeholder="00m" readonly="readonly"></input>
                                </div>
                                <div className="col-lg-4" style={{ padding: "0px" }}>
                                    <input type="text" className="form-control" placeholder="00d" readonly="readonly"></input>
                                </div>
                            </div>
                        </div>
                        {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler1" className="col-form-label col-lg-4">
                                <span className="float-left">Address Id</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id=""
                                    name=""
                                    readOnly={true}></input>
                            </div>
                        </div> */}
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="appliacationDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Application Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="appliacationDateStr"
                                    name="appliacationDateStr"
                                    value={appliacationDateStr}
                                    onChange={(event) => setAppliacationDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="interviewDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Interview Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="interviewDateStr"
                                    name="interviewDateStr"
                                    value={interviewDateStr}
                                    onChange={(event) => setInterviewDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="confirmDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Confirm Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="confirmDateStr"
                                    name="confirmDateStr"
                                    value={confirmDateStr}
                                    onChange={(event) => setConfirmDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="joinDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Join Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="joinDateStr"
                                    name="joinDateStr"
                                    value={joinDateStr}
                                    onChange={(event) => setJoinDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="incrementDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Increment Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="incrementDateStr"
                                    name="incrementDateStr"
                                    value={incrementDateStr}
                                    onChange={(event) => setIncrementDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="promotionDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Promotion Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="promotionDateStr"
                                    name="promotionDateStr"
                                    value={promotionDateStr}
                                    onChange={(event) => setPromotionDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="retiermentDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Retirement Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker
                                    className="form-control"
                                    id="retiermentDateStr"
                                    name="retiermentDateStr"
                                    value={retiermentDateStr}
                                    onChange={(event) => setRetiermentDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="pfID" className="col-form-label col-lg-4">
                                <span className="float-left">PF ID</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="pfID"
                                    name="pfID"
                                    value={pfID}
                                    onChange={(event) => setPfID(event.target.value)}></input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="pfJoinDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">PF Join Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                {/* <DatePicker className="form-control"/> */}
                                <DatePicker
                                    className="form-control"
                                    id="pfJoinDateStr"
                                    name="pfJoinDateStr"
                                    value={pfJoinDateStr}
                                    onChange={(event) => setPfJoinDateStr(event.target.value)}
                                />
                            </div>
                        </div>
                        {/* <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="finalSettleDateStr" className="col-form-label col-lg-4">
                                <span className="float-left">Final Settle Date</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <DatePicker 
                                    className="form-control" 
                                    id=""
                                    name=""
                                    value={}
                                    onChange={(event) => set(event.target.value)}
                                />
                            </div>
                        </div> */}
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="status" className="col-form-label col-lg-4">
                                <span className="float-left">Status</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="status"
                                    name="status"
                                    value={status}
                                    onChange={(event) => setStatus(event.target.value)}
                                >
                                    <option value="">Select One</option>
                                    <option value="Active">Active</option>
                                    <option value="Terminated">Terminated</option>
                                    <option value="Suspended">Suspended</option>
                                    <option value="Resigned">Resigned</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="nationality" className="col-form-label col-lg-4">
                                <span className="float-left">Nationality</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="nationality"
                                    name="nationality"
                                    value={nationality}
                                    onChange={(event) => setNationality(event.target.value)}>
                                </input>
                            </div>

                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="emergencyContact" className="col-form-label col-lg-4">
                                <span className="float-left">Emerg. Contact</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="emergencyContact"
                                    name="emergencyContact"
                                    value={emergencyContact}
                                    onChange={(event) => setEmergencyContact(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="bloodGroup" className="col-form-label col-lg-4">
                                <span className="float-left">Blood Group</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    onChange={(event) => setBloodGroup(event.target.value)}
                                >
                                    <option value="">Select One</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="maritalStatus" className="col-form-label col-lg-4">
                                <span className="float-left">Marital Status </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="maritalStatus"
                                    name="maritalStatus"
                                    value={maritalStatus}
                                    onChange={(event) => setMaritalStatus(event.target.value)}
                                >
                                    <option value="">Select One</option>
                                    <option value="Married">Married</option>
                                    <option value="Unmarried">Unmarried</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="basicSalary" className="col-form-label col-lg-4">
                                <span className="float-left">Basic Salary </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="basicSalary"
                                    name="basicSalary"
                                    value={basicSalary}
                                    onChange={(event) => setBasicSalary(event.target.value)}>
                                </input>
                            </div>

                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="grade" className="col-form-label col-lg-4">
                                <span className="float-left">Grade </span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <select
                                    className="form-control"
                                    id="grade"
                                    name="grade"
                                    onChange={(event) => setGrade(event.target.value)}
                                >
                                    <option value="0">Select One</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="leaveBalance" className="col-form-label col-lg-4">
                                <span className="float-left">Leave Balance</span>
                                <span className="float-right">:</span>
                            </label>
                            <div className="col-lg-6">
                                <input type="text"
                                    className="form-control"
                                    id="leaveBalance"
                                    name="leaveBalance"
                                    value={leaveBalance}
                                    onChange={(event) => setLeaveBalance(event.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className="form-group row col-lg-12 mt-4">
                            <label htmlFor="filler1" className="col-form-label col-lg-4">
                                <span className="float-left">Filler-1</span>
                                <span className="float-right">:</span> </label>
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="filler1"
                                    name="filler1">
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
                                    id="filler2"
                                    name="filler2">
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
                                    id="filler3"
                                    name="filler3">
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
                                    id="filler4"
                                    name="filler4">
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
                                    id="filler5"
                                    name="filler5">
                                </input>
                            </div>
                        </div>
                        <div className="form-group col-lg-12 text-center mt-lg-4" >
                            <a
                                href="#"
                                className="btn btn-danger btn-lg col-lg-2 mr-5 col-sm-5 col-xs-3"
                                role="button">
                                Cancel
                            </a>
                            <button
                                className="btn btn-success btn-lg col-lg-2 col-sm-5 col-xs-3"
                                type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Col>
        </Row>
    );

}

export default AddEmployee;