import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';






const DeleteUnits = () => {

    const history = useHistory();
    const { id }= useParams();
    const API_URL = `https://store58.herokuapp.com/api/unit/unit-id/${id}`

    const [storages, setStorages]= useState([])
    const getStorages= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'DELETE',
        headers:{'Content-Type': 'application/json'

    }}).then(
        ()=>{
            console.log('I was called on page load')
            history.go(-1);

        }
    )
        const data = await response.json();

    }

useEffect( () => {
    getStorages()

}, []);
 

    return ( 
        <div className="storage" >
            <div className="spacing"></div>

    
        <h1 className="btn-danger" > Storage unit {id} has been successfully deleted </h1>

        <div className="spacing2"></div>
        <div className="spacing"></div>
        <div className="spacing"></div>

    
        </div>
        

    

     )
}
 
export default DeleteUnits;