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
import React from "react";
import SearchFilters from "../0SubCompounents/SearchFilters";
import {BinaryImageSrc} from "../0SubCompounents/BinaryImage";
import './styles.css';
import {CardActionArea} from "@mui/material";
import {Link} from "react-router-dom";
import Pagination from "../0SubCompounents/Pagination";


const AdDetail=({icon , content})=>{
    return(
        <div className="w-100 d-flex pt-lg-1 pb-lg-1">
            {icon}
            <div className="main-yellow font-weight-bold adSearchSubDetails pl-lg-2">{content}</div>
        </div>
    )
}

const AdsDetails=()=>{
    return (
        <React.Fragment>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <AdDetail icon={<AddRoad className="main-yellow adSearchSubDetailsIcon"/>} content={"Ain Defla -> Medea"}/>
                <AdDetail icon={<PriceCheck className="main-yellow adSearchSubDetailsIcon"/>} content={"5000 DA"}/>
            </div>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <AdDetail icon={<Inbox className="main-yellow adSearchSubDetailsIcon"/>} content={"Electronic"}/>
                <AdDetail icon={<FitnessCenter className="main-yellow adSearchSubDetailsIcon"/>} content={"1Kg ~ 5Kg"}/>
            </div>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <AdDetail icon={<Face className="main-yellow adSearchSubDetailsIcon"/>} content={"Metidji Sid Ahmed"}/>
                <AdDetail icon={<AccessTime className="main-yellow adSearchSubDetailsIcon"/>} content={"22/12/2021 02:06"}/>
            </div>
        </React.Fragment>
    )
}


const AdSearch =()=>{
    return(
        <div className="w-100 d-flex mt-lg-2 mb-lg-2 main-black-bg " >
            <div className="col-4 pl-0">
                <img className="w-100 h-100" src={`data:image/jpeg;base64,${BinaryImageSrc}`} />
            </div>
            <div className="col-8 pl-lg-0">
                {/*<CardActionArea className="w-100">*/}
                <div style={{textAlign : "start"}} className="d-lg-flex flex-column">
                    <div className="d-lg-flex justify-content-lg-between">
                        <div className="adSearchTitle"> Title Title Title</div>
                        {/*<div className="main-green pt-lg-2"> <VerifiedUser/> Guaranteed </div>*/}
                        <div className="main-red pt-lg-2"> <GppBad/> Not Guaranteed </div>

                    </div>
                    <div className="adSearchDetails">
                        Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs ....
                    </div>
                    <div className="w-100 d-flex  pt-lg-2 pb-lg-2">
                        <AdsDetails/>
                    </div>
                    <div className="w-100 d-flex justify-content-lg-end">
                        <div className="d-flex justify-content-center align-items-center mb-lg-4">
                            <Link style={{textDecoration : "underline"}} className="main-yellow font-weight-bold" to={'/ad/1'}>Show More</Link>
                        </div>
                    </div>
                </div>
                {/*</CardActionArea>*/}
            </div>
        </div>

    )
}
export default function SearchCompounent(){

    return(
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
                    }}> Ain Defla -> Medea Opportunities ! </h2>
                </div>
            </div>
            <div className="col-12 d-lg-flex mb-lg-4">
                <div className="col-lg-3 col-12 pl-2 pr-2">
                    <SearchFilters/>
                </div>
                <div className="col-9 d-flex flex-column main-white pl-0">
                    <AdSearch/>
                    <AdSearch/>
                    <AdSearch/>
                </div>
            </div>
            <div className="main-white">
                <Pagination/>
            </div>

        </React.Fragment>

    )
}
