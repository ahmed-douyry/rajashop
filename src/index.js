import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Form } from 'react-router-dom';
import Menu from './pages/Menu';
// import Tenu1 from './article/1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Tenu2 from './article/2';
import ProductDetails from './pages/ProductDetails';
import Footer from './pages/Footer';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
