import React from 'react';
import NavbarHead from './navbar/navbar.js';
import Home from './homepage/homepage.js';
import Admin from './admin/admin.js';
import Booking from './booking/booking.js';
import GetBookings from './requests/request.js';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login.js';
import Footer from './footer/footer.js'
import Storage from './details/details.js';

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
</Route>
<Route path='/details' >
<Storage />
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
<Route path='/signup'>
  <SignUp />
</Route>

</Switch>
</Router>
<Footer />

</>
  )

}

export default App ;
