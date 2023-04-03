import '../App.css';
import React from 'react';
import {Routes,Route,} from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Dashboard from './Dashboard';
import ForgotenPassword from './ForgotenPassword'
import NavBar from './images/NavBar';
import  Events from './Events'
import Authenticate from './Aunthenticate';
import Member from  './Group'
import About from './About'
import Contact from './Contact';
import  SignUp from  './SignUp'
import Login from './Login'
function App() {
    
  return (
    <div  className = "cover"  >
      <div className = "App">
      <Routes>
       <Route exact path = "/" element = {<Authenticate/>} />
       <Route exact path = "/Login" element = {<Login/>} />
       <Route exact path = "SignUp" element = {<SignUp/>} />
       <Route exact path = "Dashboard" element = {<Dashboard/>} />
       <Route exact path = "ForgotenPassword" element = {<ForgotenPassword/>} />
       <Route exact path = "/Events" element = {<Events/>} />
       <Route exact path = "/Members" element = {<Member/>} />
       <Route exact path = "/About" element = {<About/>} />
       <Route exact path = "/Contact" element = {<Contact/>} />
    </Routes> 
  
  </div>                 
    </div>
  );
}

export default App;