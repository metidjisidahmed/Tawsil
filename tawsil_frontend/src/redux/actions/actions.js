import * as Actiontypes from "./actionsTypes";
import * as Endpoints from "../endpoints";
import localStorage from "redux-persist/es/storage";
export const getPresentationContentLoading=()=>{
    return{
        type: Actiontypes.GET_PRESENTATION_LOADING
    }
}

export const getPresentationError=(err)=>{
    return{
        type : Actiontypes.GET_PRESENTATION_ERROR,
        payload: err
    }
}

export const getPresentation=(content)=>{
    return{
        type: Actiontypes.GET_PRESENTATION_CONTENT,
        payload: content
    }
}

export const fetchGetPresentation=()=>(dispatch)=>{
    dispatch(getPresentationContentLoading());
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return fetch(Endpoints.ENDPOINT_GET_PRESENTATION , {
        headers : headers,
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => {
            if(response.success){
                dispatch(getPresentation(response.data))
            }else{
                dispatch(getPresentationError(response.error))
            }
        })
        .catch(error => dispatch(getPresentationError(error.message)));
}


export const postSignUpClientLoading=()=>{
    return{
        type: Actiontypes.POST_SIGNUP_CLIENT_LOADING
    }
}

export const postSignupClientError=(err)=>{
    return{
        type : Actiontypes.POST_SIGNUP_CLIENT_ERROR,
        payload: err
    }
}

export const postSignupClient=(content)=>{
    return{
        type: Actiontypes.POST_SIGNUP_CLIENT,
        payload: content
    }
}

export const postSignUpTransporterLoading=()=>{
    return{
        type: Actiontypes.POST_SIGNUP_TRANSPORTER_LOADING
    }
}

export const postSignupTransporterError=(err)=>{
    return{
        type : Actiontypes.POST_SIGNUP_TRANSPORTER_ERROR,
        payload: err
    }
}

export const postSignupTransporter=(content)=>{
    return{
        type: Actiontypes.POST_SIGNUP_TRANSPORTER,
        payload: content
    }
}


export const fetchSignupClient=(data)=>(dispatch)=>{

    return  new Promise((resolve , reject)=>{
        dispatch(postSignUpClientLoading());
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_POST_SIGNUP_CLIENT, {
            headers : headers,
            method : "POST",
            body: JSON.stringify(data)
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(postSignupClient(response.data)); resolve("Done successfully !")
                }else{
                    dispatch(postSignupClientError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(postSignupClientError(error.message)); reject(error.message)});
    })


}


export const fetchSignupTransporter=(data)=>(dispatch)=>{

    return new Promise((resolve, reject) => {

        dispatch(postSignUpTransporterLoading());
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_POST_SIGNUP_TRANSPORTER, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success) {
                    dispatch(postSignupTransporter(response.data));
                    resolve("Done Successfully !")
                }else{
                        dispatch(postSignupTransporterError(response.error)); reject(response.error);
                }
            })
            .catch(error =>{
                dispatch(postSignupTransporterError(error.message));
                reject(error.message);
            });
    });
}


export const get8AdsLoading=()=>{
    return{
        type: Actiontypes.GET_8_ADS_LOADING
    }
}

export const get8AdsError=(err)=>{
    return{
        type : Actiontypes.GET_8_ADS_ERROR,
        payload: err
    }
}

export const get8ADS=(content)=>{
    return{
        type: Actiontypes.GET_8_ADS,
        payload: content
    }
}

export const loginLoading=()=>{
    return{
        type: Actiontypes.POST_LOGIN_LOADING
    }
}

export const loginError=(err)=>{
    return{
        type : Actiontypes.POST_LOGIN_ERROR,
        payload: err
    }
}

export const login=(content)=>{
    return{
        type: Actiontypes.POST_LOGIN,
        payload: content
    }
}


export const fetchLogin=(data)=>(dispatch)=>{
    return new Promise((resolve, reject) => {

        dispatch(loginLoading());
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_LOGIN_USER, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        console.log("RESPONSE ERROR =", response);
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                // CHECK IF TEH ACCOUNT IS NOT DEACTIVATED
                if(response.success){
                    if(response.data.profile.user_account_status=="DEACTIVATED"){
                        throw new Error("Your account is banned !");
                    }
                    dispatch(login(response.data)); resolve("LOGIN Successfully !")
                }else{
                    throw new Error(response.error);
                }

            })
            .catch(error =>{dispatch(loginError(error.message)); reject(error.message)});
    });
}

export const fetchget8Ads=()=>(dispatch)=>{
    dispatch(get8AdsLoading());
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return fetch(Endpoints.ENDPOINT_GET_8_ADS , {
        headers : headers,
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response =>{
            if(response.success){
                dispatch(get8ADS(response.data))
            }else{
                dispatch(get8AdsError(response.error))
            }
        })
        .catch(error => dispatch(get8AdsError(error.message)));
}


export const searchAdsFromToLoading=()=>{
    return{
        type: Actiontypes.GET_ADS_FROM_TO_LOADING
    }
}

export const searchAdsFromToError=(err)=>{
    return{
        type : Actiontypes.GET_ADS_FROM_TO_ERROR,
        payload: err
    }
}

export const searchAdsFromTo=(content)=>{
    return{
        type: Actiontypes.GET_ADS_FROM_TO,
        payload: content
    }
}

export const fetchSearchAdsFromTo=(wilaya_from , wilaya_to)=>(dispatch)=>{
    dispatch(searchAdsFromToLoading());
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return fetch(Endpoints.ENDPOINTS_SEARCH_ADS_FROM_TO + new URLSearchParams({
        wilaya_from: wilaya_from,
        wilaya_to: wilaya_to,
    }) , {
        headers : headers,
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response =>{
            if(response.success){
                dispatch(searchAdsFromTo(response.data))
            }else{
                dispatch(searchAdsFromToError(response.error))
            }
        })
        .catch(error => dispatch(searchAdsFromToError(error.message)));
}

export const getProductsClassesLoading=()=>{
    return{
        type: Actiontypes.GET_PRODUCTS_CLASSES_LOADING
    }
}

export const getProductsClasses=(data)=>{
    return{
        type : Actiontypes.GET_PRODUCTS_CLASSES,
        payload : data
    }
}

export const getProductsClassesError=(err)=>{
    return{
        type : Actiontypes.GET_PRODUCTS_CLASSES_ERROR,
        payload: err
    }
}

export const fetchGetProductClasses=()=>(dispatch)=>{
    dispatch(getProductsClassesLoading());
    return new Promise((resolve , reject)=>{
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINTS_GET_ADS_CLASSES)
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(getProductsClasses(response.data)); resolve();
                }else{
                    dispatch(getProductsClassesError(response.error)); reject(response.error);
                }
            })
            .catch(error =>{dispatch(getProductsClassesError(error.message)); reject(error.message);});
    })

}


const postAdLoading =()=>{
    return{
        type: Actiontypes.POST_AD_LOADING
    }
}
const postAdError=(err)=>{
    return{
        type : Actiontypes.POST_AD_ERROR,
        payload : err
    }
}
const postAd=(data)=>{
    return{
        type : Actiontypes.POST_AD,
        payload : data
    }
}

export const fetchPostAd=(data)=>(dispatch)=>{

    return  new Promise((resolve , reject)=>{
        dispatch(postAdLoading());
        let dataFormData = new FormData();
        let dataKeys = Object.keys(data);
        dataKeys.forEach((key)=>{
            dataFormData.append(key, data[key]);
        })
        return fetch(Endpoints.ENDPOINT_POST_AD, {
            method : "POST",
            body:dataFormData
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(postAd(response.data)); resolve({ message : "Your ad is posted successfully !" , id : response.data.ad_id})
                }else{
                    dispatch(postAdError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(postAdError(error.message)); reject(error.message)});
    })
}


export const getAdById=(data)=>{
    return{
        type : Actiontypes.GET_AD_BY_ID,
        payload : data
    }
}

export const getAdByIdLoading=()=>{
    return{
        type : Actiontypes.GET_AD_BY_ID_LOADING,
    }
}

export const getAdByIdError=(err)=>{
    return{
        type : Actiontypes.GET_AD_BY_ID_ERROR,
        payload: err
    }
}

export const fetchGetAdById=(id)=>(dispatch)=>{

    return  new Promise((resolve , reject)=>{
        dispatch(getAdByIdLoading());
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_GET_AD_BY_ID + new URLSearchParams({
            ad_id : id
        })  , {
            headers : headers,
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                // CHECK IF TEH OWNER IS DEATIVATED

                // CHECK IF ITS NOT ACTIVATED

                if(response.success){
                    localStorage.getItem("user_id")
                        .then(userId=>{
                            console.log("USER ID =", userId);
                            if(response.data.user_id ==userId){
                                dispatch(getAdById(response.data));
                                resolve();
                            }else{
                                if(response.data.user_account_status=="DEACTIVATED"){
                                    dispatch(getAdByIdError("The Ad owner is Deactivated !"));
                                    reject("The Ad owner is Deactivated !");
                                }else if (response.data.ad_status=="ARCHIVED"){
                                    dispatch(getAdByIdError("The Ad is Archived !"));
                                    reject("The Ad is Archived!");
                                }else if(response.data.ad_status=="DEACTIVATED"){
                                    dispatch(getAdByIdError("The Ad is Deactivated !"));
                                    reject("The Ad is Deativated!");
                                }else{
                                dispatch(getAdById(response.data));
                                resolve();
                                }
                            }

                        })
                }else{
                    dispatch(getAdByIdError(response.error));
                    reject(response.error);
                }
            })
            .catch(error => dispatch(getAdByIdError(error.message)));
    })

}


// CREATE POST REQUEST DELIVERY
export const createRequestDelivery=(data)=>{
    return {
        type : Actiontypes.POST_CREATE_REQUEST_DELIVERY,
        payload: data
    }
}

export const createRequestDeliveryError=(err)=>{
    return {
        type : Actiontypes.POST_CREATE_REQUEST_DELIVERY_ERROR,
        payload : err
    }
}

export const createRequestDeliveryLoading=()=>{
    return{
        type: Actiontypes.POST_CREATE_REQUEST_DELIVERY_LOADING
    }
}

// MODIFY REQUEST DELIVERY
export const modifyRequestDelivery=(data)=>{
    return {
        type : Actiontypes.MODIFY_CREATE_REQUEST_DELIVERY,
        payload: data
    }
}

export const modifyRequestDeliveryError=(err)=>{
    return {
        type : Actiontypes.MODIFY_CREATE_REQUEST_DELIVERY_ERROR,
        payload : err
    }
}

export const modifyRequestDeliveryLoading=()=>{
    return{
        type: Actiontypes.MODIFY_CREATE_REQUEST_DELIVERY_LOADING
    }
}

export const fetchCreateRequestDelivery=(adId)=>(dispatch)=>{
    console.log("IM CREATING A NEW REQ DELIV !");
    return  new Promise((resolve , reject)=>{
        localStorage.getItem("transporter_id")
            .then(transporter_id=>{
                let data ={
                    ad_id : adId,
                    transporter_id : transporter_id
                }
                dispatch(createRequestDeliveryLoading());
                let headers = new Headers();

                headers.append('Content-Type', 'application/json');
                return fetch(Endpoints.ENDPOINT_CREATE_REQUEST_DELIVERY, {
                    headers : headers,
                    method : "POST",
                    body: JSON.stringify(data)
                })
            })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(createRequestDelivery(response.data)); resolve("Your delivery action is submitted successfully !" )
                }else{
                    dispatch(createRequestDeliveryError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(createRequestDeliveryError(error.message)); reject(error.message)});
    })

}

export const fetchModifyRequestDelivery=(type , deliveryRequestId)=>(dispatch)=>{
    let data = null;
    if(type ==="TRANSPORTER_POSTULING" || type ==="TRANSPORTER_CONFIRMING" || type ==="TRANSPORTER_REJECTING"){
        data={
            type : type,
            transporter_id : localStorage.getItem("transporter_id"),
            delivery_request_id : deliveryRequestId
        }
    }else{
        data ={
            type : type,
            user_id : localStorage.getItem("user_id"),
            delivery_request_id : deliveryRequestId
        }
    }
    console.log("DATA =", data);

    return  new Promise((resolve , reject)=>{
        dispatch(modifyRequestDeliveryLoading());
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_MODIFY_REQUEST_DELIVERY, {
            headers : headers,
            method : "PATCH",
            body: JSON.stringify(data)
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(modifyRequestDelivery(response.data)); resolve("The request is submitted successfully !")
                }else{
                    dispatch(modifyRequestDeliveryError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(modifyRequestDeliveryError(error.message)); reject(error.message)});
    })

}

export const logout=()=>{
    return{
        type : Actiontypes.LOGOUT
    }
}


export const getUserDetails=(data)=>{
    return{
        type : Actiontypes.GET_USER_DETAILS,
        payload: data
    }
}

export const getUserDetailsLoading=()=>{
    return{
        type : Actiontypes.GET_USER_DETAILS_LOADING,
    }
}

export const getUserDetailsError=(err)=>{
    return{
        type : Actiontypes.GET_USER_DETAILS_ERROR,
        payload : err
    }
}

export  const  fetchGetUserDetails=(userId)=>(dispatch)=>{
    return new Promise((resolve , reject)=>{
        dispatch(getUserDetailsLoading());
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_GET_USER_DETAILS + new URLSearchParams({
            user_id : userId
        }) , {
            headers : headers,
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response => {
                if(response.success){
                    dispatch(getUserDetails(response.data));
                    resolve();
                }else{
                    dispatch(getUserDetailsError(response.error));
                    reject("Error :Couldn't get the user details !");
                }
            })
            .catch(error =>{dispatch(getUserDetailsError(error.message));
                reject("Error :Couldn't get the user details !");});
    })
}

export const getProfileDetails=(data)=>{
    return{
        type : Actiontypes.GET_PROFILE_DETAILS,
        payload: data
    }
}

export const getProfileDetailsLoading=()=>{
    return{
        type : Actiontypes.GET_PROFILE_DETAILS_LOADING,
    }
}

export const getProfileDetailsError=(err)=>{
    return{
        type : Actiontypes.GET_PROFILE_DETAILS_ERROR,
        payload : err
    }
}

export const fetchGetProfileDetails=()=>(dispatch)=>{
    return new Promise((resolve , reject)=>{
        dispatch(getProfileDetailsLoading());
        let headers = new Headers();
        localStorage.getItem("user_id")
            .then(res=>{
                let user_id = res;
                console.log("RESPONSE =", res);
                console.log("URL PROFILE =", Endpoints.ENDPOINT_GET_PROFILE_DETAILS  +`user_id=${user_id}`);
                headers.append('Content-Type', 'application/json');
                return fetch(Endpoints.ENDPOINT_GET_PROFILE_DETAILS  +`user_id=${user_id}` , {
                    headers : headers,
                })

            })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response => {
                if(response.success){
                    dispatch(getProfileDetails(response.data));
                    resolve();
                }else{
                    dispatch(getProfileDetailsError(response.error));
                    reject("Error :Couldn't get the profile details !");
                }
            })
            .catch(error =>{dispatch(getProfileDetailsError(error.message));
                reject("Error :Couldn't get the profile details !");});
    })

}

export const get8NewsLoading=()=>{
    return{
        type : Actiontypes.GET_8_NEWS_LOADING
    }
}

export const get8News=(data)=>{
    return{
        type : Actiontypes.GET_8_NEWS,
        payload : data
    }
}

export const get8NewsError=(err)=>{
    return{
        type : Actiontypes.GET_8_NEWS_ERROR,
        payload : err
    }
}

export const fetchGet8News=()=>(dispatch)=>{
    let headers = new Headers();
    dispatch(get8NewsLoading());
    headers.append('Content-Type', 'application/json');
    return fetch(Endpoints.ENDPOINT_GET_8_NEWS  + new URLSearchParams({
        eight : true
    }), {
        headers : headers,
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => {
            if(response.success){
                dispatch(get8News(response.data));
                // SLIDES = first 4 news
                dispatch( getSlides(response.data.slice(0,4)))
            }else{
                dispatch(get8NewsError(response.error))
            }
        })
        .catch(error => dispatch(get8NewsError(error.message)));
}


export const getNews=(data)=>{
    return{
        type : Actiontypes.GET_NEWS,
        payload : data
    }
}
export const getNewsLoading=()=>{
    return{
        type : Actiontypes.GET_NEWS_LOADING
    }
}

export const getNewsError=(err)=>{
    return{
        type : Actiontypes.GET_NEWS_ERROR,
        payload : err
    }
}

export const fetchGetNews=(newsId)=>(dispatch)=>{
    let headers = new Headers();
    dispatch(getNewsLoading());
    headers.append('Content-Type', 'application/json');
    return fetch(Endpoints.ENDPOINT_GET_NEWS  + new URLSearchParams({
        news_id : newsId
    }), {
        headers : headers,
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => {
            if(response.success){
                dispatch(getNews(response.data))
            }else{
                dispatch(getNewsError(response.error))
            }
        })
        .catch(error => dispatch(getNewsError(error.message)));
}


export const getContacts=(data)=>{
    return{
        type : Actiontypes.GET_CONTACTS,
        payload : data
    }
}
export const getContactsLoading=()=>{
    return{
        type : Actiontypes.GET_CONTACTS_LOADING
    }
}

export const getContactsError=(err)=>{
    return{
        type : Actiontypes.GET_CONTACTS_ERROR,
        payload : err
    }
}

export const fetchGetContacts=()=>(dispatch)=>{
    let headers = new Headers();
    dispatch(getContactsLoading());
    headers.append('Content-Type', 'application/json');
    return fetch(Endpoints.ENDPOINT_GET_CONTACTS , {
        headers : headers,
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => {
            if(response.success){
                dispatch(getContacts(response.data))
            }else{
                dispatch(getContactsError(response.error))
            }
        })
        .catch(error => dispatch(getContactsError(error.message)));
}

// GET SLIDES

export const editProfileLoading=()=>{
    return{
        type: Actiontypes.EDIT_PROFILE_LOADING
    }
}

export const editProfileError=(err)=>{
    return{
        type : Actiontypes.EDIT_PROFILE_ERROR,
        payload: err
    }
}

export const editProfile=(content)=>{

    return{
        type: Actiontypes.EDIT_PROFILE,
        payload: content
    }
}

// GET SLIDES

export const getSlidesLoading=()=>{
    return{
        type: Actiontypes.GET_SLIDES_LOADING
    }
}

export const getSlidesError=(err)=>{
    return{
        type : Actiontypes.GET_SLIDES_ERROR,
        payload: err
    }
}

export const getSlides=(content)=>{
    let slidesContent = content.map(news=>{
        return{
            src : Endpoints.BASE_URL_NEWS + news.news_image_url,
            header : news.news_title,
            id : news.news_id
        }
    })
    return{
        type: Actiontypes.GET_SLIDES,
        payload: slidesContent
    }
}

export const fetchEditProfile=(data)=>(dispatch)=>{
    return  new Promise((resolve , reject)=>{
        dispatch(editProfileLoading());
        let headers = new Headers();
        localStorage.getItem("user_id")
            .then(res=>{
                let user_id = res;
                headers.append('Content-Type', 'application/json');
                return fetch(Endpoints.ENDPOINT_EDIT_PROFILE, {
                    headers : headers,
                    method : "PATCH",
                    body: JSON.stringify({...data , user_id : user_id})
            })

        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(editProfile(response.data)); resolve("The request is submitted successfully !")
                }else{
                    dispatch(editProfileError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(editProfileError(error.message)); reject(error.message)});
    })
}

// GET SLIDES

export const signalProfileLoading=()=>{
    return{
        type: Actiontypes.SIGNAL_PROFILE_LOADING
    }
}

export const signalProfileError=(err)=>{
    return{
        type : Actiontypes.SIGNAL_PROFILE_ERROR,
        payload: err
    }
}

export const signalProfile=(content)=>{

    return{
        type: Actiontypes.SIGNAL_PROFILE,
        payload: content
    }
}

export const fetchSignalProfile=(data)=>(dispatch)=>{
    return  new Promise((resolve , reject)=>{
        dispatch(signalProfileLoading());
        let headers = new Headers();


            headers.append('Content-Type', 'application/json');
            return fetch(Endpoints.ENDPOINT_SIGNAL_PROFILE, {
                headers : headers,
                method : "POST",
                body: JSON.stringify(data)
            })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(signalProfile(response.data)); resolve("The Signal is sent succesfully !")
                }else{
                    dispatch(signalProfileError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(signalProfileError(error.message)); reject(error.message)});
    })
}


// EDIT AD
export const editAdLoading=()=>{
    return{
        type: Actiontypes.EDIT_AD_LOADING
    }
}

export const editAdError=(err)=>{
    return{
        type : Actiontypes.EDIT_AD_ERROR,
        payload: err
    }
}

export const editAd=(content)=>{

    return{
        type: Actiontypes.EDIT_AD,
        payload: content
    }
}

export const fetchEditAd=(data)=>(dispatch)=>{
    return  new Promise((resolve , reject)=>{
        dispatch(editAdLoading());
        let headers = new Headers();
        let dataFormData = new FormData();
        let dataKeys = Object.keys(data);
        dataKeys.forEach((key)=>{
            dataFormData.append(key, data[key]);
        })

        return fetch(Endpoints.ENDPOINT_EDIT_AD, {
            method : "POST",
            body: dataFormData
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(editAd(response.data)); resolve("Your ad  is edited succesfully !")
                }else{
                    dispatch(editAdError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(editAdError(error.message)); reject(error.message)});
    })
}

// EDIT AD
export const deleteAdLoading=()=>{
    return{
        type: Actiontypes.DELETE_AD_LOADING
    }
}

export const deleteAdError=(err)=>{
    return{
        type : Actiontypes.DELETE_AD_ERROR,
        payload: err
    }
}

export const deleteAd=(content)=>{

    return{
        type: Actiontypes.DELETE_AD,
        payload: content
    }
}

export const fetchDeleteAd=(ad_id)=>(dispatch)=>{
    return  new Promise((resolve , reject)=>{
        dispatch(deleteAdLoading());
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return fetch(Endpoints.ENDPOINT_DELETE_AD + new URLSearchParams({
            archive_ad_id : ad_id
        }), {
            headers : headers,
            method : "PATCH",
            body: JSON.stringify({
                ad_id : ad_id
            })
        })
            .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response =>{
                if(response.success){
                    dispatch(deleteAd(response.data)); resolve("The Signal is sent succesfully !")
                }else{
                    dispatch(deleteAdError(response.error)); reject(response.error)
                }
            })
            .catch(error =>{dispatch(deleteAdError(error.message)); reject(error.message)});
    })
}
