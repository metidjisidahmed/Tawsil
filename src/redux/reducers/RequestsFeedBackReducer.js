// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_PRESENTATION_CONTENT,
    GET_PRESENTATION_ERROR,
    GET_PRESENTATION_LOADING, POST_LOGIN_ERROR, POST_LOGIN_LOADING, POST_SIGNUP_CLIENT_ERROR,
    POST_SIGNUP_CLIENT_LOADING, POST_SIGNUP_TRANSPORTER_ERROR, POST_SIGNUP_TRANSPORTER_LOADING
} from "../actions/actionsTypes";

const initialState = {
    signup : {
        loading : false ,
        error: null
    },
    login : {
        loading : false ,
        error: null
    }
}

export default function RequestsFeedBackReducer (state = initialState, action) {
    switch(action.type){
        case POST_SIGNUP_CLIENT_LOADING || POST_SIGNUP_TRANSPORTER_LOADING:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    loading: true
                }
            }
        case POST_SIGNUP_CLIENT_ERROR || POST_SIGNUP_TRANSPORTER_ERROR:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    loading: false,
                    error: action.payload
                }
            }
        case POST_LOGIN_ERROR :
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    error: action.payload
                }
            }
        case  POST_LOGIN_LOADING:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true
                }
            }
        default: return state
    }
}

