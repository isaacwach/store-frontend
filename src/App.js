import React from 'react';
import Home from './homepage/homepage'
import Footer from './footer/footer'
import NavbarHead from './navbar/navbar'
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        

    );
}


export default App;