import React from 'react';
import Home from './homepage/homepage'
import Footer from './footer/footer'
import NavbarHead from './navbar/navbar'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Booking from "./booking/booking.js";
import Admin from "./admin/admin.js";
import GetBookings from './requests/request';


const App= () => {
    return (    
      <>
    
<NavbarHead />
<Router>
  <Switch>
    <Route exact path='/'>
<Home />
</Route>
<Route path='/booking'>

<Booking />
</ Route>
<Route path='/admin'>
  <Admin />
  </Route>
<Route path='/sbooking'>
  <GetBookings />
</Route>
</Switch>
</Router>
<Footer />


      </>
        
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Login from './components/login.component';
// import SignUp from './components/signup.component';


//         <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             {/* <Route path="storagedetails" element={<StorageDetails />} /> */}
//           </Routes>
//         </div>
//       </div>
//       </Router>

    );

}; 


export default App ;