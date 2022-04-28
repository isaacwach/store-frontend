import React from 'react';
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'

const App= () => {
    return (  
        <Router>
        <div className="app">  
            <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Service</Nav.Link>
                                <Nav.Link href="#link">Sign Up</Nav.Link>
                                <Nav.Link href="#link">Login</Nav.Link>
                              
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
      </Router>
        

    );
}


export default App;