import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function EachEvent({contribution}) {
    // destructuring the charity prop for easier access
    const { id ,eventName,image,eventVenue,description,eventDate} = contribution

    return (
        <Card className='card-style'>
        
            <Link to={`/contributions/${id}/addEvent`} className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
            
            ></Link>
            <Card.Content>
            <Card.Header>{eventName}</Card.Header>
            <Card.Meta>{eventVenue}</Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            <br />
            <Card.Description>
                <br />
                <p className='money-bill'>
                <p>event date: </p>{eventDate}
                </p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Link to={`/contributions/${id}/edit`} className="ms-3">
                        <p><Icon name="edit"/>Edit</p>
                </Link>
                
            </a>
            </Card.Content>
        </Card>
    )
}

export default EachEvent