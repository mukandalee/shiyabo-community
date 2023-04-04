import '../App.css';
import React from 'react';
import {Routes,Route,} from 'react-router-dom';
import Dashboard from './Dashboard';
import Members from './Members'
import ForgotenPassword from './ForgotenPassword'
import  Events from './Events'
import Authenticate from './Aunthenticate';
import Group from  './Group'
import About from './About'
import Joing from './Groupjoin';
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
       <Route exact path = "Group" element = {<Group/>} />
       <Route exact path = "/Members" element = {<Members/>} />
       <Route exact path = "Dashboard" element = {<Dashboard/>} />
       <Route exact path = "ForgotenPassword" element = {<ForgotenPassword/>} />
       <Route exact path = "/Events" element = {<Events/>} />
       <Route exact path = "/About" element = {<About/>} />
       <Route exact path = "/Join" element = {<Joing/>} />
       <Route exact path = "/Contact" element = {<Contact/>} />
    </Routes> 
  
  </div>                 
    </div>
  );
}

export default App;