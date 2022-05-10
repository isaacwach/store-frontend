import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const AdminStorageCard = (props) => {
    
    
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
                    <Link to={`admin/delete/${storage.id}`}><button className="btn btn-danger" style={{borderRadius:"12px"}}> Delete  </button></Link>
                </Card.Body>
            </Card> 
                
                
         </div>
        ))
    }

    </>
    )
        
       
}
 
export default AdminStorageCard;