import * as Actiontypes from "./actionsTypes";
import * as Endpoints from "../endpoints";
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
        .then(response => dispatch(getPresentation(response.data)))
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
            .then(response =>{dispatch(postSignupClient(response.data)); resolve("Done successfully !")})
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
            .then(response =>{dispatch(postSignupTransporter(response.data)); resolve("Done Successfully !")})
            .catch(error => dispatch(postSignupTransporterError(error.message)));
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
                    dispatch(login(response.data)); resolve("LOGIN Successfully !")
                }else{
                    throw new Error({message: response.error});
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
        .then(response => dispatch(get8ADS(response.data)))
        .catch(error => dispatch(get8AdsError(error.message)));
}
