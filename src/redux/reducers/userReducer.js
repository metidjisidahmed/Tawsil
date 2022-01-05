// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_PRESENTATION_CONTENT,
    GET_PRESENTATION_ERROR,
    GET_PRESENTATION_LOADING, POST_LOGIN,
    POST_SIGNUP_CLIENT, POST_SIGNUP_TRANSPORTER
} from "../actions/actionsTypes";

const initialState = {
    data : {}
}

export default function userReducer (state = initialState, action) {
    switch(action.type){
        case POST_SIGNUP_CLIENT:
            localStorage.setItem("user_id", action.payload.user_id);
            localStorage.setItem("client_id", action.payload.client_id);
            return {
                ...state,
                data : action.payload,

            }
        case POST_SIGNUP_TRANSPORTER:
            localStorage.setItem("transporter_id", action.payload.user_id);
            localStorage.setItem("user_id", action.payload.client_id);
            localStorage.setItem("trajets" , action.payload?.trajets)
            return {
                ...state,
                data: action.payload
            }
        case POST_LOGIN:
            localStorage.setItem("user_id", action.payload.user_id);
            if(  action.payload.client_id){
                localStorage.setItem("client_id", action.payload.client_id);
            }else{
                localStorage.setItem("transporter_id", action.payload.transporter_id);
            }
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}

