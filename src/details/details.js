// import React from 'react';
// import { useState } from 'react';
import Card from "react-bootstrap/Card";
import Popup from '../popup/popup';
import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import StoragesCard from './DetailCard';

const API_URL = 'https://store58.herokuapp.com/api/booking/'



const Storage = () => {
    const {id}= useParams();
    const Storage_URL = `https://store58.herokuapp.com/api/storage/unit`

    const[loading, setLoading] = useState(false)
    const [mystorages, setStorages]= useState([])
    const getStorages= async () => {
        const response= await fetch(`${Storage_URL}`,
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
    const [bookings, setBookings]= useState([])
    const getBookings= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'GET',
        headers:{'Content-Type': 'application/json'

    }})
        const data = await response.json();
        setBookings(data)
        console.log(data)
        console.log(bookings)
    }
    useEffect( () => {
        getBookings()
    }, []);

    return (
        <>
        <div>
        {!loading && <h2> Loading ...</h2>}
        </div>
      <StoragesCard mystorages={mystorages.filter((storages)=>storages.id===14)} />




      </>


    )

  
}

export default Storage;