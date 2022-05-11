import React, {useState, useEffect } from 'react';
import TransportForm from '../transport/transport';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';



const Order = () => {
    const Modal= props => {
    if(!props.show) {
        return null
    }
    // const [bravo, setBravo]=useState(false)

    return(
        <div className='modal' onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header text-center">
                    <h3 className="text-center" >Transport for unit {id}</h3>
                </div>
                <div className="modal-body">
                    <div><TransportForm /></div>
                </div>
                <div classname="modal-footer">
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
        
    )
}

        const [iftransport, setifTransport]= useState(false)
        const [promptTp, setPromptTp]= useState(true) 

        const { id }= useParams();
        const API_URL = `https://store58.herokuapp.com/api/unit/unit-id/${id}`

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

    const [start_date, setStartDate]=useState()
    const [exit_date, setExitDate]=useState()
    const [client_name, setClientName]=useState()
    const [price, setPrice]=useState()
    const [storage, setStorage]= useState('')
    const [transport, setTransport]= useState()
    const [client, setClent] = useState('felo')
    const [types_of_goods, setTypeOfGoods]=useState('')
    const [description, setDescription]=useState('')

    const Booking_URL = 'https://store58.herokuapp.com/api/booking/'

    const [isPending, setPending]= useState(false)

    const handleSubmit= (e) => {
        e.preventDefault();
        const booking= {types_of_goods, start_date, exit_date, description, client_name, price, storage, transport, client};
        fetch(`${Booking_URL}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(booking)}
            )
            .then( ()=> {
            console.log('New booking made!');
            console.log(JSON.stringify(booking))
            setPending(true)
        })
    }
    const [show, setShow]=useState(false)


        
    return ( 
        <>
    <div className="spacing" >

    </div>

        <div>
        <Modal  onClose={()=>setShow(false)} show={show} />

        </div>
    <div className="container">
        <div className="row">

    <div className="Booking-Form col-md-6">


        <form onSubmit={handleSubmit} >
        <h3 className="text-center"> Book Storage Unit: {id} </h3>
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

             <div className="form-group" style={{"display": "none"}} >
            <label> Storage Unit </label>
            <input  className="form-control"
            type="text"
            required
            value={storages.id}/>
            </div> 

            <div className="form-group">
                <label>Price</label>
                <input className="form-control"
                type="number"
                required
                value={storages.price}
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
        
            {!isPending && <button type="submit" className="btn btn10 mt-4"> Book Storage </button>}
            {isPending && <button className="btn btn-primary"> Booked</button>}
        </form>
        {promptTp && <div className="text-center" > <h3> Would you like transport for this booking?</h3>
            <button className="btn" style={{backgroundColor:"rgb(235, 173, 18)"}}  onClick={()=>setPromptTp(false) }> No </button>

            <div className="Booking-Form spacing4">

    <button className="btn" onClick={()=>setShow(true)} >Yes</button>
    </div>
        </div>}

        </div>


       
        </div>
        </div>
        <div>

        </div>
       
        <div className="spacing2">

        </div>
        </>

    );
    }

 
export default Order;