import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';




const AdminStorageCard = ({prop}) => {
    
    


    return (
        <div className="storageCard1 col-md-2" key={prop.id}>
            <div className="Card">
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
                        <div className="delete">
                            <Link to={`admin/delete/${prop.id}`}><button className="btn" style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}}> Delete </button></Link>
                            {/* <Modal onClose={()=>{setShow(false)}} show={show}/> */}
                        </div>                   
                    </Card.Body>
                </Card>
            </div>
            </div>
      );
}
 
export default AdminStorageCard;