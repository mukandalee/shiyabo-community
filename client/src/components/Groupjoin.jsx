import React, { useState } from "react";
import {useNavigate  } from 'react-router-dom'
function Joing(){
     const [name, setName] = useState("");
     const navigate = useNavigate();
    const [group, setSelectedGroup] = useState("");
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
         const appointment = {
            name: name,
           group: group,
           user_id: [],
         };
    
         const response = await fetch("/members", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointment),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);

            if (response.ok) {
              navigate("/Group");
            }
            // Handle response from the API
          })
          .catch((error) => {
            console.error(error);
            // Handle error from the API
          });

        };
          const handleInputChange = (e) => {
        const input = e.target;
        if (input.value) {
          // If the input has a value, add "has-value" class
          input.classList.add("has-value");
        } else {
          // If the input does not have a value, remove "has-value" class
          input.classList.remove("has-value");
        }
    }
     
    return (
    <div>
      <div className="home"> 
      <form onSubmit={handleFormSubmit}>
            <label htmlFor="name"> Enter your name</label>
            <input 
            type="text" 
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value); // Update state variable for first name
              handleInputChange(e);
            }}
            />
            <br />
            <label htmlFor="groups">Select a group:</label>
        <select
          className="group"
          value={group}
          onChange={(e) => setSelectedGroup(e.target.value)}
         
        >
          <option value="">Select a group</option>
          <option value="Umoja">Umoja</option>
          <option value="achievers">achievers</option>
          <option value="maendeleo">maendeleo</option>
        </select>
            <button type='submit'> join</button>
        </form>

      </div>
        

    </div>
    );
};

export default  Joing;