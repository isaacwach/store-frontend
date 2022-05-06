import React from 'react';
import NavbarHead from './navbar/navbar.js';
import Home from './homepage/homepage.js';
import Admin from './admin/admin.js';
import Booking from './booking/booking.js';
import GetBookings from './requests/request.js';
<<<<<<< HEAD
import ClientSignup from './SignUp/ClientSignup.js';
import RegisterButton from "./components/RegisterButton.js"
import Login from './Login/Login.js';
import Footer from './footer/footer.js'
import Details from './details/details.js';
import {FPrivateRoute} from "./private/PrivateRoute"

=======
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
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab
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
<<<<<<< HEAD
<Route path="/registerbutton">
  <RegisterButton/>
</Route>
<Route path='details' >
<Details />
</Route>
</Route>
<Route path='/booking'>
=======
    </Route>

<Route path='/details' >
<Storage />
</Route> 
<Route path='/booking/order/:id'>
  <Order />
</Route> 

<Route exact path='/booking'>
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab

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
<<<<<<< HEAD
<FPrivateRoute path="/" >
  <Home/>
</FPrivateRoute>
=======
<Route path='/admin/signup'>
  <AdminSignup /> 
</Route>
<Route path='/register/button'>
  <RegisterButton />
</Route>
<Route path ='/admin'>
  <APrivateRoute />
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab

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
