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

import SignUp from './SignUp/SignUp';
import Order from './bookingfiles/order.js';
// import LoginAdmin from './Login/Login.js';
import LoginAdmin from './LoginAdmin/LoginAdmin.js';
import Footer from './footer/footer.js'
// import Storage from './details/details.js';
import AdminSignup from './components/AdminSignup';
import RegisterButton from './components/RegisterButton.js';
// import AdminSignup from './AdminSignup/AdminSignup';
import { APrivateRoute } from './private/PrivateRoute.js';
import { CPrivateRoute } from './private/PrivateRoute.js';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Storage from './details/details.js';


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App= () => {

  return (
      <>
    
<NavbarHead />
<Router>
  <Switch>

    <Route exact path='/'>
<Home />
</Route>
<Route path="/registerbutton">
  <RegisterButton/>
</Route>
<Route path='/booking'>
    </Route>

<Route path='/details' >
<Storage />
</Route> 
<Route path='/booking/order/:id'>
  <Order />
</Route> 

<Route exact path='/booking'>

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
<Route path="/signup">
  <ClientSignup/>
</Route>
<Route path="/registerbutton">
  <RegisterButton/>
</Route>
<FPrivateRoute path="/" >
  <Home/>
</FPrivateRoute>
<Route path='/admin/signup'>
  <AdminSignup /> 
</Route>
<Route path='/register/button'>
  <RegisterButton />
</Route>
<Route path ='/admin'>
  <APrivateRoute />

</Route>
<Route path='/' >
<CPrivateRoute />
</Route>
</Switch>  
</Router>
<Footer />

</>
  )

}

export default App ;
