import React from 'react';
import {useState, useEffect} from 'react';
// import bookinghero from './bookinghero.jpeg'
import BookingForm from './form';
import TransportForm from '../transport/transport';
import StorageCard from './StorageCard'

const API_URL = 'https://store58.herokuapp.com/api/storage/unit'


const Booking = () => {
    const [storages, setStorages]= useState([])

    const getStorages= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'GET',
        headers:{'Content-Type': 'application/json'

    }})
        const data = await response.json();

        setStorages(data)
        console.log(storages)
    }
    useEffect( () => {
        getStorages()
    }, []);


    

    return ( 
        <>
        <div className="booking" >
    
            <div className="booking-hero text-center" >

                <h2> Welcome to our online store </h2>
                <h3>Book your slot according to the goods you intend to store. </h3>
                <h3>The safety of your goods is guaranteed</h3>
                <h4>Book now!!</h4>
              
            </div>
            <div className="container">
                    <h1 className="text-center" > Our Storage Solutions</h1>

                    {/* { storages?.length > 0 ? ( */}
                    
                        <div className="container">
                            
                        {storages.map((storage) =>(
                            <StorageCard prop={storage} />
                        ))}
                       
                        </div>

                 </div>
            <div>
                <BookingForm />
            </div>
            <div>
                <TransportForm />
            </div>
    
        </div>

    

        </>
     );
}
 
export default Booking;