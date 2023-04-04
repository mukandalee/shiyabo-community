import React from "react";
import  { useState ,useEffect} from 'react'
import Members from "./Members";


function Group ({ member, onDeleteMember, onUpdateMember }) {
  const [members, setMembers] = useState([]);
  const { id, name,group, role } = member;

  useEffect(() => {
    fetch("/members")
      .then((response) => response.json())
      .then((members) => setMembers(members))
  }, []);


  function handleDeleteClick() {
    fetch(`/members/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteMember(member);
      }
    });
  }


    fetch(`/members/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        group: group,
        role: role,
      }),
    })
      .then((r) => r.json())
      .then((updatedMember) => onUpdateMember(updatedMember));

  return (
    <div>
<div className="card">
      <h2>{name}</h2>
      <img src='https://images.unsplash.com/photo-1677461517418-69ca6f25a916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt={name} className="toy-avatar" />

      <button className="member">
        group: {group}
      </button>
      <button className="member" >
        role: {role}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Delete a member
      </button>
    </div>
    <Members/>
    </div>
    
  );
}

export default Group;
