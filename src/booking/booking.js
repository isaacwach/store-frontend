import React from 'react';
import {useState, useEffect} from 'react';
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
            <div className="storage-header">
                    <h1 className="text-center" > Our Storage Solutions</h1>
                </div>
            
            <div className="container  ">
              
                        <div className="row">
                           
                            
                        {storages.map((storage) =>(
                            <StorageCard prop={storage} />
                        ))}

            
                       
                        </div>

            </div>
    
        </div>

    

        </>
     );
}
 
export default Booking;