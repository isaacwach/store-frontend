import React from 'react'
import Card from "react-bootstrap/Card";

// function Details() {
//   return (
//     <div>
//         <h1>Storage Details</h1>
//     </div>
//   )
// }

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
      <div className="container">
       

        <div id="list-wrapper">
          {tasks.map(function(task, index){
            return(
              <div key={index} className="task-wrapper flex-wrapper">
                <Card style={{ width: '22rem' }}>
                  <Card.Body>
                    <Card.Title className='card-title'>Storage Details</Card.Title>
                    <Card.Text>Unit size:  <span className="card-span">{task.size}</span></Card.Text>
                    <Card.Text>Unit category: <span className="card-span">{task.categories}</span></Card.Text>
                    <Card.Text>Unit Price: <span className="card-span">{task.price}</span></Card.Text>                 
                    <Card.Text>Unit description: <span className="card-span">{task.description}</span></Card.Text>
                    <Card.Link href="#">Exit storage</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  
}

export default Storage;