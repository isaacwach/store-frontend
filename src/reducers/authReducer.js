import {
    CLIENT_USER_LOADED,
    CLIENT_USER_FAILED,  
    LOGOUT_SUCCESS, REGISTER_CUSER_SUCCESS,
    REGISTER_FUSER_FAILED,
    REGISTER_FUSER_SUCCESS,
    REGISTER_CUSER_FAILED } from "../actions/types"


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
        case REGISTER_FUSER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isClient:action.payload.user.is_client,
                isLoading:false
            }
        case CLIENT_USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isClient:true,
                user:action.payload
            }


        case REGISTER_CUSER_FAILED:
        case REGISTER_FUSER_FAILED:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isClient:null,
                isAuthenticated:false,
                isLoading:false
            }

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
    }
    return state;
}