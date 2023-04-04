import '../App.css';
import React from 'react';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import {Routes,Route,} from 'react-router-dom';
import NavBar from './Navbar';
import Events from './Events';
import Group from './Group';
import Groupjoin from './Groupjoin'
import Members from './Members';
function Dashboard() {
    
  return (
    <div>
      <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "/Member" element = {<Members/>} />
       <Route exact path = "Events" element = {<Events/>} />
       <Route exact path = "/About" element = {<About/>} />
       <Route exact path = "/Contact" element = {<Contact/>} />
       <Route exact path = "/Group" element = {<Group/>} />
       <Route exact path = "/Group-joining" element = {<Groupjoin/>} />
       <Route exact path = "/Members" element = {<Members/>} />

    </Routes>
  </div>                 
    </div>
  );
}

export default Dashboard;