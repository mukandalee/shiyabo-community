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
import Member from  './Member'
import About from './About'
import Contacts from './Contact';
import  SignUp from  './SignUp'
import Login from './Login'
function App() {
    
  return (
    <div  className = "cover"  >
      <div className = "App">
      <Routes>
       <Route exact path = "/" element = {<Authenticate/>} />
       <Route exact path = "SignUp" element = {<SignUp/>} />
       <Route exact path = "Dashboard" element = {<Dashboard/>} />
       <Route exact path = "ForgotenPassword" element = {<ForgotenPassword/>} />
       <Route exact path = "/Events" element = {<Events/>} />
       <Route exact path = "/Members" element = {<Member/>} />
    </Routes> 
  
  </div>                 
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import axios from 'axios'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from './Dashboard';
// import ForgotenPassword from './ForgotenPassword'
// import NavBar from './images/NavBar';
// import  SignUp from  './SignUp'
// import Login from './Login'
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//      };
//   }
// componentDidMount() {
//   this.loginStatus()
// }loginStatus = () => {
//     axios.get('/logged_in', 
//     {withCredentials: true})    
// .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   }
//   handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//   }
//   handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         <NavBar/>
//          <BrowserRouter>
//          <Routes>
//         <Route exact path = "/" element = {<Login/>} />
//         <Route exact path = "SignUp" element = {<SignUp/>} />
//         <Route exact path = "Dashboard" element = {<Dashboard/>} />
//         <Route exact path = "ForgotenPassword" element = {<ForgotenPassword/>} />
//            </Routes> 
//          </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;


// <Switch>

// {/* <Route exact path='/' component={}/>
// <Route exact path='/login' component={}/>
// <Route exact path='/signup' component={}/> */}
// </Switch>