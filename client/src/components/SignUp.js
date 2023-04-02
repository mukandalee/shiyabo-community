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
    
    );
  }
  export default SignUp;

// import React, { Component } from 'react';
// import axios from 'axios'
// import { Nav } from "react-bootstrap";
// class SignUp extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       adminName: '',
//       adminEmail: '',
//       phoneNumber: '',
//       password: '',
//       password_confirmation: '',
//       errors: ''
//      };
//   }
//   handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   };
//   handleSubmit = (event) => {
//     event.preventDefault()
//     const {adminName, adminEmail, phoneNumber, password, password_confirmation} = this.state
//     let user = {
//       adminName: adminName,
//       adminEmail: adminEmail,
//       phoneNumber:  phoneNumber,
//       password: password,
//       password_confirmation: password_confirmation
//     }
// axios.post('/admins', {user}, {withCredentials: true})
//     .then(response => {
//       if (response.data.status === 'created') {
//         this.props.handleLogin(response.data)
//         this.redirect()
//       } else {
//         this.setState({
//           errors: response.data.errors
//         })
//       }
//     })
//     .catch(error => console.log('api errors:', error))
//   };redirect = () => {
//     this.props.history.push('/')
//   }
//   // handleErrors = () => {
//   //   return (
//   //     <div>
//   //       <ul>{this.state.errors.map((error) => {
//   //         return {error}
//   //         {/* return this.key={error}>{error} */}
//   //       })}
//   //       </ul> 
//   //     </div>
//   //   )
//   // };
//   render() {
//     const {adminName, adminEmail, phoneNumber, password, password_confirmation} = this.state
// return (
//       <div>

//       <form onSubmit={this.handleSubmit}>
//         <h1 > Register</h1>

//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           placeholder="Enter your name"
//           value={adminName}
//           onChange={this.handleChange}
//         />
//          <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           value={adminEmail}
//           onChange={this.handleChange}
//         />
//          <label htmlFor="phoneNumber">phone Number:</label>
//         <input
//           type="text"
//           id="phoneNumber"
//           placeholder="Enter phone number"
//           value={phoneNumber}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           placeholder=" Enter password"
//           value={password}
//           onChange={this.handleChange}
//         />
//          <input
//             placeholder="password confirmation"
//             type="password"
//             name="password_confirmation"
//             value={password_confirmation}
//             onChange={this.handleChange}
//           />
//         <button type="submit">Submit</button>
//       </form>
//       <Nav.Link href="/Login">
//       <button  className ="link-btn" > Already have an account? Login Here</button>
//       </Nav.Link>
//         {/* <h1>Sign Up</h1>        
// <form onSubmit={this.handleSubmit}>
//           <input
//             placeholder="username"
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.handleChange}
//           />
//           <input
//             placeholder="email"
//             type="text"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <input 
//             placeholder="password"
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />          
//           <input
//             placeholder="password confirmation"
//             type="password"
//             name="password_confirmation"
//             value={password_confirmation}
//             onChange={this.handleChange}
//           />
        
//           <button placeholder="submit" type="submit">
//             Sign Up
//           </button>
      
//         </form> */}
//       </div>
//     );
//   }
// }
// export default SignUp;
// // export default Signup; <input
// // placeholder="password confirmation"
// // type="password"
// // name="password_confirmation"
// // value={password_confirmation}
// // onChange={this.handleChange}
// // />



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./style.css";

// function Signup() {
//   // Declare state variables for form fields and initialize them to an empty state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pnumber, setPhoneNumber] = useState("");
//   const navigate = useNavigate();
//   const [password_confirmation, setPasswordConfirmation] = useState("");

//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // Function to handle registration form submission
//   // Function to handle registration form submission
//   const handleRegister = async (event) => {
//     event.preventDefault(); // prevent default form submission behavior
//     try {
//       const response = await fetch("http://localhost:3000/users", {
//         // Update fetch URL
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           phone: pnumber,
//           password_confirmation: password_confirmation,
//           password: password,
//         }),
//       });

//       if (response.ok) {
//         navigate("/login");
//       }

//       // TODO: Handle successful registration
//     } catch (error) {
//       // If an error occurs during registration, set the error state variable
//       setError(error.message);
//     }
//   };
//   // ion to handle input changes and add/remove "has-value" class to input boxes
//   const handleInputChange = (e) => {
//     const input = e.target;
//     if (input.value) {
//       // If the input has a value, add "has-value" class
//       input.classList.add("has-value");
//     } else {
//       // If the input does not have a value, remove "has-value" class
//       input.classList.remove("has-value");
//     }
//   };

//   return (
//     <div className="cover">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleRegister}>
//         <div className="names">
//           {/* First name input box */}
//           <div className="inputBox">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value); // Update state variable for first name
//                 handleInputChange(e);
//               }}
//               required
//             />
//             <span>Name</span>
//           </div>
//           {/* Last name input box */}
//           <div className="inputBox">
//             <input
//               type="text"
//               value={pnumber}
//               onChange={(e) => {
//                 setPhoneNumber(e.target.value); // Update state variable for last name
//                 handleInputChange(e);
//               }}
//               required
//             />
//             <span>Phone Number</span>
//           </div>
//         </div>
//         {/* Email input box */}
//         <div className="inputBox">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value); // Update state variable for email
//               handleInputChange(e);
//             }}
//             required
//           />
//           <span> Email </span>
//         </div>

//         {/* Password input box */}
//         <div className="inputBox">
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value); // Update state variable for password
//               handleInputChange(e);
//             }}
//             required
//           />
//           <span>Password</span>
//         </div>
//         <div className="inputBox">
//           <input
//             type="password"
//             value={password_confirmation}
//             onChange={(e) => {
//               setPasswordConfirmation(e.target.value); // Update state variable for last name
//               handleInputChange(e);
//             }}
//             required
//           />
//           <span>Confirm Password</span>
//         </div>
//         {/* Register button */}
//         <button type="submit" className="signup-btn">
//           Sign Up
//         </button>
//         {/* Error message */}
//         <div>{error}</div>
//       </form>
//       {/* Already have an account link */}
//       <p>
//         Already have an account?
//           <Link to="/login">Log In</Link>
//       </p>
//     </div>
//   );
// }

// export default Signup;
