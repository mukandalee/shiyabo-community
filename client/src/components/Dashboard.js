import '../App.css';
import React from 'react';
import Home from './Home';
import {Routes,Route,} from 'react-router-dom';
import NavBar from './Navbar';
import Events from './Events';
import Contributions from './Contributions';
function Dashboard() {
    
  return (
    <div>
      <div className = "App">
    <NavBar />
    <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "Contributions" element = {<Contributions/>} />
       <Route exact path = "Events" element = {<Events/>} />
    </Routes>
  </div>             
      <Contributions />       
    </div>
  );
}

export default Dashboard;