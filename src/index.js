import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import store from "./store"

import App from './App';
// import "./App.css";

import "./homepage/home.css";
import "./navbar/navbar.css";
import "./Login/Login.css";
import "./SignUp/ClientSignup.css";
import "./footer/footer.css"
import "./popup/popup.css"
import "./details/details.css"

import "./transport/transport.css";



import './booking/booking.css';
import './admin/admin.css';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);

