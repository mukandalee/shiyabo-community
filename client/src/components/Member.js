import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col,DropdownButton,Dropdown } from "react-bootstrap";
import { Icon, Image, Button } from 'semantic-ui-react';
import { json, Link, useParams } from "react-router-dom";
import FilterType from "./FilterType";

function Member() {
 

  const [members, setMembers] = useState([]);
  
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };


  // create state for holding search 
    // because this is a parent compoonent to Each event and Search
    const [searchResults, setSearchResults] = useState("");

    // state to hold search parameters for each event
 const [searchParam] = useState(["userName", "phoneNumber","role"]);

    // useState for filter parameters
    const [filterParam, setFilterParam] = useState(["All"]);

  // useState for pagination
  const [paginate, setPaginate] = useState(8);
    

  // load more button styling
  const loadBtn = {
      display: "block",
      marginTop: "2rem",
      marginBottom: "3rem",
      fontSize: "1.4rem",
      padding: "12px 32px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "40px",
      backgroundColor: "#2d92de",
      border: "1px solid #2185d0",
      color: "#fff",
      cursor: "pointer"
  }
  
  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((members) => setMembers(members));
      console.log(members);
  }, []);

  const handleDelete = (id) => {
    fetch(`/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedEvents = members.filter((members) => members.id !== id);
        setMembers(updatedEvents);
      });
      // an alert shown on deleting an event
      alert("You deleted a member.")
  };
  function search(members) {
    return members.filter((members) => {
        // filter by type
        if (members.category === filterParam) { 
            // default search based on parameters
            return searchParam.some((newMember) => {
                return (
                    members[newMember]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchResults.toLowerCase()) > -1
                );
            });
        } else if (filterParam == "All") {
            return searchParam.some((newMember) => {
                return (
                  membersCards[newMember]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchResults.toLowerCase()) > -1
                );
            });

        }
    }
)}

const load_more = (members) => {
    setPaginate((prevValue) => prevValue + 8);
};

let donData = Object.values(members);

  let membersCards = search(donData)
    .slice(0, paginate).map((members) => (
    <Col key={members.id} sm={6} md={4} lg={3} className="my-3">
      <Card 
       className={`my-3 mx-2 ${hover ? 'shadow-lg' : 'shadow'}`}
      style={{ width: '18rem', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <Card.Body>
          <Card.Title>{members.userName}</Card.Title>
          <Card.Text>{members.phoneNumber}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {members.role}
          </Card.Subtitle>
          <Button secondary onClick={() => handleDelete(members.id)}><Icon name='delete' />Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
<div className="wrapper" style={{
                        display: "flex",
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                        }}>
       <form className="d-flex " role="search">
        
        <input style={{width:'25rem'}}className="form-control me-2" type="text" placeholder="Search for a user" value={searchResults}  onChange={(e) => setSearchResults(e.target.value)} aria-label="Search"/>
      </form>
      <FilterType filterParam={filterParam} setFilterParam={setFilterParam} />
      </div>
      <Row>{membersCards}</Row>
      <button onClick={load_more} style={loadBtn}>see more...</button>
    </Container>
  );
}

export default Member;