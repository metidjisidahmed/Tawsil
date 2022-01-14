let baseUrl = "http://127.0.0.1/tawsil";
module.exports={
    BASE_URL: baseUrl,
    BASE_URL_ADS: baseUrl + "/ads/",
    BASE_URL_NEWS: baseUrl+ "/news/",
    ENDPOINT_GET_PRESENTATION :baseUrl +`/presentation/requests.php`,
    ENDPOINT_POST_SIGNUP_CLIENT : baseUrl+`/users/signup.php`,
    ENDPOINT_POST_SIGNUP_TRANSPORTER : baseUrl+`/users/signup.php?transporter=true`,
    ENDPOINT_LOGIN_USER : baseUrl +`/users/login.php`,
    ENDPOINT_GET_8_ADS : baseUrl + `/ads/requests.php?eight=true`,
    ENDPOINTS_SEARCH_ADS_FROM_TO :baseUrl + `/ads/requests.php?`,
    ENDPOINTS_GET_ADS_CLASSES : baseUrl+`/ads/classifications.php`,
    ENDPOINT_POST_AD : baseUrl+`/ads/requests.php`,
    ENDPOINT_GET_AD_BY_ID : baseUrl+`/ads/requests.php?`,
    ENDPOINT_CREATE_REQUEST_DELIVERY : baseUrl+ `/request_delivery/create.php`,
    ENDPOINT_MODIFY_REQUEST_DELIVERY : baseUrl+ `/request_delivery/update.php`,
    ENDPOINT_GET_USER_DETAILS : baseUrl+`/users/details.php?`,
    ENDPOINT_GET_PROFILE_DETAILS : baseUrl+`/users/details.php?`,
    ENDPOINT_GET_8_NEWS : baseUrl+`/news/requests.php?`,
    ENDPOINT_GET_NEWS : baseUrl+`/news/requests.php?`,
    ENDPOINT_GET_CONTACTS : baseUrl+`/contacts/requests.php`
}
