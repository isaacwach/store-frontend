import React from "react";
import {useState} from 'react';


const TransportForm = () => {
    
    const [destination, setDestination]= useState('')
    // const [delivery_fee, setDeliveryFee] = useState(300)
    const [client_name, setClientName] = useState('')
    // const [destination_address, setDestinationAddress] = useState('')
    const [description, setDescription] = useState('')
    const [phone_no, setPhoneNo] = useState('')

    return (  
        <div className="Booking-Form">
            <form>
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
                    <label>Phone Number</label>
                    <input className="form-control"
                    type="text"
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
                {/* <h4
                // onChange={ (e) => {setDeliveryFee(e.target.value)}}
                
                > Transport fee: {delivery_fee} </h4> */}

                <button className="btn"> Add transport </button>
            </form>
        </div>
    


    );
}
 
export default TransportForm;