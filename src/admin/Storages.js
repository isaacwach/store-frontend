import React from 'react';
import { useState,useEffect } from 'react';
import AdminStorageCard from './AdminStorageCard';





const StorageUnits = () => {
    const API_URL = 'https://store58.herokuapp.com/api/storage/unit'
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
        <div className="storage" >
    
            
            <div className="container ">
                    <h1 className="text-center" > All  storages</h1>

                        <div className="container">
                            <div className="row">
                                
                        {storages.map((storage) =>(
                            <AdminStorageCard storages={storage} />
                        ))}
                       </div>
                        </div>

            </div>
    
        </div>

    

        </>
     );
}
 
export default StorageUnits;