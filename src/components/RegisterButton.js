import React from 'react'
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
    )
}

export default RegisterButton