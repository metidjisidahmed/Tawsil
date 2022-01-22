import React, {Component, useEffect, useState} from "react"
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css'
import {
    AlternateEmail,
    ContactMail,
    Email,
    FacebookRounded,
    Image, PermContactCalendar,
    PermPhoneMsg,
    TravelExplore
} from "@mui/icons-material";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchGetContacts} from "../../redux/actions/actions";


const ContactItem=({contact_title , contact_content})=>{
    return(
        <ListItem>
            <ListItemAvatar>
                <Avatar className="main-brown-bg">
                    <PermContactCalendar  className="main-yellow"  />
                </Avatar>
            </ListItemAvatar>
            <ListItemText className="main-white" primary={contact_title} secondary={contact_content} />
        </ListItem>
    )
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function Contact(props){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetContacts());
    }, []);

    const Contacts = useSelector(state=>state.Contacts);

    // componentDidMount () {
    //     const script = document.createElement("script");
    //     script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDdJdhzDdv0uNKZM8A0yLRpw4M_DLF2CAo&callback=initMap&libraries=&v=weekly";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     setTimeout(()=>{
    //             // The location of Uluru
    //             const uluru = { lat: -25.344, lng: 131.036 };
    //             // The map, centered at Uluru
    //             const map = new google.maps.Map(document.getElementById("map"), {
    //                 zoom: 4,
    //                 center: uluru,
    //             });
    //             // The marker, positioned at Uluru
    //             const marker = new google.maps.Marker({
    //                 position: uluru,
    //                 map: map,
    //             });
    //     },1000);
    //
    // }
    // initMap() {
    //     // The location of Uluru
    //     const uluru = { lat: -25.344, lng: 131.036 };
    //     // The map, centered at Uluru
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 4,
    //         center: uluru,
    //     });
    //     // The marker, positioned at Uluru
    //     const marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map,
    //     });
    // }
    return(
        <React.Fragment>
            <div className="col-12 text-black"  id="contactUsSec1" style={{paddingTop : '2rem'}}>
                <div className="d-flex justify-content-center mt-4 mb-2">
                    <ContactMail className="main-yellow" style={{fontSize: '5rem'}}/>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <h2 className="pt-1 d-inline main-white" style={{
                        textAlign: 'center',
                        borderBottom: "5px solid var(--main-yellow)",
                        fontWeight: 'bold'
                    }}> CONTACT US ! </h2>
                </div>
                <div className="d-lg-flex formContainer mt-lg-4 mb-lg-4">
                    <div className="col-lg-5 col-12 p-4 p-lg-5 mt-4 mb-4 mt-lg-0" style={{border: '1px solid #707070' ,  borderRadius: '10px' , textAlign : 'center'}}>
                        <List className="main-black-bg" sx={{ width: '100%', maxWidth: 360 }}>
                            {Contacts.data.map((contact , index )=>{
                                return (
                                    <ContactItem key={index} contact_content={contact.contact_content} contact_title={contact.contact_title} />
                                )
                            })}
                            {/*<ListItem>*/}
                            {/*    <ListItemAvatar>*/}
                            {/*        <Avatar className="main-brown-bg">*/}
                            {/*            <PermPhoneMsg className="main-yellow" />*/}
                            {/*        </Avatar>*/}
                            {/*    </ListItemAvatar>*/}
                            {/*    <ListItemText className="main-white" primary="Phone Number" secondary="+219794614612" />*/}
                            {/*</ListItem>*/}
                            {/*<ListItem>*/}
                            {/*    <ListItemAvatar>*/}
                            {/*        <Avatar className="main-brown-bg">*/}
                            {/*            <FacebookRounded className="main-yellow" />*/}
                            {/*        </Avatar>*/}
                            {/*    </ListItemAvatar>*/}
                            {/*    <ListItemText  className="main-white" primary="Facebook" secondary="Tawsil Dz" />*/}
                            {/*</ListItem>*/}
                            {/*<ListItem>*/}
                            {/*    <ListItemAvatar>*/}
                            {/*        <Avatar className="main-brown-bg">*/}
                            {/*            <Icon icon="ant-design:instagram-filled" color="#fd0" width="29" height="30" />*/}
                            {/*        </Avatar>*/}
                            {/*    </ListItemAvatar>*/}
                            {/*    <ListItemText className="main-white" primary="Instagram" secondary="Tawsil.dz" />*/}
                            {/*</ListItem>*/}
                            {/*<ListItem>*/}
                            {/*    <ListItemAvatar>*/}
                            {/*        <Avatar className="main-brown-bg">*/}
                            {/*            <Icon icon="entypo-social:linkedin-with-circle" color="#fd0" width="29" height="30" />*/}
                            {/*        </Avatar>*/}
                            {/*    </ListItemAvatar>*/}
                            {/*    <ListItemText className="main-white" primary="Linkedin" secondary="Tawsil Dz" />*/}
                            {/*</ListItem>*/}
                            {/*<ListItem>*/}
                            {/*    <ListItemAvatar>*/}
                            {/*        <Avatar className="main-brown-bg">*/}
                            {/*            <Icon icon="vs:user-boss" color="#fd0" width="29" height="30" />*/}
                            {/*        </Avatar>*/}
                            {/*    </ListItemAvatar>*/}
                            {/*    <ListItemText className="main-white" primary="CEO" secondary="is_metidji@esi.dz" />*/}
                            {/*</ListItem>*/}
                        </List>
                    </div>
                    <div className="col-lg-5 col-12 mt-4 mb-4 mt-lg-0" id="mapContainer" >
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDdJdhzDdv0uNKZM8A0yLRpw4M_DLF2CAo'}}
                            defaultCenter={[36.7354892, 3.1783048]}
                            defaultZoom={15}
                            yesIWantToUseGoogleMapApiInternals
                        >
                            <AnyReactComponent
                                lat={36.7354892}
                                lng={3.1783048}
                                text="TAWSIL"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
