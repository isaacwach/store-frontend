  
import { REGISTER_AUSER_FAILED } from "../actions/types" 
import { REGISTER_AUSER_SUCCESS } from "../actions/types" 
import { REGISTER_CUSER_SUCCESS } from "../actions/types"
import { REGISTER_CUSER_FAILED } from "../actions/types"
import { CLIENT_USER_FAILED } from "../actions/types"
import { CLIENT_USER_LOADED } from "../actions/types"
import { LOGIN_FAILED } from "../actions/types"
import { LOGIN_SUCCESS } from "../actions/types"
import { LOGOUT_SUCCESS } from "../actions/types"
import { ADMIN_USER_FAILED } from "../actions/types"
import { ADMIN_USER_LOADED } from "../actions/types"

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
             case ADMIN_USER_LOADED:
                return{
                    ...state,
                    isAuthenticated:true,
                    isAdmin:true,
                     user:action.payload
                }
                case CLIENT_USER_LOADED:
                    return {
                        ...state,
                        isAuthenticated:true,
                        isLoading:false,
                        isClient:false,
                        user:action.payload
                    }
    
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
    
                case ADMIN_USER_FAILED:
                case CLIENT_USER_FAILED:
                case LOGOUT_SUCCESS:
                     localStorage.removeItem('token')
                     return {
                        ...state,
                        token:null,
                         isClient:null,
                        isAuthenticated:false,
                         isLoading:false,
                     }

                default:
        }
        return state;
    }     