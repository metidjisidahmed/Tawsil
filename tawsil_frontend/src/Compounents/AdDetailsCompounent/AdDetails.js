import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    AccessTime,
    AddRoad,
    AddTask, AlternateEmail, AspectRatio, Cancel, Check, Close,
    Delete,
    Face,
    FitnessCenter,
    FitScreen, Flag,
    Inbox, ListAlt, LocationCity, LocationOn, ModeEdit, Phone,
    PriceCheck, Publish
} from "@mui/icons-material";
import "./styles.css"
import clsx from "clsx";
import {BinaryImageSrc} from "../0SubCompounents/BinaryImage";
import {
    AppBar,
    Avatar, Badge,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, IconButton,
    Rating, Slide, TextField, Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchCreateRequestDelivery,
    fetchGetAdById,
    fetchGetProfileDetails,
    fetchModifyRequestDelivery, fetchSignalProfile
} from "../../redux/actions/actions";
import swal from "sweetalert";
import Loader from "react-loader-spinner";
import {useParams} from "react-router-dom";
import switchBaseClasses from "@mui/material/internal/switchBaseClasses";
import endpoints from "../../redux/endpoints";
import moment from "moment";
import wilayasLookup from "../../Globals/wilayasLookup";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AdDetailTag=({icon , content , OneItemPerLigne})=>{
    return(
        <div className={ clsx(" d-flex pt-lg-1 pb-lg-1 justify-content-center mb-lg-2" , !OneItemPerLigne && "w-100")}>
            {icon}
            <div className="main-yellow font-weight-bold adSearchSubDetails pl-lg-2">{content}</div>
        </div>
    )
}
const Details=({wilaya_from , wilaya_to , productType , price , volume , weight , created_at})=>{
    return (
        <React.Fragment>

            <div className="d-lg-flex flex-wrap">
                    <div className="col-12 d-flex justify-content-center text-center mt-lg-2">
                        <AdDetailTag OneItemPerLigne icon={<AddRoad className="main-yellow adSearchSubDetailsIcon"/>} content={["From " , <span className="main-white">{wilaya_from}</span>,  " To ",<span className="main-white"> {wilaya_to} </span>]}/>
                    </div>
                    <div className="d-flex flex-column col-6 pl-0 pr-0 pt-lg-1 pb-lg-1">
                        <AdDetailTag icon={<Inbox className="main-yellow adSearchSubDetailsIcon"/>} content={["Product Type : " , <span className="main-white">{productType}</span>]}/>
                        <AdDetailTag icon={<PriceCheck className="main-yellow adSearchSubDetailsIcon"/>} content={["Price : ",  <span className="main-white">{price !==null ? price +"" : "Negotiated"}</span>]}/>
                    </div>
                    <div className="d-flex flex-column col-6 pl-0 pr-0 pt-lg-1 pb-lg-1">
                        <AdDetailTag icon={<AspectRatio className="main-yellow adSearchSubDetailsIcon"/>} content={["Volume : ", <span className="main-white">{volume}</span>]}/>
                        <AdDetailTag icon={<FitnessCenter className="main-yellow adSearchSubDetailsIcon"/>} content={["Weight : " , <span className="main-white">{weight}</span>]}/>
                    </div>
            </div>
            <div className="d-lg-flex justify-content-lg-end mt-lg-3">
                    <div id={"creationDateAd"} className="main-white">{created_at}</div>
            </div>
            {/*<div className="d-lg-flex">*/}
            {/*    <div className="d-flex flex-column col-6 offset-3 pl-0 pr-0 pt-lg-1 pb-lg-1">*/}
            {/*        <AdDetailTag icon={<AccessTime className="main-yellow adSearchSubDetailsIcon"/>} content={["Created at : " , <span className="main-white">22/12/2021 02:06</span> ]}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </React.Fragment>
    )
}

const RequestDeliveryButton=({status , submitReqDelivery})=>{
    switch(status) {
        case null :
                return (
                    <Button onClick={()=>submitReqDelivery("TRANSPORTER_POSTULING")} id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<AddTask />}>
                        Request the delivery
                    </Button>
                )

        case "TRANSPORTER_POSTULING":
            return (
                <Button disabled={true}  id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<AddTask />}>
                    Waiting for the client confirmation ...
                </Button>
            )
        case "USER_ACCEPTING" :
            return (
                <Button  onClick={()=>submitReqDelivery("TRANSPORTER_CONFIRMING")} id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<AddTask />}>
                    Confirm the delivery
                </Button>
            )
        case "TRANSPORTER_CONFIRMING" :
            return (
                <Button disabled={true} onClick={submitReqDelivery} id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<AddTask />}>
                    Done by you
                </Button>
            )
        case "USER_REJECTING" || "TRANSPORTER_REJECTING" :
            return (
                <Button disabled={true} onClick={submitReqDelivery} id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<AddTask />}>
                    Rejected
                </Button>
            )
        default : return null
    }
}

export default function AdDetails(){
    const {adId} = useParams();
    const dispatch = useDispatch();
    const adDetailPage = useSelector(state => state.adDetailPage);
    const [ adStatusForTheUser , setAdStatusForTheUser] = useState(null);
    const [adStatusForTheTransporter, setAdStatusForTheTransporter] = useState(null);
    const [requestDeliveryId, setRequestDeliveryId] = useState(null);
    const [viewAsAdOwner, setViewAsAdOwner] = useState(false);
    const [requestDeliveryTransportersPostuling, setRequestDeliveryTransportersPostuling] = useState([]);
    let [transportersPostlingDialog, setTransporterPostulingDialogStatus] = useState(false);
    const [signalProfileDialogStatus, setSignalProfileDialogStatus] = useState(false);

    const handleCloseSignalProfileDialog =()=>{
        setSignalProfileDialogStatus(false);
    }
    const [signalProfileForum, setSignalprofileForm] = useState(null);

    const user = useSelector(state => state.user);

    const submitSignalProfile =()=>{
        console.log("repport noublmahfoud =", signalProfileForum);
        console.log("target :", adDetailPage.data.ad_id);
        console.log("source :", user.data.profile.user_id);
        dispatch(fetchSignalProfile({user_source_id : user.data.profile.user_id , ad_target_id : adDetailPage.data.ad_id , ...signalProfileForum   }))
            .then(res=>{
                return swal({
                    title: "Done !",
                    text: res,
                    icon: "success",
                });
            })
            .then(()=>{
                window.location.reload();
            })
            .catch(errMess=>{
                return swal({
                    title: "ERROR !",
                    text: errMess,
                    icon: "error",
                });
            })
    }
    useEffect(() => {
            dispatch(fetchGetProfileDetails())
                .then(()=>{
                    console.log("User beforr getting the ad =", user);
                    return dispatch(fetchGetAdById(adId))
                })
                .then(()=>{
                    let targetAdId = adId;
                    let targetRequestDelivery = null;
                    console.log("Target Id =", targetAdId);
                    console.log("As CLIENT = ", user.data.delivery_requests.asClient);
                    let isUserhasTheAd = user.data.ads.asClient.filter(ad => ad.ad_id == targetAdId).length;
                    if(!isUserhasTheAd){
                        setViewAsAdOwner(false);
                    }else{
                        setViewAsAdOwner(true);
                    }
                    if( localStorage.getItem("transporter_id")!=null && !viewAsAdOwner){
                        // TRANSPORTER
                        console.log("As Transporter = ", user.data.delivery_requests.asTransporter);
                        let targetRequestDeliveries= user.data.delivery_requests.asTransporter.filter(reqDel => reqDel.ad_id == targetAdId);
                        if(targetRequestDeliveries.length){
                            // has already a requets there
                            targetRequestDelivery = targetRequestDeliveries[0];
                            setAdStatusForTheTransporter(targetRequestDelivery.delivery_request_status);
                            setRequestDeliveryId(targetRequestDelivery.delivery_request_id);

                        }else{
                            // didnt send a request yet
                            setAdStatusForTheTransporter(null);
                            setRequestDeliveryId(null);
                        }


                    }else if(isUserhasTheAd){
                        targetRequestDelivery = user.data.delivery_requests.asClient.filter(reqDel => reqDel.ad_id == targetAdId);
                        console.log("REQUEST DELIVRIES FOR THE CLIENT :", targetRequestDelivery);

                        // USER
                        let transporter_confirming_delivery_for_client = targetRequestDelivery.filter(reqDel => reqDel.delivery_request_status == "TRANSPORTER_CONFIRMING");
                        let user_accepting_delivery_for_client = targetRequestDelivery.filter(reqDel => reqDel.delivery_request_status == "USER_ACCEPTING");
                        console.log("User accepting req del :", user_accepting_delivery_for_client);
                        let transporter_postuling_delivery_for_client = targetRequestDelivery.filter(reqDel => reqDel.delivery_request_status == "TRANSPORTER_POSTULING");

                        if(transporter_confirming_delivery_for_client.length){
                            setAdStatusForTheUser("TRANSPORTER_CONFIRMING");
                            setRequestDeliveryId(transporter_confirming_delivery_for_client[0].delivery_request_id);
                        }else if (user_accepting_delivery_for_client.length){
                            setAdStatusForTheUser("USER_ACCEPTING");
                            setRequestDeliveryId(user_accepting_delivery_for_client[0].delivery_request_id);
                        }else if (transporter_postuling_delivery_for_client.length) {
                            setAdStatusForTheUser("TRANSPORTER_POSTULING");
                            setRequestDeliveryTransportersPostuling(transporter_postuling_delivery_for_client);
                        }else{
                            setAdStatusForTheUser("TRANSPORTER_POSTULING");
                            setRequestDeliveryTransportersPostuling([]);
                        }
                        // setAdStatusForTheUser(targetRequestDelivery.delivery_request_status);
                        // setRequestDeliveryId(targetRequestDelivery.delivery_request_id);
                    }
                    console.log("Final Status of the delivery request :", targetRequestDelivery);
                })
                .catch(errMess=>{
                    return swal({
                        title: "ERROR !",
                        text: errMess,
                        icon: "error",
                    });
                })
    }, []);
    const submitReqDelivery =(status)=>{
        if(status==="TRANSPORTER_POSTULING"){
            dispatch(fetchCreateRequestDelivery(adId))
                .then(res=>{
                    dispatch(fetchGetProfileDetails());
                    return swal({
                        title: "Done !",
                        text: res,
                        icon: "success",
                    });
                })
                .then(()=>{
                    window.location.reload();
                })
                .catch(errMess=>{
                    return swal({
                        title: "ERROR !",
                        text: errMess,
                        icon: "error",
                    });
                })
        }else{
            dispatch(fetchModifyRequestDelivery(status, requestDeliveryId))
                .then(()=>{
                    window.location.reload();
                })
                .then(res=>{
                    dispatch(fetchGetProfileDetails());
                    return swal({
                        title: "Done !",
                        text: res,
                        icon: "success",
                    });
                })
                .then(()=>{
                    window.location.reload();
                })
                .catch(errMess=>{
                    return swal({
                        title: "ERROR !",
                        text: errMess,
                        icon: "error",
                    });
                })
        }
    };
    const submitUserReqDelivery =(status , requestDeliveryId)=>{
            dispatch(fetchModifyRequestDelivery(status, requestDeliveryId))
                .then(()=>{
                    window.location.reload();
                })
                .then(res=>{
                    dispatch(fetchGetProfileDetails());
                    return swal({
                        title: "Done !",
                        text: res,
                        icon: "success",
                    });
                })
                .then(()=>{
                    window.location.reload();
                })
                .catch(errMess=>{
                    return swal({
                        title: "ERROR !",
                        text: errMess,
                        icon: "error",
                    });
                })
    };

    return (
        adDetailPage.loading ? (
            <Typography align="center">
                <Loader
                    type="Rings"
                    color="var(--main-yellow)"
                    height={400}
                    width={400}
                />
            </Typography>
        ) : adDetailPage.error ? (
            <Typography variant="h2" color="var(--main-red)" align="center">
                <Loader
                    type="Rings"
                    color="var(--main-red)"
                    height={400}
                    width={400}
                />
                { adDetailPage.error}
            </Typography>
        ):(
            <React.Fragment>
                <div style={{marginTop : "7rem" , marginBottom : "3rem"}} className="d-flex align-items-center">
                    <div className="col-6 d-flex align-items-lg-center">
                        <img style={{height : '40rem' , width : '40rem'}} src={endpoints.BASE_URL_ADS+ adDetailPage.data.image} />
                    </div>
                    <div className="col-6">
                        <div  id="AdDetailSectionOne" className="mx-3 main-black-bg p-lg-3 pb-lg-1">
                            <div  style={{textAlign : "start"}} className="d-lg-flex flex-column">
                                <div className="d-flex justify-content-lg-between align-items-lg-center">
                                    <div className="adSearchTitle main-white"> {adDetailPage.data.title}</div>
                                    {/*<div className="d-flex justify-content-lg-center main-yellow ">*/}
                                    {/*    <div className="align-self-lg-center mr-lg-2">*/}
                                    {/*        <Face id="AdDetailFaceIcon"/>*/}
                                    {/*    </div>*/}
                                    {/*    <div id="AdDetailProfile" className="d-flex-column align-items-lg-center">*/}
                                    {/*        <div className="d-flex ">{adDetailPage.data.nom + " " + adDetailPage.data.prenom }</div>*/}
                                    {/*        <div className="text-center"> {adDetailPage.data.ad_final_price}</div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                </div>
                                <div className=" main-white mt-lg-3 mb-lg-3 mr-lg-2 ml-lg-2">
                                    {adDetailPage.data.details}
                                </div>
                                <div  id="adDetailTransportType" className={clsx("mt-lg-3 mb-lg-3 main-green font-weight-bold text-center" ,"main-green" && adDetailPage.data?.type==="GUARANTEED"  , "main-red" && adDetailPage.data?.type==="GUARANTEED")}>
                                    Transport Type : {adDetailPage.data?.type}
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
                            <Details price={adDetailPage.data.ad_final_price != null ? adDetailPage.data.ad_final_price+"DA" : "Negotiated"} type={adDetailPage.data.type} productType={adDetailPage.data.name} image={endpoints.BASE_URL_ADS+ adDetailPage.data.image} volume={`${adDetailPage.data.start_volume}CM3 ~ ${adDetailPage.data.end_volume}CM3`} weight={ `${adDetailPage.data.start_weight}G ~ ${adDetailPage.data.end_weight}G`}  created_at={moment(adDetailPage.data.created_at).format('L')} details={adDetailPage.data.details} address={adDetailPage.data.address} title={adDetailPage.data.title} wilaya_from={`${wilayasLookup[Number(adDetailPage.data.wilaya_from)]}`} wilaya_to={`${wilayasLookup[adDetailPage.data.wilaya_to]}`} />
                        </div>
                    </div>
                </div>
                <div className="offset-6 col-6" >
                    <div className="pl-lg-3 pr-lg-3">
                        <div style={{height : "fit-content"}} className="main-black-bg p-3 with-shadow">
                            {!viewAsAdOwner ? (
                                <IconButton onClick={()=>setSignalProfileDialogStatus(true)} style={{position : "absolute" , top : 0 , right :"2rem" }} className="main-white" >
                                    <Flag  className="main-red" />
                                </IconButton>
                            ) : null }

                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <Avatar id="profileAvatar" className="pt-lg-2 pb-lg-2" >{adDetailPage.data.nom[0] + adDetailPage.data.prenom[0]}</Avatar>
                                <div id="profileName" className="main-white font-weight-bold pt-lg-1 pb-lg-1">{adDetailPage.data.nom +" "+ adDetailPage.data.prenom}</div>
                                <div className="main-gray pt-lg-1 pb-lg-1 profileContact"> <AlternateEmail/> {adDetailPage.data.email} </div>
                                <div className="main-gray pt-lg-1 pb-lg-1 profileContact"> <Phone/> {adDetailPage.data.tel} </div>
                                <Rating className="mb-lg-3" size="medium" id="ProfileRanking" name="read" value={4.25} precision={0.25} readOnly />
                                <div style={{height : "5px" , backgroundColor : "var(--main-yellow)"}} className="w-75"/>
                            </div>
                            {/*<div id="ProfileChipsContainer"  className="d-flex  mt-lg-3 mb-lg-3">*/}
                            {/*    {user.data.profile.transporter_id ? <Chip className="profileChip" label="Transporter" /> : null }*/}
                            {/*    {user.data.profile.transporter_id ==="CERTIFIED" ? <Chip className="profileChip" label="Certified" /> : null }*/}
                            {/*</div>*/}
                            <div className="d-flex flex-column">
                                <div className="mt-lg-2 mb-lg-2"> <span className="main-gray"><LocationOn/> Address : </span> <span className="main-white"> {adDetailPage.data.address}</span></div>
                                {/*<div className="mt-lg-3 mb-lg-2 main-gray"> <LocationCity/> Trajets : </div>*/}
                                {/*<div className="d-flex flex-wrap justify-content-center">*/}
                                {/*    { user.data.profile?.trajets.map((trajet, index)=>{*/}
                                {/*        return (*/}
                                {/*            <Chip key={index} className="profileWilayaChip m-lg-2" label={`${wilayasLookup[Number(trajet.trajet_wilaya_from)]} -> ${wilayasLookup[Number(trajet.trajet_wilaya_to)]}`} />*/}
                                {/*        )*/}
                                {/*    })}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    viewAsAdOwner ? (adStatusForTheUser ==="TRANSPORTER_CONFIRMING" ? (
                            <div className="d-lg-flex justify-content-lg-end p-4">
                                <Button disabled id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<Check/>}>
                                    Delivered !
                                </Button>
                            </div>
                        ) : adStatusForTheUser ==="USER_ACCEPTING" ? (
                        <div className="d-lg-flex justify-content-lg-end p-4">
                            <Button disabled id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<Check/>}>
                                Waiting the transporter confirmation ...
                            </Button>
                        </div>
                    ) : adStatusForTheUser ==="TRANSPORTER_POSTULING" && requestDeliveryTransportersPostuling.length ? (
                            <div className="d-lg-flex justify-content-lg-end p-4">
                                <Button onClick={()=>setTransporterPostulingDialogStatus(true)} id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<Badge badgeContent={requestDeliveryTransportersPostuling.length} color="primary"><ListAlt/> </Badge>}>
                                    View All Transporters requests
                                </Button>
                            </div>
                    ) : <div className="d-lg-flex justify-content-lg-end p-4">
                            <Button disabled={true} onClick={()=>setTransporterPostulingDialogStatus(true)} id="requestButton" style={{ textTransform : "capitalize"}} className="main-yellow-bg main-brown font-weight-bold" variant="contained" startIcon={<Badge badgeContent={requestDeliveryTransportersPostuling.length} color="primary"><ListAlt/> </Badge>}>
                                No Transporters requests in the moment !
                            </Button>
                        </div>)  :
                    localStorage.getItem("transporter_id") ? (
                        <div className="d-lg-flex justify-content-lg-end p-4">
                            <RequestDeliveryButton status={adStatusForTheTransporter} submitReqDelivery={submitReqDelivery} />
                        </div>
                    ):null

                }
                <Dialog
                    open={transportersPostlingDialog}
                    onClose={()=>setTransporterPostulingDialogStatus(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"All Available Offers"}
                    </DialogTitle>
                    <DialogContent>
                        {
                            requestDeliveryTransportersPostuling.map((reqDelivery)=>{
                                console.log("MAP REQ ID =", reqDelivery.delivery_request_id);
                                return(
                                    <div className="d-flex align-items-center">
                                        <Avatar className="mr-lg-2">MS</Avatar>
                                        <div className="d-flex flex-column mr-lg-2">
                                            <div> transporter_id = { reqDelivery.transporter_id}</div>
                                            <Rating className="mb-lg-3" size="medium" id="ProfileRanking" name="read" value={4.25} precision={0.25} readOnly />
                                        </div>
                                        <div className="d-flex mr-lg-2" >
                                            <IconButton onClick={()=>{   submitUserReqDelivery("USER_ACCEPTING", reqDelivery.delivery_request_id );   }} className="main-green" aria-label="delete">
                                                <Check/>
                                            </IconButton>
                                            <IconButton  onClick={()=>{submitUserReqDelivery("USER_REJECTING", reqDelivery.delivery_request_id ); }} className="main-red"  aria-label="add an alarm">
                                                <Cancel/>
                                            </IconButton>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>setTransporterPostulingDialogStatus(false)}>Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={signalProfileDialogStatus}
                    onClose={handleCloseSignalProfileDialog}
                    TransitionComponent={Transition}
                    id="adAddDialogBody"
                    fullScreen={true}
                    fullWidth={true}
                >
                    <AppBar id="adAddDialogAppBar" sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseSignalProfileDialog}
                                aria-label="close"
                            >
                                <Close/>
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Flag The User
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className="mt-5">
                        {/*<div className="col-12 d-flex mb-lg-3">*/}
                        {/*    <div className="col-6">*/}
                        {/*        <ComboBox required={true} label={"From ( Wilaya )"} options={wilayas} value={wilayaFrom} setValue={setWilayaFrom} />*/}
                        {/*    </div>*/}
                        {/*    <div className="col-6">*/}
                        {/*        <ComboBox  required={true} label={"TO (Wilaya)"}  options={wilayas} value={wilayaTo} setValue={setWilayaTo}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-12 mb-lg-3 d-flex">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <ComboBox required={true} label={"Package Type"} options={productClassifications.data?.product_types} value={productType} setValue={setProductTypeId} idAttr={"product_type_id"} valAttr={"name"}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-12 d-flex mb-lg-3">*/}
                        {/*    <div className="col-6">*/}
                        {/*        <ComboBox  required={true} label={"Package Weight"} options={productClassifications.data?.product_weights} value={fourchetteWeight} setValue={setFourchetteWeight} idAttr={"fourchette_weight_id"} valAttr={"start_weight"} val2Attr={"end_weight"}/>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-6">*/}
                        {/*        <ComboBox  required={true} label={"Package Volume"} options={productClassifications.data?.products_volumes} value={fourchetteVolume} setValue={setFourchetteVolume} idAttr={"fourchette_volume_id"} valAttr={"start_volume"} val2Attr={"end_volume"}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-12 mb-lg-3 d-flex">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <ComboBox  required={true} label={"Transport Type"} options={[{name : "GUARANTEED" , id : "GUARANTEED"} , {name : "NOT GURANTEED" , id : "NOT GUARANTEED"} ]} value={deliveryType} setValue={setDeliveryType} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-12 mb-lg-3 d-flex">*/}
                        {/*    <div className="col-6">*/}
                        {/*        <TextField name={"nom"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.nom}  required fullWidth id="outlined-basic" label="Nom" variant="outlined" />*/}
                        {/*    </div>*/}
                        {/*    <div className="col-6">*/}
                        {/*        <TextField name={"prenom"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.prenom}  required fullWidth id="outlined-basic" label="Prenom" variant="outlined" />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <TextField multiline rows={4} name={"signal_content"} onChange={(event)=>setSignalprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}    required fullWidth id="outlined-basic" label="Specify your Flag details " variant="outlined" />
                            </div>
                        </div>
                        {/*<div className="col-12 mb-lg-3 d-flex">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <TextField name={"tel"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.tel}  required fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-12 mb-lg-3 d-flex">*/}
                        {/*</div>*/}
                        <div className="col-12 d-flex">
                            <Button onClick={submitSignalProfile}  disabled={false} id="sumbitAdAddDialogButton" className="ml-lg-3" startIcon={<Publish/>} variant="outlined">Submit </Button>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>
            )




    )
}
