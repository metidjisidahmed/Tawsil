import {
    AppBar,
    Button,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText, Slide, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {AddCircle, Close, Publish} from "@mui/icons-material";
import './addAdDialog.css';
import ComboBox from "./ComboBox";
import { styled } from '@mui/material/styles';
import wilayas from "../../Globals/wilaya";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostAd} from "../../redux/actions/actions";
import swal from "sweetalert";
import {history} from "../../App";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Input = styled('input')({
    display: 'none',
});
export default function AdAddDialog(props){

    const [isAddAdDialogOpen, setAddAdDialogStatus] = useState(false);
    const [addAdFormString, setAdAddFormString] = useState({"image": null});
    const [wilayaFrom, setWilayaFrom] = useState(null);
    const [wilayaTo, setWilayaTo] = useState(null);
    const [fourchetteWeight, setFourchetteWeight] = useState(null);
    const [productType, setProductTypeId] = useState(null);
    const [fourchetteVolume, setFourchetteVolume] = useState(null);
    const [deliveryType, setDeliveryType] = useState("GUARANTEED");

    const productClassifications= useSelector(state=> state.productsClassifications);
    const handleCloseAddAdDialog=()=>{
        setAddAdDialogStatus(false);
    }
    const dispatch = useDispatch();
    const submitAdAdd=()=>{
        let toPost={
            ...addAdFormString,
            user_id: localStorage.getItem("user_id"),
            wilaya_from : wilayaFrom,
            wilaya_to : wilayaTo,
            type : deliveryType,
            fourchette_weight_id : fourchetteWeight,
            product_type_id : productType,
            fourchette_volume_id : fourchetteVolume
        }
        console.log("To post =", toPost);
        dispatch(fetchPostAd(toPost))
            .then(res=>{
                swal({
                    title: "Done !",
                    text: res.message,
                    icon: "success",
                })
                    .then(()=>{
                        history.push("/ad/"+res.id);

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

    return(
        <React.Fragment>
            <div className="d-flex justify-content-center mt-lg-2 mb-lg-4">
                <Button id="addAdButton" onClick={()=>setAddAdDialogStatus(true)} startIcon={<AddCircle style={{fontSize : "1.5rem"}} />} style={{fontSize : "1.5rem" , borderColor : "var(--main-yellow)"}} className="main-white main-gray-bg" variant="outlined">Add a Package to deliver </Button>
            </div>
            <Dialog
                fullScreen
                open={isAddAdDialogOpen}
                onClose={handleCloseAddAdDialog}
                TransitionComponent={Transition}
                id="adAddDialogBody"
            >
                <AppBar id="adAddDialogAppBar" sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseAddAdDialog}
                            aria-label="close"
                        >
                            <Close/>
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add your package to be delivered
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="mt-5">
                    <div className="col-12 d-flex mb-lg-3">
                        <div className="col-6">
                            <ComboBox required={true} label={"From ( Wilaya )"} options={wilayas} value={wilayaFrom} setValue={setWilayaFrom} />
                        </div>
                        <div className="col-6">
                            <ComboBox  required={true} label={"TO (Wilaya)"}  options={wilayas} value={wilayaTo} setValue={setWilayaTo}/>
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <ComboBox required={true} label={"Package Type"} options={productClassifications.data?.product_types} value={productType} setValue={setProductTypeId} idAttr={"product_type_id"} valAttr={"name"}/>
                        </div>
                    </div>
                    <div className="col-12 d-flex mb-lg-3">
                        <div className="col-6">
                            <ComboBox  required={true} label={"Package Weight"} options={productClassifications.data?.product_weights} value={fourchetteWeight} setValue={setFourchetteWeight} idAttr={"fourchette_weight_id"} valAttr={"start_weight"}/>
                        </div>
                        <div className="col-6">
                            <ComboBox  required={true} label={"Package Volume"} options={productClassifications.data?.products_volumes} value={fourchetteVolume} setValue={setFourchetteVolume} idAttr={"fourchette_volume_id"} valAttr={"start_volume"}/>
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <ComboBox  required={true} label={"Transport Type"} options={[{name : "GUARANTEED" , id : "GUARANTEED"} , {name : "NOT GURANTEED" , id : "NOT GUARANTEED"} ]} value={deliveryType} setValue={setDeliveryType} />
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <TextField name={"title"} onChange={(event)=>setAdAddFormString(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}  defaultValue={""}  required fullWidth id="outlined-basic" label="Ad Title" variant="outlined" />
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <TextField
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
                        <Button onClick={submitAdAdd}  disabled={!(productType && wilayaTo && wilayaFrom && fourchetteWeight && fourchetteVolume && addAdFormString.title && addAdFormString.details)} id="sumbitAdAddDialogButton" className="ml-lg-3" startIcon={<Publish/>} variant="outlined">Submit </Button>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>

    )
}
