import React from 'react';
import Clock from './Clock';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';

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
                <Nav >
                    <Nav.Link href="#">Sign On </Nav.Link>
                </Nav>
                <Nav >
                    <Nav.Link href="#"><Clock /> </Nav.Link>
                </Nav>
                {/* <Row lg={12}>
                    <Col md={4}> Gen-001 </Col>
                    
                    <Col md={4}> Sign On </Col>
                    
                    <Col md={4}><Clock /> </Col>
                </Row> */}
            </Container>
        </Navbar>


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