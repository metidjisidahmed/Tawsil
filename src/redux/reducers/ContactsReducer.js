// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_8_NEWS, GET_8_NEWS_ERROR, GET_8_NEWS_LOADING, GET_CONTACTS, GET_CONTACTS_ERROR, GET_CONTACTS_LOADING,
    GET_NEWS, GET_NEWS_ERROR, GET_NEWS_LOADING,
    GET_PRESENTATION_CONTENT,
    GET_PRESENTATION_ERROR,
    GET_PRESENTATION_LOADING
} from "../actions/actionsTypes";

const initialState = {
    data :{},
    loading:true,
    error : null
}

export default function ContactsReducer (state = initialState, action) {
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state,
                data : action.payload,
                error: null,
                loading: false
            }
        case GET_CONTACTS_LOADING :
            return {
                ...state ,
                data : null,
                error: null,
                loading: true
            }
        case GET_CONTACTS_ERROR:
            return {
                ...state ,
                data: null,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

