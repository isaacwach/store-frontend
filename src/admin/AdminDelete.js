import React from 'react';
import { useState,useEffect } from 'react';
import AdminStorageCard from './AdminStorageCard';
import { useParams } from 'react-router';






const DeleteUnits = () => {
    const API_URL = 'https://store58.herokuapp.com/api/unit/unit-id/${id}'
    const [storages, setStorages]= useState([])
    const getStorages= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'DELETE',
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
        <div className="storage" >
    
            {/* <div className="booking-hero text-center" >

                <h2> Welcome to our online store </h2>
                <h3>Book your slot according to the goods you intend to store. </h3>
                <h3>The safety of your goods is guaranteed</h3>
                <h4>Book now!!</h4>
              
            </div> */}
            <div className="container ">
                    <h1 className="text-center" > All  storages</h1>

                        <div className="container">
                            <div className="row">
                        {storages.map((storage) =>(
                            <AdminStorageCard prop={storage} />
                        ))}
                       </div>
                        </div>

            </div>
    
        </div>

    

        </>
     );
}
 
export default DeleteUnits;