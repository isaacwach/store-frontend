import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState} from 'react';
import StorageUnits from './Storages';
import DeleteUnits from './AdminDelete';




const Admin = () => {
    const API_URL = 'https://store58.herokuapp.com/api/storage/unit/'
    const [description, setDescription]=useState('')
    const [size,setSize]=useState('')
    const [price,setPrice]=useState('')
    const [status,setStatus]=useState('')
    const [categories,setCategories]=useState('')
    const handleSubmit= (e) => {
            e.preventDefault();
            const storage= {description,size,price,status,categories};

            fetch(`${API_URL}`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(storage)}
                )
                .then( ()=> {
                console.log('New storage made!');
                console.log(JSON.stringify(storage))
            })
        }
    return ( 
        <>

        <div>
            
            <div className="welcome">
                WELCOME TO ADMIN PAGE
            </div>
            {/* <div className="col-md-6"> 

                    <img className="shelves" src="images/images/admin-office-binder-wooden-desk-table-colored-pencil-pencils-pen-notebook-paper-79046621.jpg" alt=""></img>
                </div> */}
        </div>





        <div className='storageForm1'>
            <form onSubmit={handleSubmit}>
                <h2 id="create">Create New Storage</h2>
                <div className='form-group'>
                    <label>Description</label>
                    <input className='form-control'
                    type='text' 
                    required
                    value={description}
                    onChange={
                        (e)=>{
                            setDescription(e.target.value)
                        }
                    }
                    
                    />
                </div>

            <div className='form-group'>
                    <label>Size</label>
                    <input className='form-control'
                    type='number' 
                    required
                    value={size}
                    onChange={
                        (e)=>{
                            setSize(e.target.value)
                        }
                    }
                    
                    />
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input className='form-control'
                    type='number' 
                    required
                    value={price}
                    onChange={
                        (e)=>{
                            setPrice(e.target.value)
                        }
                    }
                    
                    />
                </div>
                <div className='form-group'>
                    <label>Status</label>
                    <input className='form-control'
                    type='text' 
                    required
                    value={status}
                    onChange={
                        (e)=>{
                            setStatus(e.target.value)
                        }
                    }
                    
                    />
                </div>
                <div className='form-group'>
                    <label>Categories</label>
                    <input className='form-control'
                    type='text' 
                    required
                    value={categories}
                    onChange={
                        (e)=>{
                            setCategories(e.target.value)
                        }
                    }
                    
                    />
                </div>

                    
                    <button type='submit' >Create Storage</button>
            </form>

        </div>
<div className="units">
    <StorageUnits/>

</div>

        </>
     );
     
}
 
export default Admin;



