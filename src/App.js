import React from 'react';

import SignUp from './SignUp/SignUp';
import Login from './Login/Login.js';

import "./App.css"
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';


const App= () => {
    return (  
      <Router>
            <div className='content'>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                </Switch>
            </div>
      </Router>

    );

}; 


export default App ;
    return (    
      <>
    
<NavbarHead />
<Router>
  <Switch>
    <Route exact path='/'>
<Home />
<Footer />
<Details />

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

    )




export default App ;
