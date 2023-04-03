import React from "react";
import { useState } from "react";
import "../index.css"

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to send email to doctor's email address goes here
    console.log(`Name: ${name}\nEmail: ${email}\nComment: ${comment}`);
    // reset form
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="Contacts">
      <div className="home">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      </div>
     
    </div>
  );
}

export default Contacts;



// import React from "react";
// function Contact ()
// {
//     return (<div>
//          <div className="contacts">
//         <h2>Contact Us</h2>
        
//         <p>If you have any questions or concerns, please feel free to reach out to us via email or phone:</p>
//         <p>Email: info@shiyabocommunitywebsite.com</p>
//         <p>Phone: +254 (100) 001-1000</p>
//       </div>
//     </div>)
// }