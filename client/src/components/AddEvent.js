import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import { Header, Icon, Message } from 'semantic-ui-react';
import Alert from '@mui/material/Button';


const categoryOptions = [
  { value: 'AGM', label: 'AGM' },
  { value: 'Funeral', label: 'Funeral' },
  { value: 'Fundraising', label: 'Fundraising' },
  { value: 'other ceremonies', label: 'other ceremonies' },
];

const AddEvent = ({eventdata}) => {
  // navigator
  let navigator = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');
  const {id, eventName, image, eventVenue, description, eventDate, category} = eventdata
  const [events,setEvents] = useState([])
  console.log(events)
  console.log(eventdata)

  
  let params = useParams();
  const [eventInfo, seteventInfo] = useState({})
  
  // capture data from server based on param and save it to state
  useEffect(() => {
    fetch(`events/${params.eventId}`)
    .then((r)=> r.json())
    .then((data)=>seteventInfo(data))
  }, [params.eventId])


function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
     
      
      charity_id: params.charityId,
      category: form.elements.formCategory.value,
      eventName :form.elements.formBasicName.value,
      image: form.elements.formBasicImage.value,
      description: form.elements.formBasicDescription.value,
      eventVenue: form.elements.formBasicQuantity.value,
      eventDate :form.elements.formBasicQuantity.value
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
    // after post, thiss takes the user to the donations page and gets an alert
    navigator("/events")
    alert("Thank you .")
    .catch(error => console.error(error));

    console.log(formData)
}
function handleCategoryChange(e){
  setSelectedCategory(e.target.value);
}
  return (
    <div className ='cover' >
      <div style={{paddingLeft: '40%', backgroundColor:'rgb(72 107 159)'}}>
      <Header as='h2' icon >
        <Icon name='chess queen' />
        {eventInfo. eventName}
        <Header.Subheader>
          Thank you for adding an event.
        </Header.Subheader>
      </Header>
      </div>
      <br />
      <br />
      <br />
    <Form onSubmit={handleFormSubmit} style={{padding:'20px  20px ',paddingLeft: '18%'}} >
      <Form.Group controlId="formCategory">
        <Form.Label>Select a category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} style={{width:'60rem'}}>
          <option value="">Select event  Category...</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicName">
      <Form.Label>event Name</Form.Label>
            <Form.Control type="text" placeholder="event"  style={{width:'60rem', marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicImage">
       <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="event Image" style={{width:'60rem',marginTop: '10px'}} />
       </Form.Group>
       <Form.Group controlId="formBasicDescription">
       <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="event Description" style={{width:'60rem',marginTop: '10px'}} />
       </Form.Group>
             <br />
      <Button type="submit" style = {{marginLeft:"35%"}}>
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default AddEvent;
