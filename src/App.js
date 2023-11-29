// import logo from './logo.svg';
// import './App.css';

import React from 'react';

import {
    // BrowserRouter as Router,
    Routes, //previous Switch 
    Route
} from "react-router-dom";
import Login from './html/Login';
import LoginVerification from './html/LoginVerification';
import PasswordReset from './html/PasswordReset';
import Employee from './html/employee/Employee';
import AddEmployee from './html/employee/AddEmployee';
import EmployeeList from './html/employee/EployeeList';
import UpdateEmployee from './html/employee/UpdateEmployee';

import TopMenuBar from './Template/TopMenuBar';
import LeftSidebar from './Template/LeftSideBar';
import RightSideBar from './Template/RightSideBar';
import Footer from './Template/Footer';
import './App.css';
import AddDepartment from './html/department/AddDepartment';
import DepartmentList from './html/department/DepartmentList';
import AddSection from './html/section/AddSection';
import SectionList from './html/section/SectionList';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import EmployeeDetails from './html/employee/EmployeeDetails';
import AddBankInfo from './html/bank info/AddBankInfo';
import BankInfoList from './html/bank info/BankInfoList';
import AllowanceList from './html/allowance/AllowanceList';
import LoginNoFormik from './html/LoginNoFormik';
import AddAllowance from './html/allowance/AddAllowance';
import AddLoan from './html/loan/AddLoan';
import LoanList from './html/loan/LoanList';



function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>


            <div className="Body">
                <div className="Navbar-top">
                    <TopMenuBar />
                </div>
                <div className="Sidebar-left">
                    <LeftSidebar />
                </div>
                <div className="Sidebar-right">
                    <RightSideBar />
                </div>
                <div className="Container">
                    {/* <h1> Our code will be in this section</h1> */}

                    <Routes >
                        <Route path="/verify-login/:id" element={<LoginVerification />} />
                        {/* <Route path="/verify-login" element={<LoginVerification/>}/> */}
                        {/* <LoginVerification/>
            </Route> */}
                        <Route path="/forgot-password" element={<PasswordReset />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<LoginNoFormik />} />
                        <Route path="/profile/:id" element={<Employee />} />
                        {/* <Route path="/Add new account" element={<AddEmployee />} /> */}
                        <Route path="/Inquire employee" element={<EmployeeList />} />
                        <Route path="/Employee details" element={<EmployeeDetails />} />
                        <Route path="/Add employee" element={<AddEmployee />} />
                        <Route path="/Update account" element={<UpdateEmployee />} />
                        <Route path="/Add Department" element={<AddDepartment />} />
                        <Route path="/DepartmentList" element={<DepartmentList />} />
                        <Route path="/Add Section" element={<AddSection />} />
                        <Route path="/SectionList" element={<SectionList />} />
                        <Route path="/Add Bank info" element={<AddBankInfo />} />
                        <Route path="/Bank info List" element={<BankInfoList />} />
                        <Route path="/Add Allowance" element={<AddAllowance/>} />
                        <Route path="/Allowance List" element={<AllowanceList/>} />
                        <Route path="/Add Loan" element={<AddLoan/>} />
                        <Route path="/Loan List" element={<LoanList/>} />

                        {/* <Login/>
            </Route> */}
                    </Routes >
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>

        </LocalizationProvider>
    );
}

export default App;
