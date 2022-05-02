import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import './App.css';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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