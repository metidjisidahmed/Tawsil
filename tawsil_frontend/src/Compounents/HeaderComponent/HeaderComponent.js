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
import {Link, NavLink} from "react-router-dom";
import {AccountCircle, Login, Logout, PersonAdd, Settings} from "@mui/icons-material"
import Slide from '@mui/material/Slide';
import {
    Avatar, Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider,
    IconButton, ListItemIcon, Menu, MenuItem,
    TextField,
    Tooltip
} from "@mui/material";
import {history} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin, logout} from "../../redux/actions/actions";
import swal from "sweetalert";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function  LoginDialog({ connect,isOpen , handleClose , setUserForm }){

    return(
        <Dialog  TransitionComponent={Transition}  open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New User to the Dashoard</DialogTitle>
            <DialogContent>
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
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={connect} color="primary">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export function Header(props) {
    const [isNavOpen, setNavOpenStatus] = useState(false);
    const [isLoginOpen, setLoginOpenStatus] = useState(false);
    const [loginUserForm , setLoginUserForm] = useState({ email :'' , password : ''});
    const [isConnected, setConnectedStatus] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isAccountMenuOpen = Boolean(anchorEl);
    let reqFeedback = useSelector(state => state.reqFeedback);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const toggleNav=()=>{
        setNavOpenStatus(!isNavOpen);
    }
    const handleCloseAccountMenu=()=>{
        setAnchorEl(null);
    }
    const handleClickOpenMenu =(event)=>{
        setAnchorEl(event.currentTarget);
    }
    const stringAvatar=(name)=>{
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const submitLogin=()=>{
        if(loginUserForm.email && loginUserForm.password){
            setLoginOpenStatus(false);
            dispatch(fetchLogin(loginUserForm))
                .then(res=>{
                    // return swal({
                    //     title: "Done !",
                    //     text: res,
                    //     icon: "success",
                    // });
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
    }


    return(
        <React.Fragment>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={reqFeedback.login.loading}
                // onClick={handleClose}
            />
            <div>
                <Navbar className="main-black-bg"  style={{ boxShadow: '0px 1px 10px #00000029' , minHeight: '60px' ,  zIndex : '3'}} expand="lg">
                    <NavbarBrand href="/"><img style={{width: '150px' , height: 'auto'}}  src={Logo} alt=""/></NavbarBrand>
                    <NavbarToggler onClick={()=>toggleNav()} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav style={{justifyContent : "space-around"}}  className="mr-auto container-fluid" navbar>
                            <NavItem>
                                <NavLink to={'/'}>ACCEUIL</NavLink>
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
                                {
                                    !user.data.profile ? (
                                        <React.Fragment>
                                            <NavItem>
                                                <button onClick={()=>history.push("/signup")} id="inscription" style={{background: 'transparent', padding: '0.5rem 1rem' , borderRadius: '20px'}}> INSCRIPTION</button>
                                            </NavItem>
                                            <NavItem className="ml-4">
                                                <div className="d-flex align-items-center" onClick={()=>{setLoginOpenStatus(true)}}> <span id="connexion">CONNEXION</span> <Login style={{fontSize : "1rem"}} className="main-yellow"/> </div>
                                            </NavItem>
                                        </React.Fragment>
                                    ): (
                                        <React.Fragment>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClickOpenMenu}
                                                    size="small"
                                                    sx={{ ml: 2 }}
                                                    aria-controls={ isAccountMenuOpen ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={ isAccountMenuOpen ? 'true' : undefined}
                                                >
                                                    <Avatar id="accountAvatar" >MS</Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </React.Fragment>
                                    )
                                }

                            </div>
                        </Nav>
                        {/*<NavbarText>Simple Text</NavbarText>*/}
                    </Collapse>
                </Navbar>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={isAccountMenuOpen}
                    onClose={handleCloseAccountMenu}
                    onClick={handleCloseAccountMenu}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'var(--main-dark)',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Link style={{textDecoration : "none"}} className="main-white justify-content-center" to={"/profile"}>
                            <ListItemIcon>
                                <AccountCircle className="main-white" fontSize="small" />
                            </ListItemIcon>
                            My account
                        </Link>

                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={()=>{
                        // setConnectedStatus(false);
                        dispatch(logout());
                        history.push("/");
                        window.location.reload();
                    }}>
                        <ListItemIcon>
                            <Logout className="main-white" fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
            <LoginDialog connect={submitLogin} submitNewUser={()=>console.log('OPEN !')} addUserForm={loginUserForm} setUserForm={setLoginUserForm} isOpen={isLoginOpen} handleClose={()=>setLoginOpenStatus(false)}/>
        </React.Fragment>

    )
}
