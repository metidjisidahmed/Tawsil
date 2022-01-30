import React , {Component} from "react";
import Logo from '../../assets/The logo dark bg.png';
import './styles.css'
import {Link} from "react-router-dom";


export class Footer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
           <React.Fragment>
               <div  className="row pt-lg-5 footer pb-4 pb-lg-0" style={{  backgroundColor : 'var(--main-dark)',borderBottom : '2px solid #707070' , marginRight :'0' , marginLeft : '0'}}>
                   <div id="logoDiv" className="mb-3 mt-2 mb-lg-0 mt-lg-0 pt-4 pb-4 pt-lg-0 pb-lg-0 col-12 col-lg-3">
                       <img id="logo" src={Logo}/>
                   </div>
                   <div className="footerSection col-6 col-lg-3">
                       <div className='col pb-lg-5'>
                           <div className="footerContent"> <Link  to={'/'}>ACCEUIL</Link> </div>
                           <div className="footerContent"><Link  to={'/presentation'}> PRESENTATION</Link></div>
                       </div>
                       <div id="contactSectionFooter" className='offset-6 offset-lg-0 footerSection col pb-lg-3 '>
                           <div className="footerContent"> <a href ="mailto: support@tawsil.dz">support@tawsil.dz</a></div>
                       </div>
                   </div>
                   <div className=" col-6 col-lg-3">
                       <div className='col footerSection'>
                           <div className="footerContent"> <Link to={'/news'}> NEWS </Link></div>
                           <div className="footerContent"><Link to={'/stats'}>STATS</Link></div>
                       </div>
                   </div>
                   <div id="suivezNousSectionFooter" className="offset-3 offset-lg-0 col-6 col-lg-3 pr-0 main-gray ">
                       <div className="footerTitle mb-2 m-lg-0">  <Link to={'/stats'}>CONTACT US</Link> </div>
                   </div>
               </div>
               <div className="footer" style={{ backgroundColor :'#000000'}}>
                   <nav  id='footerNavbar' className="navbar navbar-expand-sm">
                       {/*<a id='footerBrand' className="navbar-brand ml-5" href="#" style={{fontSize : '1rem'}}>Quizo.com Copyright © 2020</a>*/}
                       <ul id='navFooter' className="navbar-nav ml-auto" style={{fontSize : '1.1rem'}}>
                           <li id="footerSec1"  className="nav-item  footerItem d-lg-flex">
                               <div>
                                   <Link id="termes" className="nav-link footerTitle" to="/privacy-policy">TERMES ET CONDIIONS</Link>
                               </div>
                           </li>
                       </ul>
                   </nav>
               </div>
           </React.Fragment>

        )
    }
}
