import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
function SignUp({ onLogin, props}) {
    const [adminName, setAdminName] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const navigate = useNavigate();
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch("/admins", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //      adminName,
    //      adminEmail,
    //      phoneNumber,
    //      password,
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then(onLogin);
    // }
    // Function to handle registration form submission
  // Function to handle registration form submission
  const handleRegister = async (event) => {
    event.preventDefault(); // prevent default form submission behavior
    try {
      const response = await fetch("/admins", {
        // Update fetch URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: adminName,
          adminEmail: adminEmail,
          phoneNumber :phoneNumber,
          password_confirmation: password_confirmation,
          password: password,
        }),
      });

      if (response.ok) {
        navigate("/login");
      }

      // TODO: Handle successful registration
    } catch (error) {
      // If an error occurs during registration, set the error state variable
      setError(error.message);
    }
  };
  // ion to handle input changes and add/remove "has-value" class to input boxes
  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      // If the input has a value, add "has-value" class
      input.classList.add("has-value");
    } else {
      // If the input does not have a value, remove "has-value" class
      input.classList.remove("has-value");
    }
  };
  
    return (<div className="authenticate"> 
        <div className="home">  
        <form onSubmit={handleRegister}>
        <h1 > Register</h1>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your name"
          value={adminName}
          onChange={(e) => {
            setAdminName(e.target.value); // Update state variable for first name
            handleInputChange(e);
          }}
          required
        />
         <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={adminEmail}
          onChange={(e) => {
            setAdminEmail(e.target.value); // Update state variable for first name
            handleInputChange(e);
          }}
          required
        />
         <label htmlFor="phoneNumber">phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value); // Update state variable for first name
            handleInputChange(e);
          }}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); // Update state variable for password
              handleInputChange(e);
            }}
            required
          />
          <label htmlFor="password">Confirm Password:</label>
        <div className="inputBox">
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value); // Update state variable for last name
              handleInputChange(e);
            }}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <div>{error}</div>
      </form>
      <Nav.Link href="/Login">
      <button  className ="link-btn" onClick={() =>props.onFomSwitch("Login")}> Already have an account? Login Here</button>
      </Nav.Link>
        </div>
      
      </div>
    
    );
  }
  export default SignUp;

