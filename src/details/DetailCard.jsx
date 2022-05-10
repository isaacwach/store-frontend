import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Popup from '../popup/popup';

import {useState, useEffect} from 'react';

const StoragesCard = (props) => {
    const mystorages=props.mystorages
    return (
        <>
            {mystorages.map((mystorage) => (
                <div className="row details-row">
                    <div className="mystorage col-md-6" key={mystorage.id}>
                        <Card style={{ width: '22rem', fontSize: '22px'}}>
                        <Card.Body>
                            <Card.Title id="black-title" >Unit: {mystorage.id}</Card.Title>
                            <Card.Text>
                            <p>Size: {mystorage.size} m²</p>
                            <p>Price: {mystorage.price}</p>
                            <p>Category: {mystorage.categories}</p>
                            <p>Status: {mystorage.status}</p>
                            <p>Description: {mystorage.description}</p>
                            </Card.Text>
                            <Pop></Pop>
                        </Card.Body>
                    </Card> 
                        
                    </div>
                    <div className="col-md-6">
                        <img className="detail-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccBKFFCxhQNkqfV4C-Bvft-BESQpHKd4WHQ&usqp=CAU"></img>
                    </div>
                </div>
            ))
        }

              

                </>

    
      );
}
 
export default StoragesCard;

const Pop = (props) =>{
    const [buttonPopup, setButtonPopup]=useState(false);
    return (
      <>
      <button className="btn-details" onClick={ () => setButtonPopup(true)}>Exit storage</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
        <div className="pop-form">
            <form className="form1">
                <h3>Fill in Your Details</h3>
                <label>Fullname:<br/>
                    <input className="fname" type="text" placeholder="Enter your fullname"/>
                </label><br/>
                <label>Move in date:<br/>
                    <input id='date' type="date" />
                </label><br/>
                <label>Expected move our date:<br/>
                    <input id='date' type="date" />
                </label>
                <p>Do want want your goods delivered?</p>
                <div className='radio'>
                  <input type="radio" value="Male" name="gender" /> Yes
                  <input type="radio" value="Female" name="gender" /> No
                </div>
                <div className="form-buttons"> 
                    <button className="btn-btn1">Submit</button>
                    <button className="btn-btn2" onClick={() => props.setTrigger(false)} >Close</button>
                </div>
            </form>
  
        </div>
                         
      </Popup>
      </>
    );
  }