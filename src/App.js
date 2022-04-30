import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';

const App= () => {
    return (  
        <Router>
        <div className="app">  
            <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav"/>
                            <Nav>
                                <Nav.Link href="home">Home</Nav.Link>
                                <Nav.Link href="Service">Service</Nav.Link>
                                <Nav.Link href="Signup">Sign Up</Nav.Link>
                                <Nav.Link href="login">Login</Nav.Link>
                                <Nav.Link href="login">Storage Details</Nav.Link>
                              
                            </Nav>
                </Container>
            </Navbar>
        </div>
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="storagedetails" element={<StorageDetails />} /> */}
          </Routes>
        </div>
      </div>
      </Router>

    );

}; 


export default App ;