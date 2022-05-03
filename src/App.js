import React from 'react';
import NavbarHead from './navbar/navbar.js';
import Home from './homepage/homepage.js';
import Admin from './admin/admin.js';
import Booking from './booking/booking.js';
import GetBookings from './requests/request.js';
import SignUp from './SignUp/SignUp';
// import LoginAdmin from './Login/Login.js';
import LoginAdmin from './LoginAdmin/LoginAdmin.js';
import Footer from './footer/footer.js'
import Details from './details/details.js';
import AdminSignup from './components/AdminSignup';
import RegisterButton from './components/RegisterButton.js';
// import AdminSignup from './AdminSignup/AdminSignup';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App= () => {

  return (
      <>
    
<NavbarHead />
<Router>
  <Switch>
    <Route exact path='/'>
<Home />
<Route path='details' >
<Details />
</Route>
</Route>
<Route path='/booking'>

<Booking />
</ Route>
<Route exact path='/admin'>
  <Admin />
  </Route>
<Route path='/sbooking'>
  <GetBookings />
</Route>
<Route path='/login'>
  <LoginAdmin />
</Route>
<Route path='/signup'>
  <SignUp />
</Route>
<Route path='/admin/signup'>
  <AdminSignup /> 
</Route>
<Route path='/register/button'>
  <RegisterButton />
</Route>
</Switch>  
</Router>
<Footer />

</>
  )

}

export default App ;
