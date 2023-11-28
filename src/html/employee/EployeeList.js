import React, { useEffect, useState } from "react";


import './../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

import EmployeeDetails from "./EmployeeDetails";
import EmployeeModal from "./EmployeeModal";


function EmployeeList() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const [menu, setMenu] = useState([]);
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        employeeList()
    }, [])

    const employeeList = async () => {
        const response = await fetch("http://localhost:8080/empliyee-list-react");

        console.log("Content Type " + response.headers);

        const data = await response.json();
        setEmployees(data);
        console.log("Fetched " + data);
    }

    // const handleClick = (emp) => {
    //     // Access menu item details here
    //     console.log(emp.employeeId, emp.nid, emp.fullName);
    //     // Perform other actions based on the clicked item

    //         let res = await
    //         fetch("http://localhost:8080/employee-details?" + emp.employeeId);

    // };



    const handleClick = async (emp) => {
        try {
            const response = await fetch(`http://localhost:8080/employee-details?id=${emp.employeeId}`);

            if (response.ok) {
                const data = await response.json();
                // Handle the data (EmployeeDto) as needed
                setSelectedData(data);
                console.log(data);
                // Navigate to the Employee Details route with the data as state
                navigate('/Employee details', { state: { employeeData: data } });
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    const handleClickOnModal = async (emp) => {
        try {
            const response = await fetch(`http://localhost:8080/employee-details?id=${emp.employeeId}`);

            if (response.ok) {
                const data = await response.json();
                setSelectedData(data);
                setIsModalOpen(true);
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const handleClickHere = async (emp) => {
    //     try {
    //       const response = await fetch(`http://localhost:8080/employee-details?id=${emp.employeeId}`);
          
    //       if (response.ok) {
    //         const data = await response.json();
    //         setSelectedData(data);
    //       } else {
    //         console.error(`Error: ${response.status} - ${response.statusText}`);
    //       }
    //     } catch (error) {
    //       console.error('Error:', error.message);
    //     }
    //   };


    return (
        <div class="col-12 card bg-light mx-auto" style={{ paddingTop: "10px"}}>
            <form class="form-group row col-lg-12" action="#" method="post">
                <div class="form-group row col-lg-12 mt-4">
                    <label for="religion" class="col-form-label col-lg-3"><b>
                        <span class="float-left">Find Employee By</span>
                        <span class="float-right">:</span></b>
                    </label>
                    <div class="col-lg-7">
                        <select class="form-control" name="findBy"
                            required="required">
                            <option value="Name" 		> Name         </option>
                            <option value="NickName" 	> Nick Name     </option>
                            <option value="EmployeeId" 	> Employee Id  </option>
                            <option value="NID" 		> NID          </option>
                            <option value="FingerId" 	> Finger Id    </option>
                        </select>
                    </div>
                </div>

                <div class="form-group row col-lg-12">
                    <label for="findByValue" class="col-form-label col-lg-3"><b>
                        <span class="float-left" id="findByValueLabel">Enter any Name</span>
                        <span class="float-right">:</span> </b>
                    </label>
                    <div class="col-lg-6">
                        <input type="text" class="form-control" id="findByValue" name="findByValue"
                            placeholder="Enter some character of Name" required="required"></input>
                    </div>
                    <div class="col-lg-2">
                        <button type="submit" class="btn btn-success btn-lg col-lg-12">Search </button>
                    </div>

                </div>
            </form>


            <div className="col-12 card bg-light mx-auto">
                <table width="100%" className="table table-hover table-borderless">
                    <tbody class="text-center">
                        <tr class="table-header">
                            <th scope="col">SL</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">NID</th>
                            <th scope="col">Finger ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Nick Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col" >Action</th>
                            <th scope="col" >Action</th>
                            <th scope="col" >Select</th>
                        </tr>

                        {employees.map((emp, index) => {
                            return (
                                <tr key={emp.employeeId}>
                                    <td> {index +1}   </td>
                                    <td> {emp.employeeId} </td>
                                    <td> {emp.nid}  </td>
                                    <td> {emp.fingerId} </td>
                                    <td> {emp.fullName} </td>
                                    <td> {emp.nickName} </td>
                                    <td> {emp.mobileNo} </td>
                                    <td>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleClick(emp)}
                                        >
                                            DetailsOnNewTab
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleClickOnModal(emp)}
                                        >
                                            DetailsOnModal
                                        </button>
                                    </td>
                                    {/* <td>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleClickHere(emp)}
                                        >
                                            DetailsHere
                                        </button>
                                    </td> */}
                                    <td> <a class="btn btn-info btn-sm" >Select ID</a></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            {/* <EmployeeDetails data={selectedData} /> */}
            <EmployeeModal isOpen={isModalOpen} onClose={closeModal} data={selectedData} />
        </div>

    );
}

export default EmployeeList;