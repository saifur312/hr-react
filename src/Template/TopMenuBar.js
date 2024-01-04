import React from 'react';
import Clock from './Clock';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { useTitle } from './../utils/TitleContext';

import './../App.css';
import { useAuthContext } from '../utils/AuthContext';
import { Link } from 'react-router-dom';

const TopMenuBar = () => {
  const { user, logout } = useAuthContext();
  //const { title } = useTitle();

  // const currentDateTime = React.useState({
  //      new Date().toLocaleString(),
  //   })
  // constructor(props) {
  //     super(props);
  //     this.state = {date: new Date()};
  // }

  return (
    <div className="top-nav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      {/* {user && (
        <a href="/" onClick={logout}>
          Logout
        </a>
      )} */}
      {user ? (
        <a href="/" onClick={logout}>
          Logout
        </a>
      ) : (
        // <Link to="/" onClick={logout}>
        //   Logout
        // </Link>
        <a href="/">Login</a>
        // <Link to="/">Login</Link>
      )}
    </div>

    // <Navbar expand="lg" >
    //   <Container>
    //     {/* <Navbar.Brand href="#">{title || 'Gen-001'}</Navbar.Brand> */}
    //     <Navbar.Brand href="#">
    //       {user ? `Welcome, ${user.userId}` : 'Welcome'}
    //     </Navbar.Brand>
    //     {/* <Nav >
    //             </Nav> */}
    //     <Nav className="me-auto">
    //       <Nav.Link href="#">
    //         {user && (
    //           <Nav.Link href="#" onClick={logout}>
    //             Logout
    //           </Nav.Link>
    //         )}
    //       </Nav.Link>
    //       <Nav.Link href="#">
    //         <Clock />
    //       </Nav.Link>
    //     </Nav>
    //     {/* <Row lg={12}>
    //                 <Col md={4}> Gen-001 </Col>

    //                 <Col md={4}> Sign On </Col>

    //                 <Col md={4}><Clock /> </Col>
    //             </Row> */}
    //   </Container>
    // </Navbar>

    //     <Navbar expand="lg" className="bg-body-tertiary">
    //     <Container>
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#link">Link</Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>

    // <nav className="Navbar-top">
    //     <div style={{color: "#fff", textAlign: "left"}}> Gen-001 </div>
    //     <div style={{textAlign: "center"}}> Sign On </div>
    //     <div style={{textAlign: "right"}}> <Clock /> </div>
    // </nav>
  );
};

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
// }

export default TopMenuBar;
