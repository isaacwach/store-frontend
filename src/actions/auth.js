import axios from "axios";
import {
    CLIENT_USER_LOADED,
    CLIENT_USER_FAILED,
    REGISTER_CUSER_SUCCESS,
    REGISTER_CUSER_FAILED
} from "../actions/types"



export const getClientUser=()=>(dispatch, getState)=>{
    const token=getState().auth.token
    const is_client=getState().auth.isClient
    const config={
        headers:{
            'Content-type':'application/json'
        }
    }

    if(token && is_client){
        config.headers['Authorization']=`Token ${token}`  
    }
    axios.get('http://127.0.0.1:8000/api/client/dashboard/', config)
    .then(res =>{
        dispatch({
            type:CLIENT_USER_LOADED,
            payload:res.data
        })
    }).catch(err =>{
        dispatch({
            type:CLIENT_USER_FAILED
        })
    })
}

        

export const create_clientuser=({username, email,password, password2})=>(dispatch)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({username, email, password, password2})

    axios.post('http://127.0.0.1:8000/api/signup/client/', body, config)
    .then(res =>{
        dispatch({
            type:REGISTER_CUSER_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
    }).catch(err =>{
        dispatch({
            type:REGISTER_CUSER_FAILED
        })
        console.log(err.response.data)
    })

    
}






