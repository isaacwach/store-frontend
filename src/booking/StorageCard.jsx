import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import {useState} from 'react';


// const Modal= props => {
//     if(!props.show) {
//         return null
//     }
//     const [bravo, setBravo]=useState(false)

//     return(
//         <div className='modal' onClick={props.onClose} >
//             <div className="modal-content" onClick={e => e.stopPropagation()}>
//                 <div className="modal-header">
//                     <h3 id='kichwangumu' >Book this storage unit</h3>
//                 </div>
//                 <div className="modal-body">
//                     {!bravo && <div><BookingForm /></div>}
//                     {bravo && <div><TransportForm /></div>}
//                 </div>
//                 <div classname="modal-footer">
//                     <h4>Would you like transport with this order?</h4>

//                 {/* <button onClick={()=>setBravo(true)} > Yes </button> */}
//                 {/* <button onClick={props.onClose} > No </button> */}
//                 </div>
//             </div>
//         </div>
        
//     )
// }


const StorageCard = (props) => {
    const storages=props.storages
    return (
        <>
            {storages.map((storage) => (
                <div className="storage col-md-4" key={storage.id}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title id="black" >Unit: {storage.id}</Card.Title>
                        <Card.Text>
                        <p>Size: {storage.size} m²</p>
                        <p>Price: {storage.price}</p>
                        <p>Category: {storage.categories}</p>
                        <p>Status: {storage.status}</p>
                        <p>Description: {storage.description}</p>
                        </Card.Text>
                        <Link to={`booking/order/${storage.id}`}><button className="btn" style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}}> Book now </button></Link>
                    </Card.Body>
                </Card> 
                    
                    
             </div>
            ))
        }

              

                </>

    
      );
}
 
export default StorageCard;