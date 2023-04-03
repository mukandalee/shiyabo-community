import React from "react";
import Login from "./Login";
import NavBar from "./images/NavBar";
import { Route,Routes } from "react-router-dom";
import SignUp from "./SignUp";
import ForgotenPassword from "./ForgotenPassword";
function Authenticate (){
    return(<div  >
        
    <NavBar/>
    <div  className="home"> 
    <Routes>
    <Route exact path = "/" element = {<Login/>} />
    <Route exact path = "SignUp" element = {<SignUp/>} />
    <Route exact path = "ForgotenPassword" element = {<ForgotenPassword/>} />
    </Routes>


      </div>
    

    </div>);
}
export default Authenticate;