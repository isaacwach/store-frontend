import React from 'react';
import {Card} from 'react-bootstrap';
import {useState} from 'react';



const AdminStorageCard = ({prop}) => {
    const [show, setShow]=useState(false)
    return (
        <div className="storageCard" key={prop.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Unit: {prop.id}</Card.Title>
                        <Card.Text>
                        <p>Size: {prop.size} m^2</p>
                        <p>Price: {prop.price}</p>
                        <p>Category: {prop.categories}</p>
                        <p>Status: {prop.status}</p>
                        <p>Description: {prop.description}</p>
                        </Card.Text>
                        {/* <div className="snap">
                            <button  onClick={()=>{setShow(true)}} className="btn" style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}}> Book now </button>
                            <Modal onClose={()=>{setShow(false)}} show={show}/>
                        </div>                    */}
                    </Card.Body>
                </Card>
            </div>
      );
}
 
export default AdminStorageCard;