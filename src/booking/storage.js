import React from 'react';
import {Card, Button} from 'react-bootstrap';

const StorageCard = () => {
    return (
        <div className="storage">
                <h2 className="text-center" > Our Storage Solutions</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Unit: pk22</Card.Title>
                        <Card.Text>
                        <p>Size: 3*3 M2</p>
                        <p>Price: KSH 6000 PM</p>
                        <p>Category: Small </p>
                        <p>Status: Available</p>
                        </Card.Text>
                        <Button  className="btn"style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}} >Book Now</Button>
                    </Card.Body>
                </Card>
            </div>
      );
}
 
export default StorageCard;