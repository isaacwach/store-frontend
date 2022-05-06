<<<<<<< HEAD
import { combineReducers } from "redux";
import {authReducer} from "./authReducer"

=======

  
import { combineReducers } from "redux";
import {authReducer} from "./authReducer"
 
>>>>>>> f08084c7313135276dc2a6bf6c4e4c6ca3f6abab

const rootReducer=combineReducers({
    auth:authReducer,
})


export default rootReducer