import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../utils/AppContext';

import './../App.css';
import { Navbar } from 'react-bootstrap';

const LeftSidebar = () => {
  const { sidebarData } = useAppContext();
  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      //topRef.current.scrollIntoView({ behavior: 'smooth' });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    // <aside>
    //   <a href="/AddSystem">Add System</a>

    //   <a href="/AddSubSystem">Add Sub System</a>

    //   <a href="/AddFunction">Add Fucntion</a>

    //   <a href="/Operator Function">Operator Function</a>

    //   <a href="/">Login</a>

    //   <a href="/verify-login">Verify Login</a>

    //   <a href="/forgot-password">Forgot Password</a>

    //   <a href="/Add Job Title">Add Job Title </a>

    //   <a href="/Job Title List">Job Title List </a>

    //   <a href="/Add Address">Add Address </a>

    //   <a href="/Address List">Address List </a>

    //   <a href="/Add Dependent">Add Dependent </a>

    //   <a href="/Dependent List">Dependent List </a>

    //   <a href="/Add Nominee">Add Nominee </a>

    //   <a href="/Nominee List">Nominee List </a>

    //   <a href="/Add Experience">Add Experience </a>

    //   <a href="/Experience List">Experience List </a>

    //   <a href="/Add Education">Add Education </a>

    //   <a href="/Education List">Education List </a>

    //   <a href="/Add Leave">Add Leave </a>

    //   <a href="/Leave List">Leave List </a>

    //   <a href="/Show Charts">Show Charts </a>

    //   <a href="/Show Line Charts">Show Line Charts </a>

    //   <a href="/Monthly Salary">Monthly Salary </a>
    // </aside>

    // <aside>
    //   <ul>
    //     {sidebarData &&
    //       sidebarData.map((fun) => (
    //         <li>
    //           <Link to={'/' + fun}>{fun}</Link>
    //         </li>
    //       ))}
    //   </ul>
    //   {/* A <Switch> looks through its children <Route>s and
    //             renders the first one that matches the current URL. */}
    // </aside>

    <aside>
      {sidebarData &&
        sidebarData.map((fun) => (
          //  <a href={'/' + fun}>{fun}</a>
          <Link
            key={fun.functionName}
            to={'/' + fun.route}
            onClick={scrollToTop}
          >
            {fun.functionName}
          </Link>
        ))}
      <Link to="Monthly Salary" onClick={scrollToTop}>
        MonthlySalary
      </Link>
      <div ref={topRef}></div>
    </aside>
  );
};

export default LeftSidebar;
