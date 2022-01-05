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
