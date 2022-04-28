import React from 'react';
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
import Home from './homepage/homepage'
import Footer from './footer/footer'


const App= () => {
    return (    
      <>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Classic Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link"><i className="far fa-user-plus"></i> Sign Up</Nav.Link>
        <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Client</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Employee</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Home/>
<Footer/>
      </>

    );
}


export default App;