import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
import PresentationReducer from "./PresentationReducer";
import RequestsFeedBackReducer from "./RequestsFeedBackReducer";
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from "./userReducer";
import homePageAds from "./homePageAds";
import searchedAdsReducer from "./searchedAdsReducer";
import productsClassificationsReducer from "./productsClassifications";
import adDetailPageReducer from "./adDetailPageReducer";


let persistConfig = {
    key : 'root',
    storage : storage ,
    whitelist : ['user']
}

let reducers= combineReducers({
    presentation : PresentationReducer,
    reqFeedback : RequestsFeedBackReducer,
    user : userReducer,
    homePageAds : homePageAds,
    searchedAds : searchedAdsReducer,
    productsClassifications : productsClassificationsReducer,
    adDetailPage : adDetailPageReducer

});

export default persistReducer(persistConfig, reducers);
