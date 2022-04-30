import React from 'react';
import {useState, useEffect} from 'react';


const API_URL = 'https://store58.herokuapp.com/api/booking/'


const GetBookings = () => {
    const [bookings, setBookings]= useState([])
    const getBookings= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'GET',
        headers:{'Content-Type': 'application/json'}})
        const data = await response.json();
        setBookings(data)
        console.log(data)
    }
    useEffect( () => {
        getBookings()
    }, []);
    return ( 
        <div>
        <button onClick={ (e) =>{getBookings()} }>Get bookings</button>
        </div>
     );
}
 
export default GetBookings;