import React from 'react';
import {useState, useEffect} from 'react';
import StorageCard from './StorageCard';

const API_URL = 'https://store58.herokuapp.com/api/storage/unit/'


const Booking = () => {
    const[loading, setLoading] = useState(false)
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
        setLoading(true)
    }
    useEffect( () => {
        getStorages()
    }, []);


    

    return ( 
        <>
        <div className="booking" >
            <div className="spacing">

            </div>
    
            <div className="booking-hero text-center" >

                <h1> Welcome to our online store </h1>
                <h3>Book your slot according to the goods you intend to store. </h3>
                <h3>The safety of your goods is guaranteed</h3>
                <h3>Book now!!</h3>
              
            </div>
            <div className="storage-header">
                    <h1 className="text-center" > Our Storage Solutions</h1>
                </div>

                <div className="text-center">
                    {!loading && <div > <h2>Loading ....</h2></div>}
                </div>
     
            <div className="container">
                <div className="row">
              
                        <StorageCard storages={storages} />

               </div>

            </div>
            <div className="spacing2">

            </div>
    
        </div>

    

        </>
     );
}
 
export default Booking;