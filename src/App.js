import React from 'react';
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Booking from "./booking/booking.js";
import Admin from "./admin/admin.js";


const App= () => {
    return ( 
        <> 
        <div className="App">

        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Classic store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin </Link>
        <Link to="/booking">book</Link>

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
  {/* <Router>
    <Switch>
      <Route exact path="/booking">
      <Booking />
      </Route>
      <Route path="/admin">
      <Admin />
      </Route>
</Switch>
</Router> */}
</div>
</>

    );
}


export default App;