import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminStorageCard from './AdminStorageCard';
import {useState, useEffect} from 'react';




const Admin = () => {
    const [storages, setStorages]= useState([])
    const getStorages= async () => {

        const response= await fetch(`${API_URL}`,
     {
        method:'GET',
        headers:{'Content-Type': 'application/json'

    }})
        const data = await response.json();

        setStorages(data)
        console.log(storages)
    }
    useEffect( () => {
        getStorages()
    }, []);

    const [isPending, setPending]=useState(true)
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
                setPending(false)

                console.log(JSON.stringify(storage))
            })
        }
    return ( 
        <>

        <div className="spacing3" >
            
            <div className="welcome  spacing4 ">
               <h1> WELCOME TO ADMIN PAGE</h1>
            </div>
           
        </div>





        <div className='storageForm1'>
            
            <form onSubmit={handleSubmit} className='spacing4' >
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

                    
                    { isPending && <button type='submit'  className='btn'>Create Storage</button>}
                    {!isPending && <button className='btn'  style={{backgroundColor:"rgb(235, 173, 18)",borderRadius:"12px"}}>Storage Created</button>}
            </form>

        </div>
        <div className='spacing4' ></div>
<div className="units">
    <div className="container">
        <div className="row">

        <AdminStorageCard storages={storages} />
        </div>


    </div>
</div>
<div className="spacing3"></div>

        </>
     );
     
}
 
export default Admin;



