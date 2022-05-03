import React, {useEffect} from 'react'
import {getClientUser} from "../actions/auth"
import {useDispatch} from "react-redux"

 function ClientDashboard() {
     const dispatch=useDispatch()
     useEffect(()=>{
         dispatch(getClientUser())
     }, [dispatch])
    return (
        <div className='container mt-5'>
             welcome! to Classic Storez
        </div>
    )
}

export default ClientDashboard;