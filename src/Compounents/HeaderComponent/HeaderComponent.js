import React , {Component} from "react"
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

export class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            isNavOpen : false
        }
    }
    toggleNav=()=>{
        this.setState({...this.state , isNavOpen : !this.state.isNavOpen});
    }
    render(){
        return(
            <div>
                <Navbar className="main-black-bg"  style={{ boxShadow: '0px 1px 10px #00000029' , minHeight: '60px' ,  zIndex : '3'}} expand="lg">
                    <NavbarBrand href="/acceuil"><img style={{width: '150px' , height: 'auto'}}  src={Logo} alt=""/></NavbarBrand>
                    <NavbarToggler onClick={()=>this.toggleNav()} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav style={{justifyContent : "space-around"}}  className="mr-auto container-fluid" navbar>
                            <NavItem>
                                <NavLink to={'/acceuil'}>ACCEUIL</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/client'}>CLIENT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/partenaire'}>PARTENAIRE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/FAQ'}> FAQ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'/contact'}>NOUS CONTACTER</NavLink>
                            </NavItem>
                            <div className="d-flex align-items-center">
                                <NavItem>
                                    <button id="inscription" style={{background: 'transparent', padding: '0.5rem 1rem' , borderRadius: '20px'}}> INSCRIPTION</button>
                                </NavItem>
                                <NavItem className="ml-4">
                                    <div className="d-flex align-items-center"> <span id="connexion">CONNEXION</span> <Login style={{fontSize : "1rem"}} className="main-yellow"/> </div>
                                </NavItem>
                            </div>
                        </Nav>
                        {/*<NavbarText>Simple Text</NavbarText>*/}
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
