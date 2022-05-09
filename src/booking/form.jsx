import {useState} from "react";
import React from "react";

const BookingForm = () => {

    const [start_date, setStartDate]=useState()
    const [exit_date, setExitDate]=useState()
    const [client_name, setClientName]=useState()
    const [price, setPrice]=useState()
    // eslint-disable-next-line
    const [storage, setStorage]= useState('Drama')
    // eslint-disable-next-line
    const [transport, setTransport]= useState('sieva')
    // eslint-disable-next-line
    const [client, setClent] = useState('felo')
    const [types_of_goods, setTypeOfGoods]=useState('')
    const [description, setDescription]=useState('')

    const API_URL = 'https://store58.herokuapp.com/api/booking/'

    const [isPending, setPending]= useState(false)

    const handleSubmit= (e) => {
        e.preventDefault();
        const booking= {types_of_goods, start_date, exit_date, description, client_name, price, storage, transport, client};
        fetch(`${API_URL}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(booking)}
            )
            .then( ()=> {
            console.log('New booking made!');
            console.log(JSON.stringify(booking))
            setPending(true)
            // setPending(false)
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
                onChange={(e)=>{setExitDate(e.target.value)}}
                 />
                </div>

                <div className="form-group">
                    <label>Client name</label>
                    <input className="form-control"
                    type="text"
                    required
                    value={client_name}
                    onchange={(e=>{setClientName(e.target.value)})}
                     />
                     </div>

                {/* <div className="form-group">
                <label> Storage * </label>
                <input  className="form-control"
                type="text"
                required
                value={unit}
                onchange={(e)=>{setUnit(e.target.value)}} />
                </div> */}

                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control"
                    type="number"
                    required
                    value={price}
                    onchange={(e=>{setPrice(e.target.value)})}
                     />
                     </div>


                <div className="form-group">
                <label> Type of goods: * </label>
                <input  className="form-control"
                type="text"
                required
                value={types_of_goods}
                onChange={(e)=>{setTypeOfGoods(e.target.value)}} />
                </div>
               
               <div className="form-group">
                <label> Description * </label>
                <textarea className="form-control"
                type="text"
                required
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}} />
                </div>

                {!isPending && <button type="submit"> Book Storage </button>}
                {isPending && <button> Booked</button>}
                {/* {isPending && <button>Complete!</button>} */}
            </form>
        </div>
        </>
     );
}
 
export default BookingForm;