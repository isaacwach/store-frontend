import React from "react";
import {useState} from 'react';


const TransportForm = () => {
    const Transport_URL='https://store58.herokuapp.com/api/transport/'
    

    
    const [destination, setDestination]= useState('')
    const [delivery_fee, setDeliveryFee] = useState()
    const [client_name, setClientName] = useState('')
    const [destination_address, setDestinationAddress] = useState('')
    const [description, setDescription] = useState('')
    const [phone_no, setPhoneNo] = useState('')
    const [request_date, setRequestDate] = useState('')
    const[delivery_date, setDeliveryDate] = useState('')
    const [storage, setStorage] = useState('')
    const [client, setClient] = useState('')
    const [pickup_location, setPickupLocation] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault();
        const transport= {destination, delivery_fee, client_name, description, destination_address, delivery_date, phone_no,request_date,storage, client, pickup_location};
        fetch(`${Transport_URL}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(transport)}
            )
            .then( ()=> {
            console.log('New booking made!');
            console.log(JSON.stringify(transport))
            // setPending(true)
        })
    }



    

    return (  
        <div className="Booking-Form">
            <form onSubmit={handleSubmit} >
                <h3>Enter transport details</h3>
                <div className="form-group">
                <label> Destination </label>
                <input className="form-control"
                type="text"
                value={destination}
                onChange={ (e) => {setDestination(e.target.value)} }
                />
                </div>


                <div className="form-group">
                    <label>client_name</label>
                    <input className="form-control"
                    type="text"
                    value={client_name}
                    onChange={ (e) => {setClientName(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label> Destination Address *</label>
                    <input className="form-control"
                    type="text"
                    value = {destination_address}
                    onChange={ (e) => {setDestinationAddress(e.target.value)}}
                    />
                    </div>




                <div className="form-group">
                    <label>Phone Number</label>
                    <input className="form-control"
                    type="number"
                    value={phone_no}
                    onChange={ (e) => {setPhoneNo(e.target.value)}}
                    />
                </div>


                <div className="form-group"> 
                    <label> Description </label>
                    <input className="form-control"
                    type="text"
                    value={description}
                    onChange={ (e) => {setDescription(e.target.value)}}
                    />
                </div>

                <div className="form-group"> 
                    <label> Pickup Location </label>
                    <input className="form-control"
                    type="text"
                    value={pickup_location}
                    onChange={ (e) => {setPickupLocation(e.target.value)}}
                    />
                </div>

                <div className="form-group"> 
                    <label> Delivery fee </label>
                    <input className="form-control"
                    type="text"
                    value={delivery_fee}
                    onChange={ (e) => {setDeliveryFee(e.target.value)}}
                    />
                </div>


             

                <button className="btn"> Add transport </button>
            </form>
        </div>
    


    );
}
 
export default TransportForm;