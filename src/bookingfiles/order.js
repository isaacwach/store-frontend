import React, {useState, useEffect } from 'react';
import TransportForm from '../transport/transport';
import StorageCard from '../booking/StorageCard';
import BookingForm from '../booking/form.jsx';



const API_URL = 'https://store58.herokuapp.com/api/storage/unit/'

const Order = () => {
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
    <div className="spacing" >

    </div>
        <div>
        <StorageCard storages={storages.filter((storage)=>storage.id===1)} />
        </div>

        <div>
            <BookingForm />
        </div>

        <div className="order" >
        <TransportForm />
        </div>

        </>

     );
    }
 
export default Order;