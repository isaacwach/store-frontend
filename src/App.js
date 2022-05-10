import React from 'react';
import NavbarHead from './navbar/navbar.js';
import Home from './homepage/homepage.js';
import Admin from './admin/admin.js';
import Booking from './booking/booking.js';
import GetBookings from './requests/request.js';
import SignUp from './SignUp/SignUp';
import Order from './bookingfiles/order.js';
import LoginAdmin from './LoginAdmin/LoginAdmin.js';
import Footer from './footer/footer.js'
// import Storage from './details/details.js';
import AdminSignup from './components/AdminSignup';
import RegisterButton from './components/RegisterButton.js';
import DeleteUnits from './admin/AdminDelete.js';
// import AdminSignup from './AdminSignup/AdminSignup';
import { APrivateRoute } from './private/PrivateRoute.js';
import { CPrivateRoute } from './private/PrivateRoute.js';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Storage from './details/details.js';


const App= () => {

  return (
      <>
    
<NavbarHead />
<Router>
  <Switch>

    <Route exact path='/'>
<Home />
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
<Route path='/signup'>
  <SignUp />
</Route>
<Route path='/admin/signup'>
  <AdminSignup /> 
</Route>
<Route path='/register/button'>
  <RegisterButton />
</Route>
<Route path ='/admin/delete/:id'>

  <DeleteUnits />
</Route>

</Switch>  
</Router>
<Footer />

</>
  )

}

export default App ;
