import React from 'react';
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';



const App= () => {
    return (  
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
        

    );
}


export default App;