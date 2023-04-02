import '../App.css';
import React from 'react';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import {Routes,Route,} from 'react-router-dom';
import NavBar from './Navbar';
import Events from './Events';
import Member from './Member';
function Dashboard() {
    
  return (
    <div>
      <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "/Member" element = {<Member/>} />
       <Route exact path = "Events" element = {<Events/>} />
       <Route exact path = "/About" element = {<About/>} />
       <Route exact path = "/Contact" element = {<Contact/>} />
    </Routes>
  </div>                 
    </div>
  );
}

export default Dashboard;