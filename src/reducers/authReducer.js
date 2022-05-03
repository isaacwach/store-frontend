// import {
//     CLIENT_USER_LOADED,
//     CLIENT_USER_FAILED,  
//     ADMIN_USER_LOADED,
//     ADMIN_USER_FAILED,
//     LOGIN_SUCCESS,
//     LOGIN_FAILED, 
//     LOGOUT_SUCCESS,
//     REGISTER_CUSER_SUCCESS,
//     REGISTER_AUSER_FAILED,
//     REGISTER_AUSER_SUCCESS,
//     REGISTER_CUSER_FAILED } from "../actions/types"

// import { CLIENT_USER_FAILED } from "../actions/types"  
import { REGISTER_AUSER_FAILED } from "../actions/types" 
import { REGISTER_AUSER_SUCCESS } from "../actions/types" 
import { REGISTER_CUSER_SUCCESS } from "../actions/types"
import { REGISTER_CUSER_FAILED } from "../actions/types"

    const initialState={
        token:localStorage.getItem('token'),
        isAuthenticated:false,
        isClient:null,
        isLoading:false,
        user:null
    }     

    
    export const authReducer=(state=initialState, action)=>{
        switch(action.type){
            case REGISTER_CUSER_SUCCESS:
            case REGISTER_AUSER_SUCCESS:
                localStorage.setItem('token', action.payload.token)
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated:true,
                    isClient:action.payload.user.is_client,
                    isLoading:false
                }
            // case CLIENT_USER_LOADED:
            //     return{
            //         ...state,
            //         isAuthenticated:true,
            //         isClient:true,
            //         user:action.payload
            //     }
                // case FREELANCE_USER_LOADED:
                //     return {
                //         ...state,
                //         isAuthenticated:true,
                //         isLoading:false,
                //         isClient:false,
                //         user:action.payload
                //     }
    
            case LOGIN_SUCCESS:
                localStorage.setItem('token', action.payload.token)
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated:true,
                    isLoading:false,
                    isClient:action.payload.is_admin,
                    
                }
    
            case REGISTER_CUSER_FAILED:
            case REGISTER_AUSER_FAILED:
            case LOGIN_FAILED:
                localStorage.removeItem('token')
                return{
                    ...state,
                    token:null,
                    isClient:null,
                    isAuthenticated:false,
                    isLoading:false
                }
    
                // case CLIENT_USER_FAILED:
                // case FREELANCE_USER_FAILED:
                // case LOGOUT_SUCCESS:
                //     localStorage.removeItem('token')
                //     return {
                //         ...state,
                //         token:null,
                //         isClient:null,
                //         isAuthenticated:false,
                //         isLoading:false,
                //     }

                default:
        }
        return state;
    }     