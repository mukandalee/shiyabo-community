import React, { useState, useEffect } from "react";
function SignUp({ onLogin }) {
    const [adminName, setAdminName] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         adminName,
         adminEmail,
         phoneNumber,
         password,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
         <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
        />
         <label htmlFor="username">phoneNumber:</label>
        <input
          type="text"
          id="username"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
  export default SignUp;