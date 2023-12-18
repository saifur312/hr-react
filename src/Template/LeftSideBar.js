import React from 'react';
import { Link } from 'react-router-dom';

import './../App.css';

const LeftSidebar = () => {
  return (
    // <aside>
    //     Left Sidebar
    //     <ul>
    //         <li> <a href="#"> Test 1 </a> </li>
    //         <li> <a href="#"> Test 2 </a> </li>
    //         <li> <a href="#"> Test 3 </a> </li>
    //         <li> <a href="#"> Test 4 </a> </li>
    //         <li> <a href="#"> Test 5 </a> </li>
    //     </ul>
    // </aside>
    <aside className="sidebar-left">
      <nav>
        <ul>
          <li>
            <Link to="/AddSystem">Add System</Link>
          </li>
          <li>
            <Link to="/AddSubSystem">Add Sub System</Link>
          </li>
          <li>
            <Link to="/AddFunction">Add Fucntion</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/verify-login">Verify Login</Link>
          </li>
          <li>
            <Link to="/forgot-password">Forgot Password</Link>
          </li>
          <li>
            {' '}
            <Link to="/Add Job Title">Add Job Title </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Job Title List">Job Title List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Add Address">Add Address </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Address List">Address List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Add Dependent">Add Dependent </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Dependent List">Dependent List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Add Nominee">Add Nominee </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Nominee List">Nominee List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Add Experience">Add Experience </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Experience List">Experience List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Add Education">Add Education </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Education List">Education List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Add Leave">Add Leave </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Leave List">Leave List </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Show Charts">Show Charts </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/Show Line Charts">Show Line Charts </Link>{' '}
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
    </aside>
  );
};

export default LeftSidebar;
