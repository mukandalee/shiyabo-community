import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import { Icon, Button } from 'semantic-ui-react';
import { json, Link, useParams } from "react-router-dom";
import FilterType from "./FilterType";
import AddEvent from "./AddEvent";


function Events() {
 

  const [events, setEvents] = useState([]);
  
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
    const [searchParam] = useState(["description", "eventName","category"]);

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
    fetch("/events")
      .then((response) => response.json())
      .then(setEvents);
      // .then((events) => setEvents(events))
      // console.log(events);
  }, []);

  const handleDelete = (id) => {
    fetch(`/events/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
      });
      // an alert shown on deleting an event
      alert("You deleted an Event.")
  };
  function search(events) {
    return events.filter((event) => {
        // filter by type
        if (event.category === filterParam) { 
            // default search based on parameters
            return searchParam.some((newEvent) => {
                return (
                    event[newEvent]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchResults.toLowerCase()) > -1
                );
            });
        } else if (filterParam === "All") {
            return searchParam.some((newEvent) => {
                return (
                  event[newEvent]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchResults.toLowerCase()) > -1
                );
            });

        }
    }
)}

const load_more = (event) => {
    setPaginate((prevValue) => prevValue + 8);
};

let donData = Object.values(events);

  let eventsCards = search(donData)
    .slice(0, paginate).map((event) => (
    <Col key={event.id} sm={6} md={4} lg={3} className="my-3">
      <Card 
       className={`my-3 mx-2 ${hover ? 'shadow-lg' : 'shadow'}`}
      style={{ width: '18rem', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <div className="donation-img" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${event.image})`
            }}
            
            ></div>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {event.category}
          </Card.Subtitle>
          <Button secondary onClick={() => handleDelete(event.id)}><Icon name='delete' />Delete</Button>
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
        
        <input style={{width:'25rem'}}className="form-control me-2" type="text" placeholder="Search for an event" value={searchResults}  onChange={(e) => setSearchResults(e.target.value)} aria-label="Search"/>
      </form>
      <FilterType filterParam={filterParam} setFilterParam={setFilterParam} />
      </div>
      <Row>{eventsCards}</Row>
      <button onClick={load_more} style={loadBtn}>see More...</button>


      <div>
      </div>
      <div>
        
        
      </div>
    </Container>


  );

}

export default Events;