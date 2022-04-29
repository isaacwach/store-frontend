import React from 'react';
import Home from './homepage/homepage'
import Footer from './footer/footer'
import NavbarHead from './navbar/navbar'
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
import "./App.css"
import Booking from "./booking/booking.js";
import Admin from "./admin/admin.js";


const App= () => {
    return (    
      <>
<NavbarHead />
<Home />
<Footer />
      </>

const App= () => {
    return ( 
        <> 
        <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>

        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Booking />
<Admin />
</div>
</>
    );
}


export default App;