
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        // <footer className="footer"> Footer Copyright test</footer>

        
        <Navbar expand="lg" bg="dark" variant="dark" className="fixed-bottom">
            <Container>
                <Navbar.Brand href="#">Copyright </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Footer;