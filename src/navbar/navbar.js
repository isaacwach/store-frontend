import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarHead = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar">
            <Container>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU"></img>
            <Navbar.Brand className="logo" href="#home">Classic <span className="logo-span">Store</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">


                    <Nav.Link className="home" href="/">Home</Nav.Link>
                    <Nav.Link className="details" href="/details">Details</Nav.Link>
                    <a href="/signup"> <button className="btn3">Signup</button></a>
                    <a href="/login"><button className="btn4">Login</button></a>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarHead


