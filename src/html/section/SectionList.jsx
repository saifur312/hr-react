import React, { useEffect, useState } from "react";


import './../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function SectionList() {

    const [section, setSection] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        sectionList()
    }, [])

    const sectionList = async () => {
        // const response = await fetch("http://localhost:8080/section-list");
        fetch("http://localhost:8080/section-list")
            .then(response => {
                if (response.ok) {
                    //setSection(response.json())
                    response.json()
                        .then(data => setSection(data))
                }
            })

        // console.log("Content Type " + response.headers);

        // const data = await response.json();
        // setDepartment(data);
        // //setMenu(await response.json());
        // console.log("Fetched " + data);
    }

    return (

        <div className="col-12 card bg-light mx-auto" style={{padding: "3% 8%", marginTop:"6px"}}>
            <div className="form-group row col-lg-12">
                <table width="100%" className="table table-hover table-borderless">
                    <tbody className="text-center">
                        <tr className="table-header">
                            <th scope="col">SL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Serial</th>
                        </tr>

                        {section.map((sec, index) => {
                            return (
                                <tr >
                                    <td> {index +1}  </td>
                                    <td> {sec.sectionName}  </td>
                                    <td> {sec.departmentName} </td>
                                    <td> {sec.serail} </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default SectionList;