import React from 'react';
import {
  BrowserRouter as Router,
  Routes , //previous Switch 
  Route,
  Link
} from "react-router-dom";
import Login from '../html/Login';
import LoginVerification from '../html/LoginVerification';
import PasswordReset from '../html/PasswordReset';

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
            <aside>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/verify-login">Verify Login</Link>
                        </li>
                        <li>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                
            </aside>
    );
}

export default LeftSidebar;