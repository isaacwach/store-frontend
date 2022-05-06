import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

const RegisterButton = () => {
    return (
        <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
                <h3>signup as a Client</h3>
                <Link to="/client/signup" className='btn btn-warning'>Signup</Link>
            </div>
            <div className='flex-fill'>
                <h3>signup as an Admin</h3>
                <Link to="/Admin/signup" className='btn btn-warning'>Signup</Link>
            </div>
        </div>
=======
// import { Link } from 'react-router-dom'
 
const RegisterButton = () => {
    return (
        <>
        <div className='spacing'></div>
        <div className='signUp'>
                <h3 className='hero' >WELCOME TO CLASSIC STORE </h3>
               <h3 className='section'>REGISTER WITH US AND GET THE FILL OF OUR SERVICES</h3>
            <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
           
            <div className="card mycard">
                <div className="card-body">
                <img className="card-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcxwj0yCkum1HJtNkWX2_cmndrrVoP_z0pg&usqp=CAU" alt=""></img>
                    <h5 className="card-title"> <h2>Employer/Admin</h2></h5>
                    <p className="card-text"><a href="/admin/signup"> <button className="btn5 btn-warning">Signup</button></a></p>
                </div>
            </div>
                
            </div>
            <div className='flex-fill'>
              
               
            </div>
            <div className="card mycard">
                <div className="card-body">
                <img className="card-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcxwj0yCkum1HJtNkWX2_cmndrrVoP_z0pg&usqp=CAU" alt=""></img>
                    <h5 className="card-title"><h2>Client</h2></h5>
                    <p className="card-text"><a href="/admin/signup">  <a href="/signup"> <button className="btn5 btn-warning">Signup</button></a></a></p>
                </div>
            </div>


        </div>
        

        </div>
        </>
        
        
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab
    )
}

export default RegisterButton