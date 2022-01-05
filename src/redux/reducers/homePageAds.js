// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_8_ADS, GET_8_ADS_ERROR, GET_8_ADS_LOADING

} from "../actions/actionsTypes";

const initialState = {
    data : [],
    loading : true ,
    error : null
}

export default function homePageAds (state = initialState, action) {
    switch(action.type){
        case GET_8_ADS:
            return {
                ...state,
                data : action.payload,
                loading: false ,
                error: null
            }
        case GET_8_ADS_LOADING:
            return {
                ...state,
                error: null,
                loading: action.payload
            }
        case GET_8_ADS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}

