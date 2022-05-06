import React from 'react';
import NavbarHead from './navbar/navbar.js';
import Home from './homepage/homepage.js';
import Admin from './admin/admin.js';
import Booking from './booking/booking.js';
import GetBookings from './requests/request.js';
import ClientSignup from './SignUp/ClientSignup.js';
import RegisterButton from "./components/RegisterButton.js"
import Login from './Login/Login.js';
import Footer from './footer/footer.js'
import Details from './details/details.js';
import {FPrivateRoute} from "./private/PrivateRoute"

import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App= () => {

  return (
      <>
    
<NavbarHead />
<Router>
  <Switch>
    <Route exact path='/'>
<Home />
<Route path="/registerbutton">
  <RegisterButton/>
</Route>
<Route path='details' >
<Details />
</Route>
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
<Route path='/login'>
  <Login />
</Route>
<Route path="/signup">
  <ClientSignup/>
</Route>
<Route path="/registerbutton">
  <RegisterButton/>
</Route>
<FPrivateRoute path="/" >
  <Home/>
</FPrivateRoute>

</Switch>
</Router>
<Footer />

</>
  )

}

export default App ;
