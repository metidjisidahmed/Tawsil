import React from "react";
import {Link} from "react-router-dom";
import {
    AccessTime,
    AddRoad,
    AddTask, AspectRatio,
    Delete,
    Face,
    FitnessCenter,
    FitScreen,
    Inbox,
    PriceCheck
} from "@mui/icons-material";
import "./styles.css"
import clsx from "clsx";
import {BinaryImageSrc} from "../0SubCompounents/BinaryImage";
import {Button} from "@mui/material";

const AdDetailTag=({icon , content , OneItemPerLigne})=>{
    return(
        <div className={ clsx(" d-flex pt-lg-1 pb-lg-1 justify-content-center mb-lg-2" , !OneItemPerLigne && "w-100")}>
            {icon}
            <div className="main-yellow font-weight-bold adSearchSubDetails pl-lg-2">{content}</div>
        </div>
    )
}
const Details=()=>{
    return (
        <React.Fragment>

            <div className="d-lg-flex flex-wrap">
                    <div className="col-12 d-flex justify-content-center text-center mt-lg-2">
                        <AdDetailTag OneItemPerLigne icon={<AddRoad className="main-yellow adSearchSubDetailsIcon"/>} content={["From " , <span className="main-white">Ain Defla</span>,  " To ",<span className="main-white">Medea </span>]}/>
                    </div>
                    <div className="d-flex flex-column col-6 pl-0 pr-0 pt-lg-1 pb-lg-1">
                        <AdDetailTag icon={<Inbox className="main-yellow adSearchSubDetailsIcon"/>} content={["Product Type : " , <span className="main-white">Electronic</span>]}/>
                        <AdDetailTag icon={<PriceCheck className="main-yellow adSearchSubDetailsIcon"/>} content={["Price : ",  <span className="main-white">5000 DA</span>]}/>
                    </div>
                    <div className="d-flex flex-column col-6 pl-0 pr-0 pt-lg-1 pb-lg-1">
                        <AdDetailTag icon={<AspectRatio className="main-yellow adSearchSubDetailsIcon"/>} content={["Volume : ", <span className="main-white">13cm</span> , <sup className="main-white">3</sup>]}/>
                        <AdDetailTag icon={<FitnessCenter className="main-yellow adSearchSubDetailsIcon"/>} content={["Weight : " , <span className="main-white">1Kg ~ 5Kg</span>]}/>
                    </div>
            </div>
            <div className="d-lg-flex justify-content-lg-end mt-lg-3">
                    <div id={"creationDateAd"} className="main-white">22/12/2021 02:06</div>
            </div>
            {/*<div className="d-lg-flex">*/}
            {/*    <div className="d-flex flex-column col-6 offset-3 pl-0 pr-0 pt-lg-1 pb-lg-1">*/}
            {/*        <AdDetailTag icon={<AccessTime className="main-yellow adSearchSubDetailsIcon"/>} content={["Created at : " , <span className="main-white">22/12/2021 02:06</span> ]}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </React.Fragment>
    )
}

export default function AdDetails(){
    return (
        <React.Fragment>
            <div style={{marginTop : "7rem" , marginBottom : "3rem"}} className="d-flex">
                <div className="col-6 d-flex align-items-lg-center">
                    <img className="w-100" src={`data:image/jpeg;base64,${BinaryImageSrc}`} />
                </div>
                <div className="col-6">
                    <div  id="AdDetailSectionOne" className="mx-3 main-black-bg p-lg-3 pb-lg-1">
                        <div  style={{textAlign : "start"}} className="d-lg-flex flex-column">
                            <div className="d-flex justify-content-lg-between align-items-lg-center">
                                <div className="adSearchTitle main-white"> Title Title Title</div>
                                <div className="d-flex justify-content-lg-center main-yellow ">
                                    <div className="align-self-lg-center mr-lg-2">
                                        <Face id="AdDetailFaceIcon"/>
                                    </div>
                                    <div id="AdDetailProfile" className="d-flex-column align-items-lg-center">
                                        <div className="d-flex ">Metidji Sid Ahmed</div>
                                        <div className="text-center"> 7000 DA</div>
                                    </div>
                                </div>

                            </div>
                            <div className="adSearchDetails main-white mt-lg-3 mb-lg-3 mr-lg-2 ml-lg-2">
                                Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs
                                Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs
                                Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs Details Details sqjksqpo,sqp,sqf lqs,mlsfq,,qf,qflmq,lmsf,fsqlm,qfslq ^pkqsfqpfqssqfmfqsf;qsmqsf; sqlffsqpsqfp^;qfspq;sqfs;qf;fq  qs^pfkfsq,qfs
                            </div>
                            <div  id="adDetailTransportType" className="mt-lg-3 mb-lg-3 main-green font-weight-bold main-green text-center">
                                Transport Type : Guaranteed
                            </div>
                            {/*<div className="w-100 d-flex  pt-lg-2 pb-lg-2">*/}
                            {/*    <Details/>*/}
                            {/*</div>*/}
                            {/*<div className="w-100 d-flex justify-content-lg-end">*/}
                            {/*    <div className="d-flex justify-content-center align-items-center mb-lg-4">*/}
                            {/*        <Link style={{textDecoration : "underline"}} className="main-yellow font-weight-bold" to={'/news'}>Show More</Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="mx-3 main-black-bg p-lg-3 pb-lg-1">
                        <Details/>
                    </div>
                </div>
            </div>
            <div className="d-lg-flex justify-content-lg-end p-4">
                <Button id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<AddTask />}>
                    Request the delivery
                </Button>
            </div>
        </React.Fragment>



    )
}
