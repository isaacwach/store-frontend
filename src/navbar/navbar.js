import React,{Fragment} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../actions/auth"

const NavbarHead = () => {
    const state=useSelector(state => state.auth)
    const dispatch=useDispatch()
const authLink=(
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand className="logo" href="#home">Classic Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
            <li><Nav.Link className="details" href="#home">Details</Nav.Link></li>
            <li> <Nav.Link className="home" href="/">Home</Nav.Link></li>
            <li>  <a href="/register/button"> <button className="btn3">Signup</button></a></li>
            <li> <a href="/login"><button className="btn4">Login</button></a></li>   
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
            
            <li className='nav-item mr-2'>
                 <button onClick={()=>dispatch(logout())} className='nav-link btn btn-danger'>Logout</button>
            </li>
        </ul>
 )
const publicLink=(
    <ul>
        <Navbar bg="light" expand="lg">
        <Container>

        <Navbar.Brand className="logo" href="#home">Classic Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
            <li><Nav.Link className="details" href="#home">Details</Nav.Link></li>
            <li> <Nav.Link className="home" href="/">Home</Nav.Link></li>
            <li>  <a href="/register/button"> <button className="btn3">Signup</button></a></li>
            <li> <a href="/login"><button className="btn4">Login</button></a></li>   
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </ul>
       
    )
return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container-fluid">
           {/* <a className="navbar-brand" href="#">Navbar</a> */}
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

           <span className="navbar-toggler-icon"></span>
           </button>
           <div className=" navbar" id="navbarSupportedContent">
                {state.isAuthenticated ? authLink : publicLink}
           </div>
       </div>
   </nav>
   </Fragment>
    )
}
export default NavbarHead