// import axios from "axios";
// import {
//     CLIENT_USER_LOADED,
//     CLIENT_USER_FAILED,
//     LOGOUT_SUCCESS,
//     REGISTER_CUSER_SUCCESS,
//     ADMIN_USER_LOADED,
//     ADMIN_USER_FAILED,
//     LOGIN_FAILED,
//     LOGIN_SUCCESS,
//     LOGOUT_SUCCESS,
//     REGISTER_CUSER_SUCCESS,
//     REGISTER_AUSER_FAILED,
//     REGISTER_AUSER_SUCCESS,
//     REGISTER_CUSER_FAILED
// } from "../actions/types"



// export const getClientUser=()=>(dispatch, getState)=>{
//     const token=getState().auth.token
//     const is_client=getState().auth.isClient
// export const getAdminUser=()=>(dispatch, getState)=>{
//     const token=getState().auth.token
//     const is_admin=getState().auth.isAdmin
//     const config={
//         headers:{
//             'Content-type':'application/json'
//         }
//     }

//     if(token && is_client){
//         config.headers['Authorization']=`Token ${token}`  
//     }
//     axios.get('https://store58.herokuapp.com/api/client/dashboard/', config)
//     .then(res =>{
//         dispatch({
//             type:CLIENT_USER_LOADED,
//     if(token && is_admin){
//         config.headers['Authorization']=`Token ${token}`  
//     }
//     axios.get('https://store58.herokuapp.com/api/admin/dashboard/', config)
//     .then(res =>{
//         dispatch({
//             type:ADMIN_USER_LOADED,
//             payload:res.data
//         })
//     }).catch(err =>{
//         dispatch({
//             type:CLIENT_USER_FAILED,
//             type:ADMIN_USER_FAILED
//         })
//     })
// }
    


     

    //   check token and load client user
//     export const getClientUser = ()=>(dispatch, getState)=>{
//         const token=getState().auth.token;
//         const is_client=getState().auth.isClient
//         const config={
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         }

//         if(token && !is_client){
//             config.headers['Authorization']=`Token ${token}`
//         }

//         axios.get('https://store58.herokuapp.com/api/client/dashboard/', config)
//           .then(res =>{
//               dispatch({
//                   type:CLIENT_USER_LOADED,
//                   payload:res.data
//               })
//           }).catch(err => {
//               dispatch({
//                   type:CLIENT_USER_FAILED
//               })
//           })
//     }
        

// export const create_adminuser=({username, email,password, password2})=>(dispatch)=>{
//     const config={
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }
//     const body=JSON.stringify({username, email, password, password2})

//     axios.post('https://store58.herokuapp.com/api/signup/admin/', body, config)
//     .then(res =>{
//         dispatch({
//             type:REGISTER_AUSER_SUCCESS,
//             payload:res.data
//         })
//         console.log(res.data)
//     }).catch(err =>{
//         dispatch({
//             type:REGISTER_AUSER_FAILED
//         })
//         console.log(err.response.data)
//     })

    
// }


// export const create_clientuser=({username, email,password, password2})=>(dispatch)=>{
//     const config={
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }
//     const body=JSON.stringify({username, email, password, password2})

//     axios.post('https://store58.herokuapp.com/api/signup/client/', body, config)
//     .then(res =>{
//         dispatch({
//             type:REGISTER_CUSER_SUCCESS,
//             payload:res.data
//         })
//         console.log(res.data)
//     }).catch(err =>{
//         dispatch({
//             type:REGISTER_CUSER_FAILED
//         })
//         console.log(err.response.data)
//     })

    
// }


// export const login=({username, password})=>(dispatch)=>{
//     const config={
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }
//     const body=JSON.stringify({username, password})

//     axios.post('https://store58.herokuapp.com/api/login/', body, config)
//     .then(response =>{
//         dispatch({
//             type:LOGIN_SUCCESS,
//             payload:response.data
//         })
//     }).catch(err =>{
//         dispatch({
//             type:LOGIN_FAILED
//         })
//     })

// }


// export const logout=()=>(dispatch, getState)=>{
//     const token=getState().auth.token
//     const config={
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }

//     if(token){
//         config.headers['Authorization']= `Token ${token}`
//     }
//     axios.post('https://store58.herokuapp.com/rest-auth/logout/?format=api', null, config)
//     axios.post('https://store58.herokuapp.com/api/logout/', null, config)
//     .then(res =>{
//         dispatch({
//             type:LOGOUT_SUCCESS
//         })
//     }).catch(err =>{
//         console.log(err.response.data)
//     })


// }
// }
// }
