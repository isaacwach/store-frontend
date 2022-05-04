import React from 'react'
// import { Link } from 'react-router-dom'
 
const RegisterButton = () => {
    return (
        <div className='signUp'>
                <h3 className='hero' >WELCOME TO CLASSIC STORE </h3>
               <h3 className='section'>REGISTER WITH US AND GET THE FILL OF OUR SERVICES</h3>
            <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
           
            <div className="card mycard">
                <div className="card-body">
                <img className="card-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcxwj0yCkum1HJtNkWX2_cmndrrVoP_z0pg&usqp=CAU" alt=""></img>
                    <h5 className="card-title"> <h3>signup as an employer/Admin</h3></h5>
                    <p className="card-text"><a href="/admin/signup"> <button className="btn3">Signup</button></a></p>
                </div>
            </div>
                
            </div>
            <div className='flex-fill'>
              
               
            </div>
            <div className="card mycard">
                <div className="card-body">
                <img className="card-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcxwj0yCkum1HJtNkWX2_cmndrrVoP_z0pg&usqp=CAU" alt=""></img>
                    <h5 className="card-title"><h3>signup as a Client</h3></h5>
                    <p className="card-text"><a href="/admin/signup">  <a href="/signup"> <button className="btn3">Signup</button></a></a></p>
                </div>
            </div>


        </div>
        

        </div>
        
        
    )
}

export default RegisterButton