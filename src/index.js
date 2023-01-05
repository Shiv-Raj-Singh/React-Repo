import React from 'react';
import ReactDOM from 'react-dom/client';
import ToUpperCase from './ClickEvent/FormByFunc.js';

import FormCompo from './ClickEvent/onClickEvent.js';
import './index.css';
import NavbarComponent from './Navbar.js';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <NavbarComponent/>
    {/* <NavbarComponent logo ="MANGAL" link1 = "ABC" link2 = "XYZ" link3 = "PQR"/> */}
    {/* <ToUpperCase/> */}
    <FormCompo/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
