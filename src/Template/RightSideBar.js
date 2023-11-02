import React from 'react';
import {
    BrowserRouter as Router,
    Routes, //previous Switch 
    Route,
    Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./../App.css";


const RightSideBar = () => {
    return (
        <aside className="sidebar-right">
            <nav>
                <ul>
                    <li>
                        <Link to="/Add new employee">Add Employee</Link>
                    </li>
                    <li>
                        <Link to="/Inquire employee">Inquire employee</Link>
                    </li>
                    <li>
                        <Link to="/Add Department">Add Department </Link>
                    </li>
                    <li>
                        <Link to="/DepartmentList">Department List </Link>
                    </li>
                    <li>
                        <Link to="/Add Section">Add Section </Link>
                    </li>
                    <li>
                        <Link to="/SectionList">Section List </Link>
                    </li>
                    <li>
                        <Link to="/Add Allowance">Add Allowance </Link>
                    </li>
                    <li>
                        <Link to="/AllowanceList">Allowance List </Link>
                    </li>
                    <li>
                        <Link to="/Add Loan">Add Loan </Link>
                    </li>
                    <li>
                        <Link to="/Loan List">Loan List </Link>
                    </li>
                    <li>
                        <Link to="/Monthly Salary">Monthly Salary </Link>
                    </li>
                    <li>
                        <Link to="/Total Salary ">Total Salary </Link>
                    </li>
                    <li>
                        <Link to="/Total Salary Chart">Total Salary Chart</Link>
                    </li>
                    {/* <li>
                        <Button variant="info" type="button">
                            <Link to="/Inquire employee">Inquire employee</Link>
                        </Button>
                    </li> */}

                </ul>
            </nav>
        </aside>
    );
}

export default RightSideBar;