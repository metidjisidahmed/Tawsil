import { combineReducers } from 'redux'

import PresentationReducer from "./PresentationReducer";



let reducers= combineReducers({
    presentation : PresentationReducer

});

export default reducers;
