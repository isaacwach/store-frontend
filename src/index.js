import React from 'react';
import ReactDom from 'react-dom/client';


import App from './App';
// import "./App.css";

import "./homepage/home.css";
import "./navbar/navbar.css";
import "./Login/Login.css";
import "./SignUp/SignUp.css";
import "./footer/footer.css"
import "./popup/popup.css"
import "./details/details.css"

import "./transport/transport.css";



import './booking/booking.css';
import './admin/admin.css';

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);

