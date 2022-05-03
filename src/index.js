import React from 'react';
import ReactDom from 'react-dom/client';
import {Provider} from "react-redux"
import store from "./store"


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
root.render(
    <Provider store={store}>
         <App />
        </Provider>
);

// ReactDom.render(
//     <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//     </Provider>
//     ,
//     document.getElementById('root')
//   );

