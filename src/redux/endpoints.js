let baseUrl = "http://127.0.0.1/tawsil";
module.exports={
    BASE_URL: baseUrl,
    BASE_URL_ADS: baseUrl + "/ads/",
    ENDPOINT_GET_PRESENTATION :baseUrl +`/presentation/requests.php`,
    ENDPOINT_POST_SIGNUP_CLIENT : baseUrl+`/users/signup.php`,
    ENDPOINT_POST_SIGNUP_TRANSPORTER : baseUrl+`/users/signup.php?transporter=true`,
    ENDPOINT_LOGIN_USER : baseUrl +`/users/login.php`,
    ENDPOINT_GET_8_ADS : baseUrl + `/ads/requests.php?eight=true`,
    ENDPOINTS_SEARCH_ADS_FROM_TO :baseUrl + `/ads/requests.php?`,
    ENDPOINTS_GET_ADS_CLASSES : baseUrl+`/ads/classifications.php`
}
