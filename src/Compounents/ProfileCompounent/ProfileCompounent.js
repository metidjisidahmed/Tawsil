import {
    Alert, AlertTitle, AppBar,
    Avatar, Button,
    CardActionArea,
    CardContent, Checkbox,
    Chip, Dialog, Fab,
    FormControlLabel,
    FormGroup, IconButton, Input,
    Rating, Slide,
    Tab,
    Tabs, TextField, Toolbar,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {
    AccessTime,
    AddRoad,
    AlternateEmail, AssignmentInd, AssignmentTurnedIn, Close, ContactMail, DeleteForever, Edit,
    Engineering,
    Face, FindReplace, FitnessCenter, GppBad, History,
    HourglassEmpty, Inbox,
    LocationCity,
    LocationOn, ModeEdit,
    People,
    Phone, PriceCheck, Publish
} from "@mui/icons-material";
import "./styles.css"
import Card from "@mui/material/Card";
import {BinaryImageSrc} from "../0SubCompounents/BinaryImage";
import {Link} from "react-router-dom";
import Pagination from "../0SubCompounents/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteAd, fetchDeleteAd,
    fetchEditAd,
    fetchEditProfile,
    fetchGetProductClasses,
    fetchGetProfileDetails
} from "../../redux/actions/actions";
import wilayasLookup from "../../Globals/wilayasLookup";
import endpoints from "../../redux/endpoints";
import moment from "moment";
import Loader from "react-loader-spinner";
import ComboBox from "../0SubCompounents/ComboBox";
import wilayas from "../../Globals/wilaya";
import swal from "sweetalert";
import {history} from "../../App";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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



const AdSearch =({ openEditDialog , isTransporter,status , image , title , details , price , productType , volume , weight , created_at , wilaya , ad_id , owner})=>{
    const dispatch = useDispatch();

    const confirmDelete =()=>{
        swal({
            title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(fetchDeleteAd(ad_id))
                        .then(()=>{
                            return swal("Your ad is deleted succesfully !", {
                                icon: "success",
                            });
                        })

                }
            });
    }


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
                                        : status==="USER_REJECTING" || status==="TRANSPORTER_REJECTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="error">Rejected !</Alert> </div> :null
                            ):(
                                status==="TRANSPORTER_CONFIRMING" ?  <div  className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="success">Delivered !</Alert> </div>
                                    : status==="USER_ACCEPTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="warning">Waiting the transporter confirmation !</Alert> </div>
                                    : status==="TRANSPORTER_POSTULING"  ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="info">Waiting your confirmation !</Alert> </div>
                                        : status==="USER_REJECTING" || status==="TRANSPORTER_REJECTING" ? <div className="pt-lg-2 adBadgeContainer"><Alert variant="filled" severity="error">Rejected !</Alert> </div> :null
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
            <div className="pl-lg-4 d-flex flex-column justify-content-around align-items-center">
                <Fab onClick={confirmDelete} size={"large"} className="main-red" aria-label="Delete">
                    <DeleteForever/>
                </Fab>
                <Fab onClick={()=>openEditDialog(ad_id)} size="large" aria-label="Delete">
                    <Edit/>
                </Fab>
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

const TransporterStatus=({profile})=>{
    if(!profile || profile.transporter_status=="NULL"){return null }
    switch (profile.transporter_status){
        case "CERTIFIED":
        return(
            <Alert className="mb-4 with-shadow" severity="success">
                <AlertTitle>Congrats , you are already certified ! </AlertTitle>
            </Alert>
            )
        case "PENDING":
        return(
            <Alert className="mb-4 with-shadow" severity="info">
                <AlertTitle> Your certifcation request is not treated yet ... </AlertTitle>
            </Alert>
        )
        case "TREATING":
            return (
                <Alert className="mb-4 with-shadow" severity="info">
                    <AlertTitle> Your certifcation request is in the treatment these days ...</AlertTitle>
                </Alert>
            )
        case "VALIDATED":
            return (
                <Alert className="mb-4 with-shadow" severity="warning">
                    <AlertTitle> Your certifcation request is validated , send your papers to us to finalize the conformation !</AlertTitle>
                </Alert>
            )
        default :
        return null
    }


}

export default function ProfileCompounent(){


    const [editProfileDialogStatus, setEditProfileDialogStatus] = useState(false);
    const [isEditAdDialogOpen, setEditAdDialogStatus] = useState(false);
    const handleCloseProfileDialog=()=>{
        setEditProfileDialogStatus(false);
    }
    const handleCloseEditAdDialog=()=>{
        setEditAdDialogStatus(false);
    }
    const [ statsType , setStatsType]=useState("client");
    const [adsType, setAdsType] = useState("client");
    const user = useSelector(state => state.user);
    const handleChangeStatsTypeTab = (event, newValue) => {
        setStatsType(newValue);
    };
    const handleChangeAdsTypeTab = (event, newValue) => {
        setAdsType(newValue);
    };
    const [editProfileForm, setEditprofileForm] = useState({
        nom : "",
        prenom : ""
    });
    const productClassifications= useSelector(state=> state.productsClassifications);

    const [addAdFormString, setAdAddFormString] = useState({"image": null});
    const [wilayaFrom, setWilayaFrom] = useState(null);
    const [wilayaTo, setWilayaTo] = useState(null);
    const [fourchetteWeight, setFourchetteWeight] = useState(null);
    const [productType, setProductTypeId] = useState(null);
    const [fourchetteVolume, setFourchetteVolume] = useState(null);
    const [deliveryType, setDeliveryType] = useState("GUARANTEED");
    const [adIdToEdit, setAdIdtoEdit] = useState(null);
    const submitEditAdd=()=>{
        let toPost={
            ...addAdFormString,
            user_id: localStorage.getItem("user_id"),
            wilaya_from : wilayaFrom,
            wilaya_to : wilayaTo,
            type : deliveryType,
            fourchette_weight_id : fourchetteWeight,
            product_type_id : productType,
            fourchette_volume_id : fourchetteVolume,
            ad_id : adIdToEdit
        }
        console.log("To post =", toPost);
        dispatch(fetchEditAd(toPost))
            .then(res=>{
                swal({
                    title: "Your ad is Updated Successfully !",
                    text: res.message,
                    icon: "success",
                })
                    .then(()=>{
                        window.location.reload();
                    })
            })
            .catch(errMess=>{
                return swal({
                    title: "ERROR !",
                    text: errMess,
                    icon: "error",
                });
            })
    }
    const submitEditProfile =()=>{
        console.log("To post = ", editProfileForm);
        dispatch(fetchEditProfile(editProfileForm))
            .then(res=>{
                swal({
                    title: "Updated Successfully !",
                    text: res.message,
                    icon: "success",
                })
                    .then(()=>{
                        window.location.reload();
                    })
            })
            .catch(errMess=>{
                return swal({
                    title: "ERROR !",
                    text: errMess,
                    icon: "error",
                });
            })
    }
    const dispatch = useDispatch();

    const  openEditDialog=(ad_id)=>{
        console.log("ad =", user.data.ads.asClient.filter(ad => ad.ad_id == ad_id)[0]);
        const adToedit = user.data.ads.asClient.filter(ad => ad.ad_id == ad_id)[0];
        console.log("Wilaya From =", adToedit.wilaya_from);
        setWilayaFrom(Number(adToedit.wilaya_from));
        setWilayaTo(Number(adToedit.wilaya_to));
        setFourchetteWeight(Number(adToedit.fourchette_weight_id));
        setFourchetteVolume(Number(adToedit.fourchette_volume_id));
        setProductTypeId(Number(adToedit.product_type_id));
        setDeliveryType(adToedit.type);
        setAdAddFormString({image: null, title: adToedit.title, details: adToedit.details});
        setEditAdDialogStatus(true);
        setAdIdtoEdit(ad_id);

    }
    useEffect(()=>{
        dispatch(fetchGetProductClasses())
        dispatch(fetchGetProfileDetails())
            .then(()=>{
                console.log("GET PROFILE ");
                setEditprofileForm({
                    nom : user.data.profile.nom,
                    prenom : user.data.profile.prenom,
                    tel : user.data.profile.tel,
                    address : user.data.profile.address,
                });
            })
    },[]);
    if(user.loading){
        return(
            <Typography align="center">
                <Loader
                    type="Rings"
                    color="var(--main-yellow)"
                    height={400}
                    width={400}
                />
            </Typography>
            )
    }
    else if(user.error){
        return (
            <Typography variant="h2" color="var(--main-red)" align="center">
                <Loader
                    type="Rings"
                    color="var(--main-red)"
                    height={400}
                    width={400}
                />
                { user.error}
            </Typography>
        )
    }else{
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
                    <div className="offset-1 col-4 d-flex flex-column " >
                        <TransporterStatus profile={user.data?.profile} />
                        <div style={{height : "fit-content"}} className="main-black-bg p-3 with-shadow">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <IconButton onClick={()=>setEditProfileDialogStatus(true)} style={{position : "absolute" , top : 0 , right :"1rem" }} className="main-white" >
                                    <ModeEdit />
                                </IconButton>
                                <Avatar id="profileAvatar" className="pt-lg-2 pb-lg-2" >{user?.data?.profile?.nom[0] + user?.data?.profile?.prenom[0]}</Avatar>
                                <div id="profileName" className="main-white font-weight-bold pt-lg-1 pb-lg-1">{user?.data?.profile?.nom +" "+ user?.data?.profile?.prenom}</div>
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
                                    { user.data.profile?.trajets?.map((trajet, index)=>{
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
                                { user?.data?.profile?.transporter_id ? <Tab icon={<Engineering /> } value="transporter" label="As a Transporter" /> : null}

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
                                        <CardStats label={"Waiting user reponse ..."} value={user.data.ads.asTransporter.filter(adClient=>adClient.delivery_request_status ==="TRANSPORTER_POSTULING").length} icon={<AssignmentTurnedIn className="main-yellow" style={{ fontSize: 80 }} />} />
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
                        { user?.data?.profile?.transporter_id ?  <Tab icon={<Engineering /> } value="transporter" label="As a Transporter" /> : null }
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
                    { adsType === "client" ? (
                            user.data.ads.asClient.map((ad , index)=>{
                                console.log("Ad =", ad);
                                return(
                                    <AdSearch owner openEditDialog={openEditDialog}  ad_id={ad.ad_id} status={ad.delivery_request_status} price={ad.ad_final_price != null ? ad.ad_final_price+"DA" : "Negotiated"} type={ad.type} productType={ad.name} image={endpoints.BASE_URL_ADS+ ad.image} volume={`${ad.start_volume}CM3 ~ ${ad.end_volume}CM3`} weight={ `${ad.start_weight}G ~ ${ad.end_weight}G`}  created_at={moment(ad.created_at).format('L')} details={ad.details} address={ad.address} title={ad.title} wilaya={`${wilayasLookup[Number(ad.wilaya_from)]} -> ${wilayasLookup[Number(ad.wilaya_to)]}`}  />
                                )
                            })
                        )
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
                <Dialog
                    fullScreen
                    open={editProfileDialogStatus}
                    onClose={handleCloseProfileDialog}
                    TransitionComponent={Transition}
                    id="adAddDialogBody"
                >
                    <AppBar id="adAddDialogAppBar" sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseProfileDialog}
                                aria-label="close"
                            >
                                <Close/>
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Edit Your Profile
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
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-6">
                                <TextField name={"nom"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.nom}  required fullWidth id="outlined-basic" label="Nom" variant="outlined" />
                            </div>
                            <div className="col-6">
                                <TextField name={"prenom"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.prenom}  required fullWidth id="outlined-basic" label="Prenom" variant="outlined" />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <TextField name={"address"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.address}  required fullWidth id="outlined-basic" label="Address" variant="outlined" />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <TextField name={"tel"} onChange={(event)=>setEditprofileForm(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={editProfileForm.tel}  required fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                        </div>
                        <div className="col-12 d-flex">
                            <Button onClick={submitEditProfile}  disabled={!(editProfileForm.tel && editProfileForm.address && editProfileForm.nom && editProfileForm.prenom)} id="sumbitAdAddDialogButton" className="ml-lg-3" startIcon={<Publish/>} variant="outlined">Submit </Button>
                        </div>
                    </div>
                </Dialog>
                <Dialog
                    fullScreen
                    open={isEditAdDialogOpen}
                    onClose={handleCloseEditAdDialog}
                    TransitionComponent={Transition}
                    id="adAddDialogBody"
                >
                    <AppBar id="adAddDialogAppBar" sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseEditAdDialog}
                                aria-label="close"
                            >
                                <Close/>
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                EDit your package info
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className="mt-5">
                        <div className="col-12 d-flex mb-lg-3">
                            <div className="col-6">
                                <ComboBox required={true} label={"From ( Wilaya )"} options={wilayas} value={wilayaFrom} setValue={setWilayaFrom} defaultInputValue={wilayas.filter(wilaya=>wilaya.id === wilayaFrom)[0]?.name} />
                            </div>
                            <div className="col-6">
                                <ComboBox  required={true} label={"TO (Wilaya)"}  options={wilayas} value={wilayaTo} setValue={setWilayaTo} defaultInputValue={wilayas.filter(wilaya=>wilaya.id === wilayaTo)[0]?.name} />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <ComboBox required={true} label={"Package Type"} options={productClassifications.data?.product_types} value={productType} setValue={setProductTypeId} idAttr={"product_type_id"} valAttr={"name"} defaultInputValue={ productClassifications?.data?.product_types?.length ?  productClassifications.data.product_types.filter(product=>product.product_type_id == productType)[0]?.name : ""} />
                            </div>
                        </div>
                        <div className="col-12 d-flex mb-lg-3">
                            <div className="col-6">
                                <ComboBox  required={true} label={"Package Weight"} options={productClassifications.data?.product_weights} value={fourchetteWeight} setValue={setFourchetteWeight} idAttr={"fourchette_weight_id"} valAttr={"start_weight"} val2Attr={"end_weight"} defaultInputValue={ productClassifications?.data?.product_weights?.length ?  productClassifications.data.product_weights.filter(product=>product.fourchette_weight_id == fourchetteWeight)[0]?.start_weight + '->' +  productClassifications.data.product_weights.filter(product=>product.fourchette_weight_id == fourchetteWeight)[0]?.end_weight : ""}  />
                            </div>
                            <div className="col-6">
                                <ComboBox  required={true} label={"Package Volume"} options={productClassifications.data?.products_volumes} value={fourchetteVolume} setValue={setFourchetteVolume} idAttr={"fourchette_volume_id"} valAttr={"start_volume"} val2Attr={"end_volume"} defaultInputValue={ productClassifications?.data?.products_volumes?.length ?  productClassifications.data.products_volumes.filter(product=>product.fourchette_volume_id == fourchetteVolume)[0]?.start_volume + '->' +  productClassifications.data.products_volumes.filter(product=>product.fourchette_volume_id == fourchetteVolume)[0]?.end_volume : ""}/>
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <ComboBox  required={true} label={"Transport Type"} options={[{name : "GUARANTEED" , id : "GUARANTEED"} , {name : "NOT GURANTEED" , id : "NOT GUARANTEED"} ]} value={deliveryType} setValue={setDeliveryType} defaultInputValue={deliveryType} />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <TextField name={"title"} onChange={(event)=>setAdAddFormString(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={addAdFormString.title}  required fullWidth id="outlined-basic" label="Ad Title" variant="outlined" />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="col-12">
                                <TextField
                                    defaultValue={addAdFormString.details}
                                    name={"details"} onChange={(event)=>setAdAddFormString(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Ad Details"
                                    multiline
                                    rows={4}
                                />
                            </div>
                        </div>
                        <div className="col-12 mb-lg-3 d-flex">
                            <div className="offset-4 col-4">
                                <label htmlFor="contained-button-file" style={{width : "100%"}}>
                                    <Input name={"image"} onChange={(event)=>{console.log("event target =", event.target); setAdAddFormString(oldState=>{return {...oldState ,[event.target.name] : event.target.files[0] } });}}  required accept="image/*" id="contained-button-file"  type="file" />
                                    <Button variant="contained" component="div" className="w-100 main-brown-bg main-white">
                                        Upload Image for you ad ( OPTIONAL )
                                    </Button>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <Button onClick={submitEditAdd}  disabled={!(productType && wilayaTo && wilayaFrom && fourchetteWeight && fourchetteVolume && addAdFormString.title && addAdFormString.details)} id="sumbitAdAddDialogButton" className="ml-lg-3" startIcon={<Publish/>} variant="outlined">Submit </Button>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>

        )
    }

}
