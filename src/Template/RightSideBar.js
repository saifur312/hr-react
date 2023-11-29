import React from 'react';
import {
    Link
} from "react-router-dom";

import "./../App.css";


const RightSideBar = () => {
    return (
        <aside className="sidebar-right">
            <nav>
                <ul>
                    <li> <Link to="/Add employee">Add Employee</Link> </li>
                    <li> <Link to="/Inquire employee">Inquire employee</Link> </li>
                    <li> <Link to="/Add Department">Add Department </Link> </li>
                    <li> <Link to="/DepartmentList">Department List </Link> </li>
                    <li> <Link to="/Add Section">Add Section </Link> </li>
                    <li> <Link to="/SectionList">Section List </Link> </li>
                    <li> <Link to="/Add Bank info">Add Bank info</Link> </li>
                    <li> <Link to="/Bank info List">Bank info List </Link> </li>
                    <li> <Link to="/Add Over Time">Add Over Time</Link> </li>
                    <li> <Link to="/Over Time List">Over Time List </Link> </li>
                    <li> <Link to="/Add Allowance">Add Allowance </Link> </li>
                    <li> <Link to="/Allowance List">Allowance List </Link> </li>
                    <li> <Link to="/Add Loan">Add Loan </Link> </li>
                    <li> <Link to="/Loan List">Loan List </Link> </li>
                    <li> <Link to="/Monthly Salary">Monthly Salary </Link> </li>
                    <li> <Link to="/Total Salary ">Total Salary </Link> </li>
                    <li> <Link to="/Total Salary Chart">Total Salary Chart</Link> </li>
                </ul>
            </nav>
        </aside>
    );
}

export default RightSideBar;