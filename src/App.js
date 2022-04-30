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
        

    );
}


export default App;