import React from 'react';
import ReactDom from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import {Provider} from "react-redux"
import store from "./store"
=======
import {Provider} from "react-redux"
import store from "./store"

>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab

import App from './App';
 
// import "./App.css";

import "./homepage/home.css";
import "./navbar/navbar.css";
<<<<<<< HEAD
import "./Login/Login.css";
import "./SignUp/ClientSignup.css";
=======
import "./LoginAdmin/Login.css";

import "./SignUp/SignUp.css";
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab
import "./footer/footer.css"
import "./popup/popup.css"
import "./details/details.css"

import "./transport/transport.css";



import './booking/booking.css';
import './admin/admin.css';
import './components/RegisterButton.css'


const root= ReactDom.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <Provider store={store}>
       <App />
      </Provider>
);
=======
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
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab

