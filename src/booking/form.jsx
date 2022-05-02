import {useState} from "react";
import React from "react";

const BookingForm = () => {
    const [start_date, setStartDate]=useState()
    const [exit_date, setExitDate]=useState()
    // const [unit, setUnit]=useState('3399')
    // const [pickup, setPickup]=useState('')
    const [type_of_goods, setTypeOfGoods]=useState('')
    const [description, setDescription]=useState('')

    const API_URL = 'https://store58.herokuapp.com/api/booking/'

    const handleSubmit= (e) => {
        e.preventDefault();
        const booking= {type_of_goods, start_date, exit_date, description };
        fetch(`${API_URL}`, {
            method: 'POST',
            mode:'no-cors',
            headers: {"Content-Type": "application/json", 'Authorization': '8db2657061036484a4ec19b23b13b82e47d8f874'},
            body: JSON.stringify(booking)
        }).then( ()=> {
            console.log('New booking made!');
            console.log(JSON.stringify(booking))
        })
    }
    return ( 
        <>

        <div className="Booking-Form">

            <form onSubmit={handleSubmit} >
                <h4>Booking form</h4>
                <div className="form-group">
                <label> Start Date * </label>
                <input className="form-control"
                type="date"
                required
                value={start_date}
                onChange={(e)=>{setStartDate(e.target.value)}} />
                </div>


                <div className="form-group">
                <label> Exit Date * </label>
                <input  className="form-control"
                type="date"
                required
                value={exit_date}
                onChange={(e)=>{setExitDate(e.target.value)}} />
                </div>
                {/* <div className="form-group">
                <label> Storage unit* </label>
                <input  className="form-control"
                type="text"
                required
                value={unit}
                onchange={(e)=>{setUnit(e.target.value)}} />
                </div> */}


                <div className="form-group">
                <label> Type of goods: * </label>
                <input  className="form-control"
                type="text"
                required
                value={type_of_goods}
                onChange={(e)=>{setTypeOfGoods(e.target.value)}} />
                </div>
               
               <div className="form-group">
                <label> Description * </label>
                <textarea className="form-control"
                type="text"
                required
                value={description}
                onchange={(e)=>{setDescription(e.target.value)}} />
                </div>

                <button type="submit"> Book Storage </button>
            </form>


        </div>
        </>
     );
}
 
export default BookingForm;