import React, { useState } from "react";
// import Members from "./Group";
// import Joing from "./Groupjoin";
// import { json, Link, useParams } from "react-router-dom";

function Members(onAddGroup) {
 

  const [formData, setFormData] = useState({
    name: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newGroup= {
      ...formData
    };

    fetch("/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((r) => r.json())
      .then((newGroup) => {
        setFormData({
          name: ""
        });
        onAddGroup(newGroup);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-form">
        <h3>Create a Group!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a group's name..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Group"
          className="submit"
        />
      </form>
    </div>
  );
}

export default Members;