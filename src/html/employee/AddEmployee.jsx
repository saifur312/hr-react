import React, { useEffect, useState } from 'react';

import './../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

//import { DatePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';

// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.tz.setDefault('Asia/Dhaka');

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import { useTitle } from '../../utils/TitleContext';

import { format } from 'date-fns';

function AddEmployee() {
  /*** set title in Top menu bar */
  //const { setComponentTitle } = useTitle();
  // useEffect(() => {
  //   setComponentTitle('Add Employee');
  // }, [setComponentTitle]);

  //const [employeeId, setEmployeeId] = useState('');
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
  const [finalSettleDateStr, setFinalSettleDateStr] = useState('');
  const [nationality, setNationality] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [grade, setGrade] = useState('');
  const [status, setStatus] = useState('');
  const [leaveBalance, setLeaveBalance] = useState('');
  //const [ageYear, setAgeYear] = useState('');
  //const [message, setMessage] = useState("");

  const [department, setDepartment] = useState([]);
  const [sections, setSections] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const departmentList = async () => {
      const response = await fetch('http://localhost:8080/dept-list');

      console.log('Content Type ' + response.headers);

      const data = await response.json();
      setDepartment(data);
      //setMenu(await response.json());
      console.log('Fetched ' + data);
    };
    departmentList();
  }, [setDepartment]);

  let sectionList = async () => {
    console.log('SectionList function call success...!!  ' + departmentId);
    // const response = await fetch("http://localhost:8080/section-list-deptarmentwise/" + departmentId);

    // console.log("Content Type " + response.headers);

    // const data = await response.json();
    // setSections(data);

    await fetch('http://localhost:8080/section-list-deptarmentwise', {
      method: 'POST',
      body: JSON.stringify({
        departmentId: departmentId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return new Promise([]);
        }
      })
      .then((data) => setSections(data));
  };

  // function getAge() {
  //     console.log("From Datepicker " + appliacationDateStr);
  //     var today = new Date();
  //     var birthDate = new Date(appliacationDateStr);
  //     console.log("JS Date " + birthDate);
  //     setDobStr(birthDate);

  //     var age = today.getFullYear() - birthDate.getFullYear();
  //     var m = today.getMonth() - birthDate.getMonth();
  //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //         age--;
  //     }
  //     setAgeYear(age + "y");
  //     //return age;
  //     console.log("Age " + age);
  // }

  // function testDate(){
  //     setAppliacationDateStr(event);
  //     console.log("From DP " + appliacationDateStr);
  // }

  // const formatDateString = (date) => {
  //     return date.toISOString().split('T')[0];
  //     // const formattedDate = date.toISOString().split('T')[0];
  //     // setSelectedDate(formattedDate);
  // };

  const formatDate = (date) => {
    //const parsedDate = parseISO(dobStr);

    //return format(date, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });
    const formattedDate = format(date, 'dd-MM-yyyy', {
      awareOfUnicodeTokens: true,
    });
    return formattedDate.toString();

    // // Split the date string into components
    // if (typeof dateString === 'string') {
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }
    // const components = dobStr.split(' ');

    // // Extract the day, month, and year components
    // const day = components[2];
    // const month = components[1];
    // const year = components[3];

    // // Construct a new date string in a format that can be parsed
    // const formattedDateString = `${day} ${month} ${year}`;
    // // Format the constructed date string
    // return format(new Date(formattedDateString), 'dd/MM/yyyy', { awareOfUnicodeTokens: true });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log('before parsing ' + dobStr, appliacationDateStr);
    try {
      await fetch('http://localhost:8080/employee-add-save', {
        method: 'POST',
        body: JSON.stringify({
          //employeeId: employeeId,
          NID: NID,
          fingerId: fingerId,
          fullName: fullName,
          nickName: nickName,
          departmentId: departmentId,
          sectionId: sectionId,
          gender: gender,
          religion: religion,
          mobileNo: mobileNo,
          email: email,
          tin: tin,
          //dobStr: dobStr,
          dobStr: formatDate(dobStr),
          //appliacationDateStr: appliacationDateStr,
          appliacationDateStr: formatDate(appliacationDateStr),
          interviewDateStr: formatDate(interviewDateStr),
          confirmDateStr: formatDate(confirmDateStr),
          joinDateStr: formatDate(joinDateStr),
          incrementDateStr: formatDate(incrementDateStr),
          promotionDateStr: formatDate(promotionDateStr),
          retiermentDateStr: formatDate(retiermentDateStr),
          finalSettleDateStr: formatDate(finalSettleDateStr),
          pfID: pfID,
          pfJoinDateStr: formatDate(pfJoinDateStr),
          nationality: nationality,
          emergencyContact: emergencyContact,
          bloodGroup: bloodGroup,
          maritalStatus: maritalStatus,
          basicSalary: basicSalary,
          grade: grade,
          status: status,
          leaveBalance: leaveBalance,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => r);

      console.log('After parsing ' + dobStr, appliacationDateStr);
      navigate('/Add employee');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className="justify-content-md-center m-4">
      {/* <Col sm={1}>sm=8</Col> */}
      <Col md={10}>
        <form
          onSubmit={handleSubmit}
          action="employee-add-save"
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
                  onChange={(event) => setNID(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="employeeId" className="col-form-label col-lg-4">
                <span className="float-left">Employee ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  name="employeeId"
                  readOnly={true}
                ></input>
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
                  id="fingerId"
                  name="fingerId"
                  value={fingerId}
                  onChange={(event) => setFingerId(event.target.value)}
                ></input>
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
                  onChange={(event) => setFullName(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="nickName" className="col-form-label col-lg-4">
                <span className="float-left">Nick Name</span>
                <span className="float-right">:</span>&nbsp;
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="nickName"
                  name="nickName"
                  value={nickName}
                  onChange={(event) => setNickName(event.target.value)}
                ></input>
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
                  onChange={(event) => {
                    setDepartmentId(event.target.value);
                    sectionList();
                  }}
                >
                  <option value="0">Select One</option>
                  {department.map((dept) => (
                    <option key={dept.departmentId} value={dept.departmentId}>
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
                  {sections.map((section) => (
                    <option key={section.sectionId} value={section.sectionId}>
                      {section.sectionName}
                    </option>
                  ))}
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
                <input
                  type="text"
                  className="form-control"
                  id="mobileNo"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={(event) => setMobileNo(event.target.value)}
                ></input>
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
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="tin" className="col-form-label col-lg-4">
                <span className="float-left">TIN</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="tin"
                  name="tin"
                  value={tin}
                  onChange={(event) => setTin(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="dobStr" className="col-form-label col-lg-4">
                <span className="float-left">DOB</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-4">
                {/* <DatePicker className="form-control"/> */}
                {/* <DatePicker
                                    className="col-lg-12 form-control"
                                    id="dobStr"
                                    name="dobStr"
                                    value={dobStr}
                                    // dateFormat="dd-MM-yyyy"
                                    timezone="Asia/Dhaka"
                                    // onChange={(event) => setDobStr(event.target.value)}
                                    onChange={(date) => setDobStr(date)}
                                // onChange={(dateEvent) => {
                                //     setDobStr(dateEvent);
                                //     getAge()
                                //     }
                                // }
                                /> */}

                <DatePicker
                  className="form-control"
                  id="dobStr"
                  name="dobStr"
                  dateFormat="dd-MM-yyyy"
                  // value={dobStr}
                  selected={dobStr}
                  //onChange={(date) => setDobStr(date)}

                  onChange={(date) => {
                    // console.log(date);
                    // console.log(date.toISOString());
                    // console.log(date.toISOString().slice(0, 10));
                    setDobStr(date);
                  }}
                />
              </div>
              <div className="row col-lg-4">
                {/* <label htmlFor="age" className="col-form-label">
                                    <span className="float-left">Age</span>
                                    <span className="float-right">:</span>
                                </label> */}
                <div className="col-lg-4" style={{ padding: '0px' }}>
                  <input
                    type="text"
                    className="form-control"
                    id="ageYear"
                    placeholder="00y"
                    readOnly="readOnly"
                  ></input>
                </div>{' '}
                {/*  value={ageYear} */}
                <div className="col-lg-4" style={{ padding: '0px' }}>
                  <input
                    type="text"
                    className="form-control"
                    id="ageMonth"
                    placeholder="00m"
                    readOnly="readOnly"
                  ></input>
                </div>
                <div className="col-lg-4" style={{ padding: '0px' }}>
                  <input
                    type="text"
                    className="form-control"
                    id="ageDay"
                    placeholder="00d"
                    readOnly="readOnly"
                  ></input>
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
              <label
                htmlFor="appliacationDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Application Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                {/* <DatePicker
                                    className="col-lg-12 form-control"
                                    id="appliacationDateStr"
                                    name="appliacationDateStr"
                                    //value={dayjs(appliacationDateStr)}
                                    value={appliacationDateStr}
                                    //defaultValue={dayjs(Date.now())}
                                    // dateFormat="dd-MM-yyyy" 
                                    // onChange={(event) => {
                                    //     setAppliacationDateStr(event);
                                    //     getAge();
                                    //     }
                                    // }

                                    onChange={(event) => setAppliacationDateStr(event)}
                                //onChange={testDate()}
                                /> */}

                <DatePicker
                  className="form-control"
                  popperClassName="col-lg-12"
                  id="appliacationDateStr"
                  name="appliacationDateStr"
                  dateFormat="dd-MM-yyyy"
                  selected={appliacationDateStr}
                  onChange={(date) => setAppliacationDateStr(date)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="interviewDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Interview Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="interviewDateStr"
                  name="interviewDateStr"
                  selected={interviewDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(event) => setInterviewDateStr(event)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="confirmDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Confirm Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="col-lg-12 form-control"
                  id="confirmDateStr"
                  name="confirmDateStr"
                  selected={confirmDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(dateEvent) => setConfirmDateStr(dateEvent)}
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
                  className="col-lg-12 form-control"
                  id="joinDateStr"
                  name="joinDateStr"
                  selected={joinDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(dateEvent) => setJoinDateStr(dateEvent)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="incrementDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Increment Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="col-lg-12 form-control"
                  id="incrementDateStr"
                  name="incrementDateStr"
                  selected={incrementDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(dateEvent) => setIncrementDateStr(dateEvent)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="promotionDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Promotion Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="col-lg-12 form-control"
                  id="promotionDateStr"
                  name="promotionDateStr"
                  selected={promotionDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(dateEvent) => setPromotionDateStr(dateEvent)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="retiermentDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Retirement Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="col-lg-12 form-control"
                  id="retiermentDateStr"
                  name="retiermentDateStr"
                  selected={retiermentDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(dateEvent) => setRetiermentDateStr(dateEvent)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label htmlFor="pfID" className="col-form-label col-lg-4">
                <span className="float-left">PF ID</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="pfID"
                  name="pfID"
                  value={pfID}
                  onChange={(event) => setPfID(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="pfJoinDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">PF Join Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="col-lg-12 form-control"
                  id="pfJoinDateStr"
                  name="pfJoinDateStr"
                  selected={pfJoinDateStr}
                  dateFormat="dd-MM-yyyy"
                  onChange={(dateEvent) => setPfJoinDateStr(dateEvent)}
                />
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="finalSettleDateStr"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Final Settle Date</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <DatePicker
                  className="form-control"
                  id="finalSettleDateStr"
                  name="finalSettleDateStr"
                  onChange={(event) => setFinalSettleDateStr(event)}
                />
              </div>
            </div>
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
                <input
                  type="text"
                  className="form-control"
                  id="nationality"
                  name="nationality"
                  value={nationality}
                  onChange={(event) => setNationality(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-group row col-lg-12 mt-4">
              <label
                htmlFor="emergencyContact"
                className="col-form-label col-lg-4"
              >
                <span className="float-left">Emerg. Contact</span>
                <span className="float-right">:</span>
              </label>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={emergencyContact}
                  onChange={(event) => setEmergencyContact(event.target.value)}
                ></input>
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
              <label
                htmlFor="maritalStatus"
                className="col-form-label col-lg-4"
              >
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
                <input
                  type="text"
                  className="form-control"
                  id="basicSalary"
                  name="basicSalary"
                  value={basicSalary}
                  onChange={(event) => setBasicSalary(event.target.value)}
                ></input>
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
                <input
                  type="text"
                  className="form-control"
                  id="leaveBalance"
                  name="leaveBalance"
                  value={leaveBalance}
                  onChange={(event) => setLeaveBalance(event.target.value)}
                ></input>
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
                  id="filler1"
                  name="filler1"
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
                  id="filler2"
                  name="filler2"
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
                  id="filler3"
                  name="filler3"
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
                  id="filler4"
                  name="filler4"
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
                  id="filler5"
                  name="filler5"
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

export default AddEmployee;
