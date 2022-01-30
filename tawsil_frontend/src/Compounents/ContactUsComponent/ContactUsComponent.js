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
                            {Contacts.data?.contact_list?.map((contact , index )=>{
                                return (
                                    <ContactItem key={index} contact_content={contact.contact_content} contact_title={contact.contact_title} />
                                )
                            })}
                        </List>
                    </div>
                    <div className="col-lg-5 col-12 mt-4 mb-4 mt-lg-0" id="mapContainer" >
                        {
                            Contacts.data?.gps_map_info ? (
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: Contacts.data?.gps_map_info?.google_maps_key ? 'AIzaSyDdJdhzDdv0uNKZM8A0yLRpw4M_DLF2CAo' : null}}
                                    defaultCenter={[ Number(Contacts.data?.gps_map_info?.coordinates_x) , Number(Contacts.data?.gps_map_info?.coordinates_y) ]}
                                    defaultZoom={15}
                                    yesIWantToUseGoogleMapApiInternals
                                >
                                    <AnyReactComponent
                                        lat={ Number(Contacts.data?.gps_map_info?.coordinates_x) }
                                        lng={ Number(Contacts.data?.gps_map_info?.coordinates_y) }
                                        text="TAWSIL"
                                    />
                                </GoogleMapReact>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
