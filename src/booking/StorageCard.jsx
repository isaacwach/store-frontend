import React from 'react';
import {Card} from 'react-bootstrap';
import {useState} from 'react';
import BookingForm from './form.jsx';
import TransportForm from '../transport/transport';
// import Modal from './booking.js'
// categories: "large"
// description: "perishables"
// id: 1
// price: 300
// size: 33
// status: "not occupied"

const Modal= props => {
    if(!props.show) {
        return null
    }
    const [bravo, setBravo]=useState(false)

    return(
        <div className='modal' onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 id='kichwangumu' >Book this storage unit</h3>
                </div>
                <div className="modal-body">
                    {!bravo && <div><BookingForm /></div>}
                    {bravo && <div><TransportForm /></div>}
                </div>
                <div classname="modal-footer">
                    <h4>Would you like transport with this order?</h4>

                <button onClick={()=>setBravo(true)} > Yes </button>
                <button onClick={props.onClose} > No </button>
                </div>
            </div>
        </div>
        
    )
}


const StorageCard = ({prop}) => {
    const [show, setShow]=useState(false)
    return (
        <>
        <div className="storage col-md-4 justify-content-center">
            

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Unit: {prop.id}</Card.Title>
                        <Card.Text>
                        <p>Size: {prop.size} m²</p>
                        <p>Price: {prop.price}</p>
                        <p>Category: {prop.categories}</p>
                        <p>Status: {prop.status}</p>
                        <p>Description: {prop.description}</p>
                        </Card.Text>
                        <div className="snap">
                            <button  onClick={()=>{setShow(true)}} className="btn" style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}}> Book now </button>
                            <Modal onClose={()=>{setShow(false)}} show={show}/>
                        </div>                   
                    </Card.Body>
                </Card>
                </div>
              

                </>

    
      );
}
 
export default StorageCard;