import Home from "./Home";
import React, {useState,useEffect} from "react";
import { Fragment } from "react";
import EachEvent from "./EachEvent";
import AddEvent from "./AddEvent";
// import { Route, Routes, Outlet } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Events from "./Events";


function Contributions(){
    const [events, setEvents]= useState([]);
    const [search, setSearch] = useState("")

    const searched = events.filter((contribute) => {
        return search.toLowerCase() === "" ? contribute
          : contribute.name.toLowerCase().includes(search);
      });

    const onecharity = searched.map((contribute) => {
        return (
            <EachEvent key={contribute.id} contribute={contribute}/>
        )
    })

function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = {
            eventName: form.elements.formBasicName.value,
            description: form.elements.formBasicDescription.value,
            image: form.elements.formBasicImage.value,
            eventVenue: form.elements.formBasicLocation.value,
            eventDate :form.elements.formBasicYear.value
        };
        fetch("/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          setEvents([...events, data]);
          form.reset();
        })
        alert("You've added an event.")
        .catch(error => console.error(error));

        console.log(formData)
    }

    // showing new edits
    function updateContribution(updatedContribution) {
        const updatedCon = events.map((contribute) => {
            if (contribute.id === updatedContribution.id) {
                return updatedContribution;
            } else return contribute;
        });
        setEvents(updatedCon);
    }
      

    return (
             
 <Fragment>
    <div className="d-flex justify-content-end">
            
            </div>
                        <div className="ui three column grid container" style={{
                            
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                            }}>
                                <Button variant="primary" href="/event-adding-form" style = {{marginLeft : '1050px', marginTop : '50px', display:'flex' }}>
                                    Add Events
                                 </Button>
                            <div className="row">
                           <div>
                           <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
                             <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search for a event" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
                          </form>
                           </div>
                                {onecharity}
                                <div>
                                <div >
                                    <h1 style={{padding:'10px  20px ',paddingLeft: '40%'}}>
                                        Add an event
                                    </h1>
                                    <Form id="add-charity-form" onSubmit={handleFormSubmit} >
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Label>eventName</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter event name"  />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicDescription">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Description" />
                                                 </Form.Group>
                                                <Form.Group controlId="formBasicImage">
                                                         <Form.Label>Image</Form.Label>
                                                         <Form.Control type="file" placeholder="Enter image"  />
                                                 </Form.Group>
                                                 <Form.Group controlId="formBasicYear">
                                                         <Form.Label>eventDate</Form.Label>
                                                         <Form.Control type="text" placeholder="event date" />
                                                 </Form.Group>
                                                 <Form.Group controlId="formBasicLocation">
                                                         <Form.Label>eventVenue</Form.Label>
                                                         <Form.Control type="text" placeholder="Enter location" />
                                                 </Form.Group>
                                                 <Row>
                                                    <Col className="text-center">
                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Col>
                                                </Row>
                                           </Form>
                                    </div>
                            </div>
                                
                            </div>
                            
                            
                        </div>
                    </Fragment>
        
    )
}
export default Contributions
