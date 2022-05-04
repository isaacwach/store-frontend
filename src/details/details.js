import React from 'react';
import { useState } from 'react';
import Card from "react-bootstrap/Card";
import Popup from '../popup/popup';


class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      activeItem: {
        image: "",
        size:"",
        price: "",
        description: "",
        categories: "",
      },
      editing: false,
    }
    this.fetchTasks=this.fetchTasks.bind(this)
    
  };

  componentWillMount(){
    this.fetchTasks()
  }

  fetchTasks(){
    console.log("ayzaq")

    fetch('https://store58.herokuapp.com/api/storage/unit/')
    .then(response => response.json())
    .then(data=> 
      this.setState({
        todoList: data
      })
    )
    
  }
  
  render(){
    var tasks = this.state.todoList
    return(
        <>
                <div className="container">
        <div id="list-wrapper">
          {tasks.map(function(task, index){
            return(
              <div key={index} className="task-wrapper flex-wrapper">
                <Card style={{ width: '28rem' }} className="detail-card">
                  <Card.Body>
                    <Card.Title className='card-title'>Storage Details</Card.Title>
                    <Card.Text>Unit size:  <span className="card-span">{task.size}</span></Card.Text>
                    <Card.Text>Unit category: <span className="card-span">{task.categories}</span></Card.Text>
                    <Card.Text>Unit Price: <span className="card-span">{task.price}</span></Card.Text>                 
                    <Card.Text>Unit description: <span className="card-span">{task.description}</span></Card.Text>
                    <Pop></Pop>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
        <div>
          <p>You have not stored with us</p>
        </div>
      </div>
        </>
    )
  }
  
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