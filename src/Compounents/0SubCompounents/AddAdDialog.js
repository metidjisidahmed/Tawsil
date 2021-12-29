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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Input = styled('input')({
    display: 'none',
});
export default function AdAddDialog(props){
    const [isAddAdDialogOpen, setAddAdDialogStatus] = useState(false);
    const handleCloseAddAdDialog=()=>{
        setAddAdDialogStatus(false);
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
                            <ComboBox  required={true} label={"From ( Wilaya)"}/>
                        </div>
                        <div className="col-6">
                            <ComboBox  required={true} label={"TO (Wilaya)"}/>
                        </div>
                    </div>
                    <div className="col-12 d-flex mb-lg-3">
                        <div className="col-6">
                            <ComboBox required={true} label={"Package Type"}/>
                        </div>
                        <div className="col-6">
                            <ComboBox  required={true} label={"Package Width"}/>
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <ComboBox  required={true} label={"Transport Type"} />
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <TextField  required fullWidth id="outlined-basic" label="Ad Title" variant="outlined" />
                        </div>
                    </div>
                    <div className="col-12 mb-lg-3 d-flex">
                        <div className="col-12">
                            <TextField
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
                                    <Input required accept="image/*" id="contained-button-file"  type="file" />
                                    <Button variant="contained" className="w-100 main-brown-bg main-white">
                                        Upload Image for you ad
                                    </Button>
                                </label>
                            </div>
                    </div>
                    <div className="col-12 d-flex">
                        <Button id="sumbitAdAddDialogButton" className="main-yellow ml-lg-3" startIcon={<Publish/>} variant="outlined">Submit </Button>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>

    )
}
