import React from 'react';
import Clock from './Clock';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';


import './../App.css';

const TopMenuBar = (props) => {
    // const currentDateTime = React.useState({
    //      new Date().toLocaleString(),
    //   })
    // constructor(props) {
    //     super(props);
    //     this.state = {date: new Date()};
    // }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Gen-001</Navbar.Brand>
                {/* <Nav >
                </Nav> */}
                <Nav className="me-auto">
                    <Nav.Link href="#">Sign On </Nav.Link>
                    <Nav.Link href="#"><Clock/> </Nav.Link>
                </Nav>
                {/* <Row lg={12}>
                    <Col md={4}> Gen-001 </Col>
                    
                    <Col md={4}> Sign On </Col>
                    
                    <Col md={4}><Clock /> </Col>
                </Row> */}
            </Container>
        </Navbar>

        
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
}

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
// }

export default TopMenuBar;