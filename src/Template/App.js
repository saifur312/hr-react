// import React from 'react';

// import {
//   BrowserRouter as Router,
//   Routes , //previous Switch 
//   Route,
//   Link
// } from "react-router-dom";
// import Login from '../html/Login';
// import Login_NoFormik from '../html/LoginNoFormik';
// import LoginVerification from '../html/LoginVerification';
// import PasswordReset from '../html/PasswordReset';
// import Employee from '../html/employee/Employee';
// import AddEmployee from '../html/employee/AddEmployee';
// import EmployeeList from '../html/employee/EployeeList';
// import UpdateEmployee from '../html/employee/UpdateEmployee';

// import TopMenuBar from './TopMenuBar';
// import LeftSidebar from './LeftSideBar';
// import RightSideBar from './RightSideBar';
// import Footer from './Footer';
// import './App.css';




// const App = () => {

//     return (
//         <div className="Body">
//             <div className="Navbar-top">
//                 <TopMenuBar />
//             </div>
//             <div className="Sidebar-left">
//                 <LeftSidebar />
//             </div>
//             <div className="Sidebar-right">
//                 {/* <RightSideBar /> */}
//             </div>
//             <div className="Container">
//                 {/* <h1> Our code will be in this section</h1> */}
//                 <Routes >
//                     <Route path="/verify-login/:id" element={<LoginVerification/>}/>
//                     {/* <Route path="/verify-login" element={<LoginVerification/>}/> */}
//                         {/* <LoginVerification/>
//                     </Route> */}
//                     <Route path="/forgot-password" element={<PasswordReset/>} /> 
//                     <Route path="/login" element={<Login/>} />
//                     <Route path="/" element={<Login_NoFormik/>} />
//                     <Route path="/profile/:id" element={<Employee/>} />
//                     <Route path="/Add new account" element={<AddEmployee/>} />
//                     <Route path="/Inquire employee" element={<EmployeeList/>} />
//                     <Route path="/Add new employee" element={<AddEmployee/>} />
//                     <Route path="/Update account" element={<UpdateEmployee/>} />
                    
//                         {/* <Login/>
//                     </Route> */}
//                 </Routes >
//             </div>
//             <div className="Footer">
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default App;
