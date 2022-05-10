// import React from 'react';
// import { useState } from 'react';
import Card from "react-bootstrap/Card";
import Popup from '../popup/popup';
import React from 'react';
import {useState, useEffect} from 'react';
import StoragesCard from './DetailCard';

const API_URL = 'https://store58.herokuapp.com/api/storage/unit/'


const Storage = () => {
    const[loading, setLoading] = useState(false)
    const [mystorages, setStorages]= useState([])
    const getStorages= async () => {
        const response= await fetch(`${API_URL}`,
     {
        method:'GET',
        headers:{'Content-Type': 'application/json'

    }})
        const data = await response.json();

        setStorages(data)
        console.log(mystorages)
        setLoading(true)
    }
    useEffect( () => {
        getStorages()
    }, []);

    return (
      <StoragesCard mystorages={mystorages.filter((storage)=>storage.id===3)} />
    )

  
}
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


export default Storage;