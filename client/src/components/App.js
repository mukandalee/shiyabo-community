import '../App.css';
import React from 'react';
import Home from './Home';
import {Routes,Route,} from 'react-router-dom';
import NavBar from './images/NavBar';
import Events from './Events';
import  SignUp from  './SignUp'
import Login from './Login'
import Member from './Member';
import { useState } from 'react';
function App() {
  cons [currentFom , setCurrentFom] =useState('Login')
    
  return (
    <div  className = "cover"  >
      <div className = "App">
        <NavBar/>
        currentFom=== "Login"? <Login/> :<SignUp/>
      {/* <Routes>
       <Route exact path = "/" element = {<Login/>} />
       <Route exact path = "SignUp" element = {<SignUp/>} />
    </Routes>  */}
    {/* <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route exact path = "Members" element = {<Member/>} />
       <Route exact path = "Events" element = {<Events/>} />
    </Routes> */}
  </div>                 
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,        // instead of "Switch"
//   Route,
// } from "react-router-dom";
// import SignUp from "./SignUp";
// import Login from "./Login";
// import NavBar from "./images/NavBar";
// import Home from "./images/Home";

// function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

//   return (
//     <>
//       <NavBar user={user} setUser={setUser} />
//       <main>
      
//         {user ? (
//           <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} user={user} />
//           </Routes>
//         </BrowserRouter>
//         ) : (
//           <BrowserRouter>
//           <Routes>
//             <Route path="/signup">
//               <SignUp setUser={setUser} />
//             </Route>
//             <Route path="/login">
//               <Login setUser={setUser} />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//             </Routes>
//           </BrowserRouter>
//         )}
//       </main>
//     </>
//   );
// }

// export default App;


