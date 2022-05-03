import React from 'react'
// import { Link } from 'react-router-dom'
 
const RegisterButton = () => {
    return (
        <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
                <h3>signup as an employer/Admin</h3>
                <a href="/admin/signup"> <button className="btn3">Signup</button></a>
            </div>
            <div className='flex-fill'>
                <h3>signup as a Client</h3>
                <a href="/signup"> <button className="btn3">Signup</button></a>
            </div>
            <br />
            <br />
            <br />

        </div>
        
    )
}

export default RegisterButton