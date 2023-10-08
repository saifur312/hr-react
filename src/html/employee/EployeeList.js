import React, { useEffect, useState } from "react";

import '../../Template/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';


function EmployeeList() {


    const [menu, setMenu] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        employeeList()
    }, [])

    const employeeList = async () => {
        const response = await fetch("http://localhost:8080/empliyee-list-react");

        console.log("Content Type " + response.headers);

        const data = await response.json();
        setMenu(data);
        //setMenu(await response.json());
        console.log("Fetched " + data);
    }

    return (
        <div class="col-12 card bg-light mx-auto" style={{ padding: "5% 10%" }}>
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


            <div class="form-group row col-lg-12">
                <table width="100%" border="1" class="table table-bordered table-hover table-borderless">
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
                            <th scope="col" >Select</th>
                        </tr>

                        {menu.map((menu) => {
                            return (

                                <tr >
                                    <td>  </td>
                                    <td> {menu.employeeId} </td>
                                    <td> {menu.nid}  </td>
                                    <td> {menu.fingerId} </td>
                                    <td> {menu.fullName} </td>
                                    <td> {menu.nickName} </td>
                                    <td> {menu.mobileNo} </td>
                                    <td> <a class="btn btn-success btn-sm" >Details</a></td>
                                    <td> <a class="btn btn-info btn-sm" >Select ID</a></td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default EmployeeList;