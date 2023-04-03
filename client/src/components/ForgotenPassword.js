import React, { useState } from "react";
import { Nav } from "react-bootstrap";

function ForgotenPassword({ setUser,props }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    
  }

  return (
    <div className="authenticate" >
      <div className="home">
      <form onSubmit={handleSubmit}>

<label htmlFor="username">Enter email to reset your password</label>
<input
  type="email"
  id="email"
  placeholder="Enter your email to reset"
  autoComplete="off"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<Nav.Link  href="/forgotenPassword">
<button type="submit">Submit</button>
</Nav.Link>

</form>

      </div>

     
     
    </div>
  );
}

export default ForgotenPassword;
