import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import {useSelector, useDispatch} from "react-redux"
// import {logout} from "../actions/auth"

const NavbarHead = () => {
//     const state=useSelector(state => state.auth)
//     const dispatch=useDispatch()
//     const authLink=(
//         <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
//             <li className='nav-item mr-2'>
//                  <button onClick={()=>dispatch(logout())} className='nav-link btn btn-danger'>Logout</button>
//             </li>
//         </ul>
//  )
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand className="logo" href="#home">Classic Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link className="details" href="#home">Details</Nav.Link>
                    <Nav.Link className="home" href="/">Home</Nav.Link>
                    <a href="/register/button"> <button className="btn3">Signup</button></a>
                    <a href="/login"><button className="btn4">Login</button></a>
                    
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarHead