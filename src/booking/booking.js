import React from 'react';
// import bookinghero from './bookinghero.jpeg'
import BookingForm from './form';
import TransportForm from '../transport/transport';
import StorageCard from './storage'

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
    
                <BookingForm />
                <TransportForm />
                < StorageCard />
        </div>

        </>
     );
}
 
export default Booking;