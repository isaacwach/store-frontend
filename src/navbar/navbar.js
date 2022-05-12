import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux"
import {logout} from "../actions/auth";
import {Link} from "react-router-dom";

const NavbarHead = () => {
    // const state=useSelector(state => state.auth)
    const dispatch=useDispatch()
    const auth= useSelector((state)=>state.auth)
    return (
        <>
        {auth.isAuthenticated ?
            <>
             <Navbar bg="light" expand="lg" className="navbar">
            <Container>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU" alt="logo"></img>&nbsp;&nbsp;
            <Navbar.Brand className="logo" href="#home">Classic <span className="logo-span">Store</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="home" to={"/"}>Home</Link>
                    <Link className="details" to={"/details"}>Details</Link>
                    <a href='/'><button onClick={()=>dispatch(logout())} className='btn4 btn-warning'>Logout</button></a>
                </Nav>
            
            </Navbar.Collapse>s
            </Container>
        </Navbar>             
             </>:
             <>
             <Navbar bg="light" expand="lg" className="navbar">
            <Container>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU" alt="logo"></img>&nbsp;&nbsp;
            <Navbar.Brand className="logo" href="#home">Classic <span className="logo-span">Store</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="home" to={"/"}>Home</Link>
                    <Link className="details" to={"/details"}>Details</Link>
                </Nav>
                <a href="/register/button"> <button className="btn3 btn-warning">Signup</button></a>
                <a href="/login"><button className="btn4 btn-warning">Login</button></a>
            
            </Navbar.Collapse>
            </Container>
        </Navbar>
             </>
            
             
            }

        
        </>
    )
}
export default NavbarHead


