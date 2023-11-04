import React, { useEffect, useState } from "react";


import './../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function DepartmentList(){

    const [department, setDepartment] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        departmentList()
    }, [])

    const departmentList = async () => {
        //const response = await fetch("http://localhost:8080/dept-list");
        fetch("http://localhost:8080/dept-list")
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return new Promise([])
            }
        })
        .then(data => setDepartment(data))
        .catch(err => {
            console.log(err)
        })
        
        // console.log("Content Type " + response.headers);

        // const data = await response.json();
        // setDepartment(data);
        // //setMenu(await response.json());
        // console.log("Fetched " + data);
    }

    return(

        <div className="col-12 card bg-light mx-auto" style={{padding: "3% 8%", marginTop:"6px"}}>
            <div className="form-group row col-lg-12">
                <table width="100%" className="table table-hover table-borderless">
                    <tbody className="text-center">
                        <tr className="table-header">
                            <th scope="col">SL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Desc.</th>
                            <th scope="col">Responsibility</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Total Employee</th>
                        </tr>

                        {department.map((department, index) => {
                            return (

                                <tr >
                                <td> {index +1}  </td>
                                    <td> {department.departmentName} </td>
                                    <td> {department.description}  </td>
                                    <td> {department.responsibilty} </td>
                                    <td> {department.managerName} </td>
                                    <td> {department.totalEmployee} </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DepartmentList;