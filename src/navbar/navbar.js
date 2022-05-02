import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarHead = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand className="logo" href="#home">Classic Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link className="home" href="#home">Home</Nav.Link>
                    <Nav.Link className="details" href="#home">Details</Nav.Link>
                

                    <Nav.Link className="home" href="/">Home</Nav.Link>
                    <a href="/signup"> <button className="btn3">Signup</button></a>
                    <a href="/login"><button className="btn4">Login</button></a>

                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarHead