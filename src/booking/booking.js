import React from 'react';
// import bookinghero from './bookinghero.jpeg'
import {Card, Button} from 'react-bootstrap';
import BookingForm from './form';
import TransportForm from '../transport/transport';

const Booking = () => {

    return ( 
        <>
        <div className="booking" >
    
            <div className="booking-hero text-center" >

                <h2> Welcome to our online store </h2>
                <h3>Book your slot according to the goods you intend to store. </h3>
                <h3>The safety of your goods is guaranteed</h3>
                <h4>Book now!!</h4>
              
            </div>
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
                <BookingForm />
                <TransportForm />
            </div>
        </div>
        </>
     );
}
 
export default Booking;