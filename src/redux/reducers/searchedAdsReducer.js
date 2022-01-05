// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_ADS_FROM_TO, GET_ADS_FROM_TO_ERROR, GET_ADS_FROM_TO_LOADING,
    GET_PRESENTATION_CONTENT,
    GET_PRESENTATION_ERROR,
    GET_PRESENTATION_LOADING
} from "../actions/actionsTypes";

const initialState = {
    data :{},
    loading:true,
    error : null
}

export default function searchedAdsReducer (state = initialState, action) {
    switch(action.type){
        case GET_ADS_FROM_TO:
            return {
                ...state,
                data : action.payload,
                error: null,
                loading: false
            }
        case GET_ADS_FROM_TO_LOADING :
            return {
                ...state ,
                data : null,
                error: null,
                loading: true
            }
        case GET_ADS_FROM_TO_ERROR:
            return {
                ...state ,
                data: null,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

