import {
    AccessTime,
    AddRoad,
    Face,
    FitnessCenter, GppBad,
    Inbox,
    OpenInNew,
    PriceCheck, ReadMore,
    TravelExplore, VerifiedUser
} from "@mui/icons-material";
import React, {useEffect} from "react";
import SearchFilters from "../0SubCompounents/SearchFilters";
import {BinaryImageSrc} from "../0SubCompounents/BinaryImage";
import './styles.css';
import {Button, CardActionArea, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Pagination from "../0SubCompounents/Pagination";
import wilayas from "../../Globals/wilaya";
import wilayasLookup from "../../Globals/wilayasLookup";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import searchedAdsReducer from "../../redux/reducers/searchedAdsReducer";
import {fetchSearchAdsFromTo} from "../../redux/actions/actions";
import Loader from "react-loader-spinner";
import moment from 'moment';

import endpoints from "../../redux/endpoints";
import {history} from "../../App";
import swal from "sweetalert";

// A custom hook that builds on useLocation to parse
// the query string for you.


const AdDetail=({icon , content})=>{
    return(
        <div className="w-100 d-flex pt-lg-1 pb-lg-1">
            {icon}
            <div className="main-yellow font-weight-bold adSearchSubDetails pl-lg-2">{content}</div>
        </div>
    )
}

const AdsDetails=({price  , productType , volume , weight , created_at , wilaya})=>{
    return (
        <React.Fragment>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <AdDetail icon={<AddRoad className="main-yellow adSearchSubDetailsIcon"/>} content={wilaya}/>
                <AdDetail icon={<PriceCheck className="main-yellow adSearchSubDetailsIcon"/>} content={price}/>
            </div>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <AdDetail icon={<FitnessCenter className="main-yellow adSearchSubDetailsIcon"/>} content={weight}/>
                <AdDetail icon={<FitnessCenter className="main-yellow adSearchSubDetailsIcon"/>} content={volume}/>
            </div>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <AdDetail icon={<Inbox className="main-yellow adSearchSubDetailsIcon"/>} content={productType}/>
                <AdDetail icon={<AccessTime className="main-yellow adSearchSubDetailsIcon"/>} content={created_at}/>
            </div>
        </React.Fragment>
    )
}


export const AdSearch =({ad_id, image , title , type , details , price , productType , volume , weight , created_at , wilaya})=>{
    return(
        <div className="w-100 d-flex mt-lg-2 mb-lg-2 main-black-bg " >
            <div className="col-4 pl-0">
                <img style={{ height: "15rem", width: "22rem"}} src={image} />
            </div>
            <div className="col-8 pl-lg-0">
                {/*<CardActionArea className="w-100">*/}
                <div style={{textAlign : "start"}} className="d-lg-flex flex-column">
                    <div className="d-lg-flex justify-content-lg-between">
                        <div className="adSearchTitle"> {title}</div>
                        { type!=="GUARANTEED" ? <div className="main-red pt-lg-2"> <GppBad/> Not Guaranteed </div> : <div className="main-green pt-lg-2"> <VerifiedUser/> Guaranteed </div> }
                    </div>
                    <div className="adSearchDetails">
                        {details}
                    </div>
                    <div className="w-100 d-flex  pt-lg-2 pb-lg-2">
                        <AdsDetails price={price}  productType={productType}  volume={volume} weight={ weight}  created_at={created_at} wilaya={wilaya}   />
                    </div>
                    <div className="w-100 d-flex justify-content-lg-end">
                        <div className="d-flex justify-content-center align-items-center mb-lg-4">
                            <Button onClick={()=>{
                                if(localStorage.getItem("account")){
                                    history.push('/ad/'+ad_id)
                                }else{
                                    swal({
                                        title: "WARNING !",
                                        text: "You have to signup/login before checking this section",
                                        icon: "warning"}
                                    )
                                }

                            }} style={{textDecoration : "underline" , borderWidth : '0'}} className="main-yellow font-weight-bold" >Show More</Button>
                        </div>
                    </div>
                </div>
                {/*</CardActionArea>*/}
            </div>
        </div>

    )
}
export default function SearchCompounent() {
    function useQuery() {
        const {search} = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    const dispatch = useDispatch();
    const searchedAds = useSelector(state => state.searchedAds);
    let query = useQuery();
    useEffect(() => {
        dispatch(fetchSearchAdsFromTo(query.get("from"), query.get("to")));
    }, []);

    return (
        searchedAds.loading ? (
            <Typography align="center">
                <Loader
                    type="Rings"
                    color="var(--main-yellow)"
                    height={400}
                    width={400}
                />
            </Typography>
        ) : searchedAds.error ? (
            <Typography variant="h2" color="var(--main-red)" align="center">
                <Loader
                    type="Rings"
                    color="var(--main-red)"
                    height={400}
                    width={400}
                />
                {searchedAds.error}
            </Typography>
        ) : searchedAds.data.length ? (
            <React.Fragment>
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-4 mb-2">
                        <TravelExplore className="main-yellow" style={{fontSize: '5rem'}}/>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <h2 className="pt-1 d-inline main-white" style={{
                            textAlign: 'center',
                            borderBottom: "5px solid var(--main-yellow)",
                            fontWeight: 'bold'
                        }}> {wilayasLookup[query.get("from")]} -> {wilayasLookup[query.get("to")]} Opportunities ! </h2>
                    </div>
                </div>
                <div className="col-12 d-lg-flex mb-lg-4">
                    <div className="col-lg-3 col-12 pl-2 pr-2">
                        <SearchFilters/>
                    </div>
                    <div className="col-9 d-flex flex-column main-white pl-0">
                        {searchedAds.data.map((ad, index) => {
                            return (
                                <AdSearch ad_id={ad.ad_id}
                                          price={ad.ad_final_price != null ? ad.ad_final_price + "DA" : "Negotiated"}
                                          type={ad.type} productType={ad.name} image={endpoints.BASE_URL_ADS + ad.image}
                                          volume={`${ad.start_volume}CM3 ~ ${ad.end_volume}CM3`}
                                          weight={`${ad.start_weight}G ~ ${ad.end_weight}G`}
                                          created_at={moment(ad.created_at).format('L')} details={ad.details}
                                          address={ad.address} title={ad.title}
                                          wilaya={`${wilayasLookup[Number(ad.wilaya_from)]} -> ${wilayasLookup[ad.wilaya_to]}`}/>
                            )
                        })}
                        {/*<AdSearch/>*/}
                        {/*<AdSearch/>*/}
                        {/*<AdSearch/>*/}
                    </div>
                </div>
                <div className="main-white">
                    <Pagination/>
                </div>

            </React.Fragment>
        ) : (
            <Typography variant="h4" color="var(--main-gray)" align="center">
                <Loader
                    type="Rings"
                    color="var(--main-gray)"
                    height={400}
                    width={400}
                />
                No Ads corresponding for your search !
            </Typography>
        )

    )
}
