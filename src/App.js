import React from 'react';

import {
  Navigate,
  Routes, //previous Switch
  Route,
} from 'react-router-dom';
import LoginVerification from './html/LoginVerification';
import AddEmployee from './html/employee/AddEmployee';
import EmployeeList from './html/employee/EployeeList';

import TopMenuBar from './Template/TopMenuBar';
import LeftSidebar from './Template/LeftSideBar';
import RightSideBar from './Template/RightSideBar';
import Footer from './Template/Footer';
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
import BarChart from './html/charts/BarChart';
import LineChart from './html/charts/LineChart';
import { AddSystem } from './html/menu/AddSystem';
import { AddSubSystem } from './html/menu/AddSubSystem';
import { AddFunction } from './html/menu/AddFunction';

import './App.css';
import OperatorFunction from './html/opfunc/OperatorFunction';
import Profile from './html/profile/Profile';
import { useAuthContext } from './utils/AuthContext';

import { routes } from './AppRoutes';
import { Col, Container, Row } from 'react-bootstrap';
import MonthlySalary from './html/salary/MonthlySalary';
import MonthlySalary2 from './html/salary/MonthlySalary2';

/** protect a single route from unauthenticated access ***/
function ProtectedRoute({ children }) {
  const { user } = useAuthContext();

  if (!user) {
    // Redirect to login or show an error message
    return <div>You need to log in to access this page.</div>;
  }

  return children;
}

/** protect a bunch of route from unauthenticated access.
 * This HOC(higher-order component) can be applied selectively to the routes you want to protect ***/
function AuthProtectedRoute({ element, ...props }) {
  const { user } = useAuthContext();

  if (!user) {
    // Redirect to login or show an error message
    return <Navigate to="/" />;
  }

  return <Route {...props} element={element} />;
}

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
      <Container fluid>
        {/* <div className="Navbar-top">
          <TopMenuBar />
        </div>
        <div className="Sidebar-left">
          <LeftSidebar />
        </div>
        <div className="Sidebar-right">
          <RightSideBar />
        </div> */}

        {/* <div className="Navbar-top">
          <TopMenuBar />
        </div>
        <div className="Sidebar-left">
          <LeftSidebar />
        </div>
        <div className="Sidebar-right">
          <RightSideBar />
        </div> */}
        <Row>
          <Col style={{ padding: '0px' }}>
            <TopMenuBar />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={2} className="side-nav">
            <LeftSidebar />
          </Col>
          <Col md={12} lg={10} className="content">
            <div>
              {/* <h1> Our code will be in this section</h1> */}

              {/* <Routes>
                {routes.map((route, idx) => {
                  return (
                    route.element && (
                      <Route
                        key={idx}
                        path={route.path}
                        element={<route.element />}
                      />
                    )
                  );
                })}
              </Routes> */}
              {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}

              <Routes>
                <Route
                  path="/verify-login/:id"
                  element={<LoginVerification />}
                />
                {/* <Route path="/verify-login" element={<LoginVerification/>}/> */}
                {/* <LoginVerification/>
            </Route> */}
                {/* <Route path="/forgot-password" element={<PasswordReset />} />
            <Route path="/login" element={<Login />} /> */}
                <Route path="/" element={<LoginNoFormik />} />
                <Route path="/profile/:id" element={<Profile />} />
                {/* <Route path="/Add new account" element={<AddEmployee />} /> */}
                <Route path="/Inquire employee" element={<EmployeeList />} />
                <Route path="/Employee details" element={<EmployeeDetails />} />
                <Route
                  path="/Add employee"
                  element={
                    <ProtectedRoute>
                      <AddEmployee />
                    </ProtectedRoute>
                  }
                />
                <Route path="/Add Department" element={<AddDepartment />} />
                <Route path="/Department List" element={<DepartmentList />} />
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
                <Route path="/Monthly Salary" element={<MonthlySalary2 />} />

                <Route
                  path="/Monthly Salary Bar Chart"
                  element={<BarChart />}
                />
                <Route
                  path="/Monthly Salary Line Chart"
                  element={<LineChart />}
                />
                <Route path="/Add System" element={<AddSystem />} />
                <Route path="/Add Sub System" element={<AddSubSystem />} />
                <Route path="/Add Function" element={<AddFunction />} />
                <Route
                  path="/Operator Function"
                  element={<OperatorFunction />}
                />
                {/* <AuthProtectedRoute
              path="/Add Education"
              element={<AddEducation />}
            />
            <AuthProtectedRoute
              path="/Education List"
              element={<EducationList />}
            />
            <AuthProtectedRoute
              path="/Add Experience"
              element={<AddExperience />}
            />
            <AuthProtectedRoute
              path="/Experience List"
              element={<ExperienceList />}
            />
            <AuthProtectedRoute path="/Add Nominee" element={<AddNominee />} />
            <AuthProtectedRoute
              path="/Nominee List"
              element={<NomineeList />}
            />
            <AuthProtectedRoute
              path="/Add Dependent"
              element={<AddDependent />}
            />
            <AuthProtectedRoute
              path="/Dependent List"
              element={<DependentList />}
            />
            <AuthProtectedRoute path="/Add Address" element={<AddAddress />} />
            <AuthProtectedRoute
              path="/Address List"
              element={<AddressList />}
            />
            <AuthProtectedRoute path="/Show Charts" element={<BarChart />} />
            <AuthProtectedRoute
              path="/Show Line Charts"
              element={<LineChart />}
            />
            <AuthProtectedRoute path="/Add System" element={<AddSystem />} />
            <AuthProtectedRoute
              path="/Add Sub System"
              element={<AddSubSystem />}
            />
            <AuthProtectedRoute
              path="/Add Function"
              element={<AddFunction />}
            />
            <AuthProtectedRoute
              path="/Operator Function"
              element={<OperatorFunction />}
            /> */}
                {/* <Login/>
            </Route> */}
              </Routes>
            </div>
          </Col>
          {/* <Col md={12} lg={2}>
            <RightSideBar />
          </Col> */}
        </Row>
        <Row className="footer">
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </LocalizationProvider>
  );
}

export default App;
