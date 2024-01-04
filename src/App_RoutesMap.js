import React from 'react';
import {
  Navigate,
  Routes, //previous Switch
  Route,
} from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import './App.css';

import TopMenuBar from './Template/TopMenuBar';
import LeftSidebar from './Template/LeftSideBar';
import RightSideBar from './Template/RightSideBar';
import Footer from './Template/Footer';

import { useAuthContext } from './utils/AuthContext';
import { routes } from './AppRoutes';
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
            {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
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
