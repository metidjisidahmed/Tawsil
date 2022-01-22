// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_PRESENTATION_CONTENT,
    GET_PRESENTATION_ERROR,
    GET_PRESENTATION_LOADING,
    GET_PROFILE_DETAILS, GET_PROFILE_DETAILS_ERROR, GET_PROFILE_DETAILS_LOADING,
    LOGOUT,
    POST_CREATE_REQUEST_DELIVERY,
    POST_CREATE_REQUEST_DELIVERY_LOADING,
    POST_LOGIN, POST_LOGIN_LOADING,
    POST_SIGNUP_CLIENT,
    POST_SIGNUP_TRANSPORTER
} from "../actions/actionsTypes";

const initialState = {
    data : JSON.parse(localStorage.getItem("account")) ?  JSON.parse(localStorage.getItem("account")) : {},
    error : null,
    loading : false
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
        case POST_SIGNUP_TRANSPORTER :
            localStorage.setItem("transporter_id", action.payload.user_id);
            localStorage.setItem("user_id", action.payload.client_id);
            localStorage.setItem("trajets" , action.payload?.trajets);
            localStorage.setItem("account" , JSON.stringify(action.payload))
            return {
                ...state,
                data: action.payload
            }
        case POST_LOGIN:
            console.log("GETTING PROFILE INFO !");
            localStorage.setItem("user_id", action.payload.profile.user_id);
            if(  action.payload.profile.client_id){
                localStorage.setItem("client_id", action.payload.profile.client_id);
            }else{
                localStorage.setItem("transporter_id", action.payload.profile.transporter_id);
            }
            localStorage.setItem("account" , JSON.stringify(action.payload))

            return {
                ...state,
                data: action.payload
            }
        case GET_PROFILE_DETAILS:
            console.log("GETTING PROFILE INFO !");
            console.log("ACTION =", action.payload);
            localStorage.setItem("account", JSON.stringify(action.payload) );
            return {
                ...state,
                data: action.payload,
                loading : false,
                error : null
            }
        // case POST_CREATE_REQUEST_DELIVERY:
        //     let asTranpsorterStatus = ["TRANSPORTER_POSTULING", "TRANSPORTER_CONFIRMING", "TRANSPORTER_REJECTING"];
        //     let asClientStatus = ["USER_ACCEPTING", "USER_REJECTING"];
        case LOGOUT:
            localStorage.removeItem("transporter_id");
            localStorage.removeItem("user_id");
            localStorage.removeItem("client_id");
            localStorage.removeItem("account");
            return {
                data :{}
            };
        case GET_PROFILE_DETAILS_LOADING:
            return {
                ...state ,
                loading : true ,
                error : null
            }
        case GET_PROFILE_DETAILS_ERROR:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default: return state
    }
}

