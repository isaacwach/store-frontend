import React from 'react';
import {Card, Button} from 'react-bootstrap';
// categories: "large"
// description: "perishables"
// id: 1
// price: 300
// size: 33
// status: "not occupied"


const StorageCard = ({prop}) => {
    return (
        <div className="storage">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Unit: {prop.id}</Card.Title>
                        <Card.Text>
                        <p>Size: {prop.size} m^2</p>
                        <p>Price: {prop.price}</p>
                        <p>Category: {prop.categories}</p>
                        <p>Status: {prop.status}</p>
                        <p>Description: {prop.description}</p>
                        </Card.Text>
                        <Button  className="btn"style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}} >Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
      );
}
 
export default StorageCard;