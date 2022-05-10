// import React from 'react';
// import { useState } from 'react';
import Card from "react-bootstrap/Card";
import Popup from '../popup/popup';
import React from 'react';
import {useState, useEffect} from 'react';
import StoragesCard from './DetailCard';

const API_URL = 'https://store58.herokuapp.com/api/storage/unit/'


const Storage = () => {
    const[loading, setLoading] = useState(false)
    const [mystorages, setStorages]= useState([])
    const getStorages= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'GET',
        headers:{'Content-Type': 'application/json'

    }})
        const data = await response.json();

        setStorages(data)
        console.log(mystorages)
        setLoading(true)
    }
    useEffect( () => {
        getStorages()
    }, []);

    return (
      <StoragesCard mystorages={mystorages.filter((storage)=>storage.id===14)} />
    )

  
}

export default Storage;