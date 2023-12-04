//import React from 'react';

import {
  // BrowserRouter as Router,
  Routes, //previous Switch
  Route,
} from 'react-router-dom';
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EmployeeDetails from './html/employee/EmployeeDetails';
import AddBankInfo from './html/bank info/AddBankInfo';
import BankInfoList from './html/bank info/BankInfoList';
import AllowanceList from './html/allowance/AllowanceList';
import LoginNoFormik from './html/LoginNoFormik';
import AddAllowance from './html/allowance/AddAllowance';
import AddLoan from './html/loan/AddLoan';
import LoanList from './html/loan/LoanList';
import AddJobTitle from './html/job title/AddJobTitle';
import JobTitleList from './html/job title/JobTitleList';
import AddOvertime from './html/overtime/AddOvertime';
import OvertimeList from './html/overtime/OvertimeList';
import AddDeduction from './html/deduction/AddDeduction';
import DeductionList from './html/deduction/DeductionList';
import AddLeave from './html/leave/AddLeave';
import LeaveList from './html/leave/LeaveList';
import AddEducation from './html/education/AddEducation';
import EducationList from './html/education/EducationList';
import AddExperience from './html/experience/AddExperience';
import ExperienceList from './html/experience/ExperienceList';
import AddNominee from './html/nomineee/AddNominee';
import NomineeList from './html/nomineee/NomineeList';
import AddDependent from './html/dependent/AddDependent';
import DependentList from './html/dependent/DependentList';
import AddAddress from './html/address/AddAddress';
import AddressList from './html/address/AddressList';
import UpdateJobTitle from './html/job title/UpdateJobTitle';

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

          <Routes>
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
            <Route path="/Section List" element={<SectionList />} />
            <Route path="/Add Bank info" element={<AddBankInfo />} />
            <Route path="/Bank info List" element={<BankInfoList />} />
            <Route path="/Add Allowance" element={<AddAllowance />} />
            <Route path="/Allowance List" element={<AllowanceList />} />
            <Route path="/Add Loan" element={<AddLoan />} />
            <Route path="/Loan List" element={<LoanList />} />
            <Route path="/Add Job Title" element={<AddJobTitle />} />
            <Route path="/Update Job Title" element={<UpdateJobTitle />} />
            <Route path="/Job Title List" element={<JobTitleList />} />
            <Route path="/Add Overtime" element={<AddOvertime />} />
            <Route path="/Overtime List" element={<OvertimeList />} />
            <Route path="/Add Deduction" element={<AddDeduction />} />
            <Route path="/Deduction List" element={<DeductionList />} />
            <Route path="/Add Leave" element={<AddLeave />} />
            <Route path="/Leave List" element={<LeaveList />} />
            <Route path="/Add Education" element={<AddEducation />} />
            <Route path="/Education List" element={<EducationList />} />
            <Route path="/Add Experience" element={<AddExperience />} />
            <Route path="/Experience List" element={<ExperienceList />} />
            <Route path="/Add Nominee" element={<AddNominee />} />
            <Route path="/Nominee List" element={<NomineeList />} />
            <Route path="/Add Dependent" element={<AddDependent />} />
            <Route path="/Dependent List" element={<DependentList />} />
            <Route path="/Add Address" element={<AddAddress />} />
            <Route path="/Address List" element={<AddressList />} />

            {/* <Login/>
            </Route> */}
          </Routes>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default App;
