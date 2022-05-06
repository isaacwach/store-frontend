import {Route, Redirect} from "react-router-dom"
import { useSelector } from "react-redux"
<<<<<<< HEAD
import { Component } from "react"


export const CPrivateRoute=({component:Component, path, ...rest})=>{
=======
import React from "react";
// import { Component } from "react"


export const APrivateRoute=({component:Component, path, ...rest})=>{
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab
    const state=useSelector(state =>state.auth)
    return <Route path={path}
                  {...rest}
                  render={(props)=>{
                      if(state.isLoading){
                          return <h3>Loading....</h3>
<<<<<<< HEAD
                      }else if(!state.isAuthenticated &&  !state.isClient){
=======
                      }else if(!state.isAuthenticated &&  !state.isAdmin){
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab
                          return <Redirect to="/login"/>
                      }else{
                          return <Component {...props}/>
                      }
                  }}/>
    
}



<<<<<<< HEAD
export const FPrivateRoute = ({component:Component, path, ...rest }) => {
=======
export const CPrivateRoute = ({component:Component, path, ...rest }) => {
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab
    const state=useSelector((state) => state.auth)
    return <Route 
      path={path}
      {...rest}
      render ={(props)=>{
        if (state.isLoading){
               return <h2>Loading ....</h2>
        }else if(state.isAuthenticated && !state.isClient){
            return <Component {...props}/>
        }else{    
             return <Redirect to="/login" />
        }

    }
        
    }/>
}