import React, {Component, useState} from "react"
import './styles.css'
import Logo from '../../assets/The logo dark bg.png'
import {
    Button,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Nav, Navbar, NavbarBrand,
    NavbarText, NavbarToggler,
    NavItem,
    UncontrolledDropdown
} from "reactstrap";
import {NavLink} from "react-router-dom";
import {Login} from "@mui/icons-material"
import Slide from '@mui/material/Slide';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {history} from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function  LoginDialog({isOpen , handleClose , setUserForm , submitNewUser}){

    return(
        <Dialog  TransitionComponent={Transition}  open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New User to the Dashoard</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Something to write here ...
                </DialogContentText>
                <TextField
                    onChange={(event)=>setUserForm(oldState=>{ return {...oldState , [event.target.name] : event.target.value} })}
                    style={{marginBottom : '1rem'}}
                    autoFocus
                    margin="dense"
                    name="email"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField
                    onChange={(event)=>setUserForm(oldState=>{ return {...oldState , [event.target.name] : event.target.value} })}
                    style={{marginBottom : '1rem'}}
                    margin="dense"
                    name="password"
                    id="password"
                    label="The Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={submitNewUser} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export function Header(props) {
    const [isNavOpen, setNavOpenStatus] = useState(false);
    const [isLoginOpen, setLoginOpenStatus] = useState(false);
    const toggleNav=()=>{
        setNavOpenStatus(!isNavOpen);
    }
    const [loginUserForm , setLoginUserForm] = useState({ email :'' , password : ''});

    return(
        <React.Fragment>
            <div>
                <Navbar className="main-black-bg"  style={{ boxShadow: '0px 1px 10px #00000029' , minHeight: '60px' ,  zIndex : '3'}} expand="lg">
                    <NavbarBrand href="/acceuil"><img style={{width: '150px' , height: 'auto'}}  src={Logo} alt=""/></NavbarBrand>
                    <NavbarToggler onClick={()=>toggleNav()} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav style={{justifyContent : "space-around"}}  className="mr-auto container-fluid" navbar>
                            <NavItem>
                                <NavLink to={'/acceuil'}>ACCEUIL</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/presentation'}>PRESENTATION</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/news'}>NEWS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/stats'}> STATS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/contact'}>CONTACT US</NavLink>
                            </NavItem>
                            <div className="d-flex align-items-center">
                                <NavItem>
                                    <button onClick={()=>history.push("/signup")} id="inscription" style={{background: 'transparent', padding: '0.5rem 1rem' , borderRadius: '20px'}}> INSCRIPTION</button>
                                </NavItem>
                                <NavItem className="ml-4">
                                    <div className="d-flex align-items-center" onClick={()=>{setLoginOpenStatus(true)}}> <span id="connexion">CONNEXION</span> <Login style={{fontSize : "1rem"}} className="main-yellow"/> </div>
                                </NavItem>
                            </div>
                        </Nav>
                        {/*<NavbarText>Simple Text</NavbarText>*/}
                    </Collapse>
                </Navbar>
            </div>
            <LoginDialog submitNewUser={()=>console.log('OPEN !')} addUserForm={loginUserForm} setUserForm={setLoginUserForm} isOpen={isLoginOpen} handleClose={()=>setLoginOpenStatus(false)}/>
        </React.Fragment>

    )
}
