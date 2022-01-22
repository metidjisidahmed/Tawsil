import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Backdrop, CircularProgress, TextField as TextFieldMui} from "@mui/material";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox} from "@mui/material";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {FormControl, InputLabel, Select} from "@material-ui/core";
import {CheckBoxOutlineBlank, LockOutlined} from "@mui/icons-material";
// import {fetchSignUpUser} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Autocomplete, Switch} from "@mui/material";
import wilayas from "../../Globals/wilaya";
import {CheckBox as CheckBoxIcon} from "@mui/icons-material";
import ComboBox from "../0SubCompounents/ComboBox";
import ComboBoxMulti from "../0SubCompounents/ComboBoxMulti";
import './style.css';
import {tableIcons , tableLang} from "../../Globals/MaterialTableWidgets";
import wilayasLookup from "../../Globals/wilayasLookup";
import swal from 'sweetalert';


import MaterialTable from "material-table";
import {fetchSignupClient, fetchSignupTransporter} from "../../redux/actions/actions";
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "var(--main-yellow)",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor : "var(--main-yellow)"
    },
    card_paper:{
        padding : "5px" , borderRadius : "5px" , backgroundColor : "#98DED9", margin : '2rem'
    },
    icon_button_blue:{
        color : "cyan"
    },
    icon_button_green:{
        color : "#39e600"
    },
    icon_button_red:{
        color : "#ff3333"
    },
    icon_button_yellow :{
        color : "yellow"
    },
    appBar:{
        position: 'relative',
        marginBottom : "3rem"
    },
    title:{
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    subTitle:{
        marginBottom : "2rem"
    },
    tab_appBar_dialog : {
        flexGrow: 1,
        width: '100%',
    } ,
    formControl : {
        width: '100%',
    },
    title_dialog: {
        marginLeft: theme.spacing(2),
        flex: 1,
    }
}));

// const TrajetsTable=()=>{
//     const trajetsColumns = [
//         { field : 'wilaya_from' , title : "Depart Wilaya" , render: rowData => (
//                 <div style={{fontSize : '0.8rem'}}> {rowData.wilaya_from}</div>
//             ) , editComponent: props=> {
//                 console.log("PROPS EDIT =", props);
//                 return (
//                     <ComboBox value={props.value} setValue={e => props.onChange(Number(e.target.value))}
//                               label={"Depart Wilaya"} required={true} options={wilayas}/>
//                     )
//
//             }  }
//         // { field : 'wilaya_to' , title : 'Arrival Wilaya' ,render: rowData => (
//         //         <div style={{fontSize : '0.8rem'}}> {rowData.wilaya_to}</div>
//         //     ), editComponent: props=>(
//         //         <ComboBox setValue={(value)=>props.wilaya_to=value}  defaultValue={props?.wilaya_to} label={"Arrival Wilaya"} required={true} options={wilayas} />
//         //     ) }
//     ];
//     const tablePropositionsOptions = {
//         //TO DO THE FILTER
//         filtering : false ,
//         actionsColumnIndex: 0 ,
//         search: false ,
//         exportButton: false ,
//         grouping: false ,
//         selection : false ,
//         // pageSizeOptions : [10,20,30] , // page trop lente !!
//         // exportFileName : "Historique_des_payements"
//         headerStyle: {
//             color: 'var(--lightGrayTableTitleTxt)'
//         }
//     } ;
//     let [actualChoosenTrajets, setActualChoosenTrajets] = useState([]);
//
//     return(
//         <MaterialTable
//             title="Trajets"
//             icons={tableIcons}
//             columnst={trajetsColumns}
//             data={actualChoosenTrajets}
//             localization={tableLang}
//             options={tablePropositionsOptions}
//             className={'tableBg'}
//             style={{
//                 border: '1px solid #DFE0EB',
//                 borderRadius : '8px'
//             }}
//
//             editable={{
//                 onRowAdd: newData => new Promise((resolve, reject) => {
//                     if (newData.wilaya_from && newData.wilaya_to) {
//                         setActualChoosenTrajets(oldState => oldState.concat(newData));
//                         resolve();
//                     } else {
//                         reject();
//                     }
//                 }),
//                 onRowUpdate: (newData, oldData) => {
//                     return new Promise((resolve, reject) => {
//                         let actualData = actualChoosenTrajets.filter((obj, index) => {
//                             return (obj.wilaya_from === oldData.wilaya_from && obj.wilaya_to === oldData.wilaya_to)
//                         })[0];
//                         let actualIndex = actualChoosenTrajets.indexOf(actualData);
//                         console.log('Actual index =', actualIndex, 'Actual Data =', actualData);
//                         let newObjects = [...actualChoosenTrajets];
//                         actualChoosenTrajets[oldData.tableData.id] = newData;
//                         setActualChoosenTrajets(newObjects);
//                         resolve();
//                     })
//                 },
//                 onRowDelete: oldData => {
//                     return new Promise((resolve, reject) => {
//                         let newObjects = [...actualChoosenTrajets];
//                         newObjects.splice(oldData.tableData.id, 1);
//                         setActualChoosenTrajets(newObjects);
//                         resolve();
//                     })
//                 }
//             }}
//         />
//         )
//
// }

export default function SignUpCompounent() {
    const classes = useStyles();
    const [signUpForm , setSignUpForm]=useState();
    const [isTransporter , setTransporterStatus ]=useState(false);
    const [isCerifiedTransporter, setCertifiedTransporterStatus] = useState(false);
    let [actualChoosenTrajets, setActualChoosenTrajets] = useState([]);

    const history=useHistory();
    let reqFeedback = useSelector(state=>state.reqFeedback)

    const trajetsColumns = [
        { field : 'wilaya_from' , title : "Depart Wilaya" , render: rowData => (
                <div style={{fontSize : '0.8rem'}}> {wilayasLookup[rowData.wilaya_from]}</div>
            )

            , lookup: wilayasLookup },
        { field : 'wilaya_to' , title : "Arrival Wilaya" , render: rowData => (
                <div style={{fontSize : '0.8rem'}}> {wilayasLookup[rowData.wilaya_to]}</div>
            )
            , lookup: wilayasLookup }

    ];
    const tablePropositionsOptions = {
        //TO DO THE FILTER
        filtering : false ,
        // actionsColumnIndex: 0 ,
        search: false ,
        exportButton: false ,
        grouping: false ,
        selection : false ,
        // pageSizeOptions : [10,20,30] , // page trop lente !!
        // exportFileName : "Historique_des_payements"
        headerStyle: {
            color: 'var(--lightGrayTableTitleTxt)'
        }
    } ;
    const dispatch = useDispatch();
    /* default table structure */

    let submitSignUp=()=>{
        if(isTransporter){
            let topost = {...signUpForm , trajets : actualChoosenTrajets}
            console.log("TRANSPORTER ");
            if(isCerifiedTransporter){
                topost={...topost  , status : "PENDING"}
                console.log("CERTIFIED !");
            }else{
                topost={...topost , status : "NULL"}
            }
            console.log("TO POST =", topost);
            dispatch(fetchSignupTransporter(topost))
                .then(res=>{
                    return swal({
                        title: "Done !",
                        text: res,
                        icon: "success",
                    });
                })
                .then(()=>{
                    history.push("/");
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
            console.log("CLIENT");
            console.log("POST =", signUpForm);
            dispatch(fetchSignupClient(signUpForm))
                .then(res=>{
                    return swal({
                        title: "Done !",
                        text: res,
                        icon: "success",
                    });
                })
                .then(()=>{
                    history.push("/");
                })
                .catch(errMess=>{
                    return swal({
                        title: "ERROR !",
                        text: errMess,
                        icon: "error",
                    });
                })
        }

    }

    return (
        <Container className="mb-4" component="main" maxWidth="lg" style={{backgroundColor : '#333'}}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={reqFeedback.signup.loading}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography className="main-white" component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                autoComplete="fname"
                                name="nom"
                                variant="outlined"
                                required
                                fullWidth
                                id="nom"
                                label="Nom"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                variant="outlined"
                                required
                                fullWidth
                                id="prenom"
                                label="Prenom"
                                name="prenom"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="L'adresse Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                variant="outlined"
                                required
                                fullWidth
                                type="text"
                                id="tel"
                                label="phone Number"
                                name="tel"
                                autoComplete="phoneNumber"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                variant="outlined"
                                required
                                fullWidth
                                type="text"
                                id="address"
                                label="L'addresse principale"
                                name="address"
                                autoComplete="address"
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={
                                <Switch    checked={isTransporter} onChange={()=>setTransporterStatus(!isTransporter)} inputProps={{ 'aria-label': 'controlled' }} />} label="I wanna became a Transporter" />
                        </Grid>
                    </Grid>
                    <Grid  hidden={!isTransporter} >

                        <MaterialTable
                            title="Trajets"
                            actions={false}
                            icons={tableIcons}
                            columns={trajetsColumns}
                            data={actualChoosenTrajets}
                            localization={tableLang}
                            options={tablePropositionsOptions}
                            className={'tableBg'}
                            style={{
                                border: '1px solid #DFE0EB',
                                borderRadius : '8px',
                                // minWidth : "800px"
                            }}

                            editable={{
                                onRowAdd: newData => new Promise((resolve, reject) => {
                                    if (newData.wilaya_from && newData.wilaya_to) {
                                        setActualChoosenTrajets(oldState => oldState.concat(newData));
                                        resolve();
                                    } else {
                                        reject();
                                    }
                                }),
                                onRowUpdate: (newData, oldData) => {
                                    return new Promise((resolve, reject) => {
                                        let actualData = actualChoosenTrajets.filter((obj, index) => {
                                            return (obj.wilaya_from === oldData.wilaya_from && obj.wilaya_to === oldData.wilaya_to)
                                        })[0];
                                        let actualIndex = actualChoosenTrajets.indexOf(actualData);
                                        console.log('Actual index =', actualIndex, 'Actual Data =', actualData);
                                        let newObjects = [...actualChoosenTrajets];
                                        newObjects[oldData.tableData.id] = newData;
                                        console.log("NEW DATA =", newData);
                                        setActualChoosenTrajets(newObjects);
                                        resolve();
                                    })
                                },
                                onRowDelete: oldData => {
                                    return new Promise((resolve, reject) => {
                                        let newObjects = [...actualChoosenTrajets];
                                        newObjects.splice(oldData.tableData.id, 1);
                                        setActualChoosenTrajets(newObjects);
                                        resolve();
                                    })
                                }
                            }}
                        />
                        <Grid className="mt-lg-2 mb-lg-2" item xs={12}>
                            <FormControlLabel control={
                                <Switch    checked={isCerifiedTransporter} onChange={()=>setCertifiedTransporterStatus(!isCerifiedTransporter)} inputProps={{ 'aria-label': 'controlled' }} />} label="I wanna be certified by Tawsil" />
                        </Grid>
                    </Grid>

                    <Button
                        disabled={!(signUpForm?.nom && signUpForm?.prenom && signUpForm?.email && signUpForm?.tel && signUpForm?.address && signUpForm?.password)}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // style={signUpForm.nom && signUpForm.prenom && signUpForm.email && signUpForm.password && isChecked && ( ( signUpForm.nss && signUpForm.accountType==="Adherant") || ( signUpForm.matricule && signUpForm.accountType==="Medecin") ) ?  {} : {opacity : '0.2'}}
                        // disabled={! (signUpForm.nom && signUpForm.prenom && signUpForm.email && signUpForm.password && isChecked && ( ( signUpForm.nss && signUpForm.accountType==="Adherant") || ( signUpForm.matricule && signUpForm.accountType==="Medecin") ))}
                        onClick={submitSignUp}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link style={{textDecoration : "underline"}} href="/login" variant="body2" className="main-yellow">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
