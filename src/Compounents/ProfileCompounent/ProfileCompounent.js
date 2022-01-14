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
import React, {useEffect, useState} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {fetchGetProfileDetails} from "../../redux/actions/actions";
import wilayasLookup from "../../Globals/wilayasLookup";
import endpoints from "../../redux/endpoints";
import moment from "moment";

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
                <AdDetail icon={<PriceCheck className="main-yellow adSearchSubDetailsIcon"/>} content={price+"DA"}/>
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


const AdSearch =({ isTransporter,status , image , title , details , price , productType , volume , weight , created_at , wilaya , ad_id})=>{
    return(
        <div className="w-100 d-flex mt-lg-4 mb-lg-4 main-black-bg with-shadow " >
            <div className="col-4 pl-0">
                <img className="w-100 h-100" src={image} />
            </div>
            <div className="col-8 pl-lg-0">
                {/*<CardActionArea className="w-100">*/}
                <div style={{textAlign : "start"}} className="d-lg-flex flex-column">
                    <div className="d-lg-flex justify-content-lg-between align-items-center mb-lg-2">
                        <div className="adSearchTitle main-white"> {title}</div>
                        {/*<div className="main-green pt-lg-2"> <VerifiedUser/> Guaranteed </div>*/}
                        {
                            isTransporter ?(
                                status==="TRANSPORTER_CONFIRMING" ?  <div  className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="success">Delivered !</Alert> </div>
                                    : status==="USER_ACCEPTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="warning">Waiting your confirmation !</Alert> </div>
                                    : status==="TRANSPORTER_POSTULING"  ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="info">Waiting user reponse ...</Alert> </div>
                                        : status==="USER_REJECTING" || status==="TRANSPORTER_REJECTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="danger">Rejected !</Alert> </div> :null
                            ):(
                                status==="TRANSPORTER_CONFIRMING" ?  <div  className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="success">Delivered !</Alert> </div>
                                    : status==="USER_ACCEPTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="warning">Waiting the transporter confirmation !</Alert> </div>
                                    : status==="TRANSPORTER_POSTULING"  ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="info">Waiting your confirmation !</Alert> </div>
                                        : status==="USER_REJECTING" || status==="TRANSPORTER_REJECTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="danger">Rejected !</Alert> </div> :null
                            )
                        }
                    </div>
                    <div className="adSearchDetails main-white">
                        {details}
                    </div>
                    <div className="w-100 d-flex  pt-lg-2 pb-lg-2">
                        <AdsDetails price={price}  productType={productType} volume={volume} weight={weight} created_at={created_at} wilaya={wilaya}/>
                    </div>
                    <div className="w-100 d-flex justify-content-lg-end">
                        <div className="d-flex justify-content-center align-items-center mb-lg-4">
                            <Link style={{textDecoration : "underline"}} className="main-yellow font-weight-bold" to={'/ad/'+ad_id}>Show More</Link>
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
    const user = useSelector(state => state.user);
    const handleChangeStatsTypeTab = (event, newValue) => {
        setStatsType(newValue);
    };
    const handleChangeAdsTypeTab = (event, newValue) => {
        setAdsType(newValue);
    };
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchGetProfileDetails());
    },[]);
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
                            <Avatar id="profileAvatar" className="pt-lg-2 pb-lg-2" >{user.data.profile.nom[0] + user.data.profile.prenom[0]}</Avatar>
                            <div id="profileName" className="main-white font-weight-bold pt-lg-1 pb-lg-1">{user.data.profile.nom +" "+ user.data.profile.prenom}</div>
                            <div className="main-gray pt-lg-1 pb-lg-1 profileContact"> <AlternateEmail/> {user.data.profile.email} </div>
                            <div className="main-gray pt-lg-1 pb-lg-1 profileContact"> <Phone/> {user.data.profile.tel} </div>
                            <Rating className="mb-lg-3" size="medium" id="ProfileRanking" name="read" value={4.25} precision={0.25} readOnly />
                            <div style={{height : "5px" , backgroundColor : "var(--main-yellow)"}} className="w-75"/>
                        </div>
                        <div id="ProfileChipsContainer"  className="d-flex  mt-lg-3 mb-lg-3">
                            {user.data.profile.transporter_id ? <Chip className="profileChip" label="Transporter" /> : null }
                            {user.data.profile.transporter_id ==="CERTIFIED" ? <Chip className="profileChip" label="Certified" /> : null }
                        </div>
                        <div className="d-flex flex-column">
                            <div className="mt-lg-2 mb-lg-2"> <span className="main-gray"><LocationOn/> Address : </span> <span className="main-white"> {user.data.profile.address}</span></div>
                            <div className="mt-lg-3 mb-lg-2 main-gray"> <LocationCity/> Trajets : </div>
                            <div className="d-flex flex-wrap justify-content-center">
                                { user.data.profile?.trajets.map((trajet, index)=>{
                                    return (
                                        <Chip key={index} className="profileWilayaChip m-lg-2" label={`${wilayasLookup[Number(trajet.trajet_wilaya_from)]} -> ${wilayasLookup[Number(trajet.trajet_wilaya_to)]}`} />
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
                                    <CardStats label={"Delivered !"} value={user.data.ads.asClient.filter(adClient=>adClient.delivery_request_status ==="TRANSPORTER_CONFIRMING").length} icon={<HourglassEmpty className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Waiting the transporter confirmation !"} value={user.data.ads.asClient.filter(adClient=>adClient.delivery_request_status ==="USER_ACCEPTING").length} icon={<FindReplace className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Waiting your confirmation !"} value={user.data.ads.asClient.filter(adClient=>adClient.delivery_request_status ==="TRANSPORTER_POSTULING").length} icon={<AssignmentTurnedIn className="main-yellow" style={{ fontSize: 80 }} />} />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <CardStats label={"Delivered !"} value={user.data.ads.asTransporter.filter(adTransporter=>adTransporter.delivery_request_status ==="TRANSPORTER_CONFIRMING").length} icon={<FindReplace className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Waiting your confirmation !"} value={user.data.ads.asTransporter.filter(adClient=>adClient.delivery_request_status ==="USER_ACCEPTING").length} icon={<AssignmentTurnedIn className="main-yellow" style={{ fontSize: 80 }} />} />
                                    <CardStats label={"Waiting user reponse ..."} value={user.data.ads.asClient.filter(adClient=>adClient.delivery_request_status ==="TRANSPORTER_POSTULING").length} icon={<AssignmentTurnedIn className="main-yellow" style={{ fontSize: 80 }} />} />
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
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Delivered !" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Waiting the transporter confirmation !" />
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="Waiting your confirmation !" />
                                <FormControlLabel  control={<Checkbox defaultChecked />} label="Rejected !" />
                            </FormGroup>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>

                            <FormGroup className="d-flex justify-content-center flex-row">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Delivered !" />
                                <FormControlLabel  control={<Checkbox  defaultChecked />} label="Waiting your confirmation !" />
                                <FormControlLabel  control={<Checkbox  defaultChecked />} label="Waiting user reponse ..." />
                                <FormControlLabel  control={<Checkbox  defaultChecked />} label="Rejected !" />


                            </FormGroup>
                        </React.Fragment>
                    )

                }
            </div>
            <div className="d-lg-flex flex-column offset-lg-2 col-lg-8">
                { adsType === "client" ? null
                    : (
                        user.data.ads.asTransporter.map((ad , index)=>{
                            console.log("Ad =", ad);
                            return(
                                <AdSearch isTransporter ad_id={ad.ad_id} status={ad.delivery_request_status} price={ad.ad_final_price != null ? ad.ad_final_price+"DA" : "Negotiated"} type={ad.type} productType={ad.name} image={endpoints.BASE_URL_ADS+ ad.image} volume={`${ad.start_volume}CM3 ~ ${ad.end_volume}CM3`} weight={ `${ad.start_weight}G ~ ${ad.end_weight}G`}  created_at={moment(ad.created_at).format('L')} details={ad.details} address={ad.address} title={ad.title} wilaya={`${wilayasLookup[Number(ad.wilaya_from)]} -> ${wilayasLookup[Number(ad.wilaya_to)]}`}  />
                            )
                        })
                    )

                }
                {/*<AdSearch status={"warning"}/>*/}
                {/*<AdSearch status={"info"}/>*/}
            </div>
            <div className="main-white">
                <Pagination/>
            </div>
        </React.Fragment>

    )
}
