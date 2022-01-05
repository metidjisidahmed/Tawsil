// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_PRESENTATION_CONTENT,
    GET_PRESENTATION_ERROR,
    GET_PRESENTATION_LOADING,
    GET_PRODUCTS_CLASSES, GET_PRODUCTS_CLASSES_ERROR, GET_PRODUCTS_CLASSES_LOADING
} from "../actions/actionsTypes";

const initialState = {
    data :{},
    loading:true,
    error : null
}

export default function productsClassificationsReducer (state = initialState, action) {
    switch(action.type){
        case GET_PRODUCTS_CLASSES:
            return {
                ...state,
                data : action.payload,
                error: null,
                loading: false
            }
        case GET_PRODUCTS_CLASSES_LOADING :
            return {
                ...state ,
                data : null,
                error: null,
                loading: true
            }
        case GET_PRODUCTS_CLASSES_ERROR:
            return {
                ...state ,
                data: null,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

