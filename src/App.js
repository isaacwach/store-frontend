import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,Nav } from 'react-bootstrap';
import './App.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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
                                <Nav.Link href="StorageDetails">Storage Details</Nav.Link>
                              
                            </Nav>
                </Container>
            </Navbar>
        </div>
            <div className='content'>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                </Switch>
            </div>
      </Router>

    );

}; 


export default App ;