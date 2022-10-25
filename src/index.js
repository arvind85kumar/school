import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import Header from  './components/Header';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Addproduct from './components/Addproduct';
import PrivateRoute from './components/PrivateComponet';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Header/>
 <Routes>
 <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Registration/>}/>
      <Route path="/signin" element={<Login/>}/>
     <Route element={<PrivateRoute/>}>
      <Route path="/add-product" element={<Addproduct/>}/>
      </Route>
      <Route path="/contact" element={<Contact/>} />
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
