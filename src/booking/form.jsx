import {useState} from "react";
import React from "react";
import {Button} from "react-bootstrap";

const BookingForm = () => {
    const [start, setStart]=useState('')
    const [end, setEnd]=useState('')
    const [unit, setUnit]=useState('3399')
    // const [pickup, setPickup]=useState('')
    const [goods, setGoods]=useState('')
    const [description, setDescription]=useState('')


    return ( 
        <>

        <div className="Booking-Form">

            <form>
                <h4>Booking form</h4>
                <div className="form-group">
                <label> Start Date * </label>
                <input className="form-control"
                type="date"
                required
                value={start}
                onchange={(e)=>{setStart(e.target.value)}} />
                </div>
                <div className="form-group">
                <label> Exit Date * </label>
                <input  className="form-control"
                type="date"
                required
                value={end}
                onchange={(e)=>{setEnd(e.target.value)}} />
                </div>
                <div className="form-group">
                <label> Storage unit* </label>
                <input  className="form-control"
                type="text"
                required
                value={unit}
                onchange={(e)=>{setUnit(e.target.value)}} />
                </div>
                <div className="form-group">
                <label> Type of goods: * </label>
                <input  className="form-control"
                type="text"
                required
                value={goods}
                onchange={(e)=>{setGoods(e.target.value)}} />
                </div>
               
               <div className="form-group">
                <label> Description * </label>
                <textarea className="form-control"
                type="text"
                required
                value={description}
                onchange={(e)=>{setDescription(e.target.value)}} />
                </div>

                <Button> Book Storage </Button>
            </form>


        </div>
        </>
     );
}
 
export default BookingForm;