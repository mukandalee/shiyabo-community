import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {useNavigate  } from 'react-router-dom'
function Login({ setUser,props }) {
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

   const handleLogin = async (event) => {
    event.preventDefault(); // Prevents form from submitting
    try {
      const response = await fetch("/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: adminName,
          password: password,
        }),
      });

      if (response.ok) {
        navigate("/Dashboard");
      }

      // TODO: Handle successful login
    } catch (error) {
      setError(error.message); // Sets error message if an error occurs
    }
  };

  // Function to handle input changes and add/remove CSS class accordingly
  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      input.classList.add("has-value"); // Adds class if input has value
    } else {
      input.classList.remove("has-value"); // Removes class if input has no value
    }
  };

  return (
    <div className="" >
      <div  className="home"> 
      <form onSubmit={handleLogin}>
        <h1>Login</h1>


        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your name"
          autoComplete="off"
          value={adminName}
          onChange={(e) => {
            setAdminName(e.target.value);
            handleInputChange(e);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            handleInputChange(e);
          }}
            required
        />
          <div>{error}</div>
        <button type="submit">Login</button>
      </form>
      <Nav.Link  href="/SignUp">
      <button className ="link-btn" onClick={() =>props.onFomSwitch("SignUp")}> Don't have an account ? Register Here</button>
      </Nav.Link>
      <Nav.Link  href="/forgotenPassword">
      <button className ="link-btn" > forgoten password? reset</button>
      </Nav.Link>
      </div>
     
    </div>
  );
}

export default Login;

{/* <div>
//             go to <Link to='/Dashboard'>Dashboard</Link>
//           </div> */}


