import {
    Alert,
    Avatar,
    CardActionArea,
    CardContent, Checkbox,
    Chip,
    FormControlLabel,
    FormGroup,
    Rating,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {
    AccessTime,
    AddRoad,
    AlternateEmail, AssignmentInd, AssignmentTurnedIn, ContactMail,
    Engineering,
    Face, FindReplace, FitnessCenter, GppBad, History,
    HourglassEmpty, Inbox,
    LocationCity,
    LocationOn,
    People,
    Phone, PriceCheck
} from "@mui/icons-material";
import "./styles.css"
import Card from "@mui/material/Card";
import {BinaryImageSrc} from "../0SubCompounents/BinaryImage";
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


const AdSearch =({status})=>{
    return(
        <div className="w-100 d-flex mt-lg-4 mb-lg-4 main-black-bg with-shadow " >
            <div className="col-4 pl-0">
                <img className="w-100 h-100" src={`data:image/jpeg;base64,${BinaryImageSrc}`} />
            </div>
            <div className="col-8 pl-lg-0">
                {/*<CardActionArea className="w-100">*/}
                <div style={{textAlign : "start"}} className="d-lg-flex flex-column">
                    <div className="d-lg-flex justify-content-lg-between align-items-center mb-lg-2">
                        <div className="adSearchTitle main-white"> Title Title Title</div>
                        {/*<div className="main-green pt-lg-2"> <VerifiedUser/> Guaranteed </div>*/}
                        { status==="success" ?  <div  className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="success">Delivered !</Alert> </div>
                            : status==="warning" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="warning">In the delivery !</Alert> </div>
                            : status==="info"  ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="info">Waiting ...</Alert> </div> : null


                        }

                    </div>
                    <div className="adSearchDetails main-white">
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

const CardStats =({label , value , icon })=>{
    return (
        <Card className="main-black-bg main-white mb-lg-4" raised style={{borderRadius : "25px" , marginLeft : "15px" , marginRight : "15px" }}>
            <CardActionArea onClick={()=>{}}>
                <CardContent>
                    <Typography align="center">
                        {icon}
                    </Typography>
                    <Typography align="center">
                        {label}
                    </Typography>
                    <Typography align="center" variant="h3" >
                        {value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default function ProfileCompounent(){
    const [wilayas , setWilayas]=useState([{
        wilayaName : "Algiers"
    },{
        wilayaName : "Blida"
    },{
        wilayaName : "Boumerdes"
    },{
        wilayaName : "Ain Defla"
    },{
        wilayaName : "Medea"
    },{
        wilayaName : "Tipaza"
    },{
        wilayaName: "Tizi Ouzou"
    }]);
    const [ statsType , setStatsType]=useState("client");
    const [adsType, setAdsType] = useState("client");
    const handleChangeStatsTypeTab = (event, newValue) => {
        setStatsType(newValue);
    };
    const handleChangeAdsTypeTab = (event, newValue) => {
        setAdsType(newValue);
    };

    return(
        <React.Fragment>
            <div className="d-flex justify-content-center">
                <div>
                    <div className="d-flex justify-content-center mt-4 mb-2">
                        <AssignmentInd className="main-yellow" style={{fontSize: '5rem'}}/>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <h2 className="pt-1 d-inline main-white" style={{
                            textAlign: 'center',
                            borderBottom: "5px solid var(--main-yellow)",
                            fontWeight: 'bold'
                        }}> Your Profil </h2>
                    </div>
                </div>
            </div>
            <div className="d-flex mt-lg-4 mb-lg-4">
                <div className="offset-1 col-4" >
                    <div style={{height : "fit-content"}} className="main-black-bg p-3 with-shadow">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <Avatar id="profileAvatar" className="pt-lg-2 pb-lg-2" >MS</Avatar>
                            <div id="profileName" className="main-white font-weight-bold pt-lg-1 pb-lg-1">Metidji Sid Ahmed</div>
                            <div className="main-gray pt-lg-1 pb-lg-1 profileContact"> <AlternateEmail/> is_metidji@esi.dz </div>
                            <div className="main-gray pt-lg-1 pb-lg-1 profileContact"> <Phone/> 0794614612 </div>
                            <Rating className="mb-lg-3" size="medium" id="ProfileRanking" name="read" value={4.25} precision={0.25} readOnly />
                            <div style={{height : "5px" , backgroundColor : "var(--main-yellow)"}} className="w-75"/>
                        </div>
                        <div id="ProfileChipsContainer"  className="d-flex  mt-lg-3 mb-lg-3">
                            <Chip className="profileChip" label="Transporter" />
                            <Chip className="profileChip" label="Certified" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="mt-lg-2 mb-lg-2"> <span className="main-gray"><LocationOn/> Address : </span> <span className="main-white"> Khemis Meliana , Ain Defla</span></div>
                            <div className="mt-lg-3 mb-lg-2 main-gray"> <LocationCity/> Wilayas : </div>
                            <div className="d-flex flex-wrap justify-content-center">
                                { wilayas.map((wilaya, index)=>{
                                    return (
                                        <Chip key={index} className="profileWilayaChip m-lg-2" label={wilaya.wilayaName} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-1 col-6">

                    <div className="col-12">
                        <Tabs
                            value={statsType}
                            onChange={handleChangeStatsTypeTab}
                            aria-label="Stats Type"
                            className="mt-lg-1 mb-lg-2"
                        >
                            <Tab icon={<Face  /> } value="client" label="As a Client" />
                            <Tab icon={<Engineering /> } value="transporter" label="As a Transporter" />

                        </Tabs>
                    </div>
                    <div className="d-flex flex-column">
                        {
                            statsType ==="client" ? (
                                <React.Fragment>
                                    <CardStats label={"Waiting Packages"} value={12} icon={<HourglassEmpty className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Packages in the delivery"} value={12} icon={<FindReplace className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Package Delivered"} value={12} icon={<AssignmentTurnedIn className="main-yellow" style={{ fontSize: 80 }} />} />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <CardStats label={"Packages in the delivery"} value={12} icon={<FindReplace className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Package Delivered"} value={12} icon={<AssignmentTurnedIn className="main-yellow" style={{ fontSize: 80 }} />} />
                                </React.Fragment>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-2">
                <History className="main-yellow" style={{fontSize: '5rem'}}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <h2 className="pt-1 d-inline main-white" style={{
                    textAlign: 'center',
                    borderBottom: "5px solid var(--main-yellow)",
                    fontWeight: 'bold'
                }}> Your activities </h2>
            </div>
            <div className="d-flex mt-lg-4 mb-lg-4 flex-column">
                <Tabs
                    value={adsType}
                    onChange={handleChangeAdsTypeTab}
                    aria-label="Ads Type"
                    className="mt-lg-1 mb-lg-2"
                >
                    <Tab icon={<Face/> } value="client" label="As a Client" />
                    <Tab icon={<Engineering /> } value="transporter" label="As a Transporter" />
                </Tabs>
                {
                    adsType === "client" ? (
                        <React.Fragment>
                            <FormGroup className="d-flex justify-content-center flex-row">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Waiting Packages" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Packages in the delivery" />
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="Packages delivered" />
                            </FormGroup>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <FormGroup className="d-flex justify-content-center flex-row">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Packages in the delivery" />
                                <FormControlLabel  control={<Checkbox  defaultChecked />} label="Packages delivered" />
                            </FormGroup>
                        </React.Fragment>
                    )

                }
            </div>
            <div className="d-lg-flex flex-column offset-lg-2 col-lg-8">
                <AdSearch status={"success"}/>
                <AdSearch status={"warning"}/>
                <AdSearch status={"info"}/>
            </div>
            <div className="main-white">
                <Pagination/>
            </div>
        </React.Fragment>

    )
}
