import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App';
// import './booking/booking.css';
import './admin/admin.css';

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);