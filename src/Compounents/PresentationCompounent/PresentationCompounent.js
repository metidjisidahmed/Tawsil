

import React from "react";
import {ContactMail} from "@mui/icons-material";
import PresentationImg from "../../assets/PresentationImg.jpg"
import './styles.css'
export default function Presentation(){
    return(
        <React.Fragment>
            <div className="d-flex justify-content-center mt-4 mb-2">
                <ContactMail className="main-yellow" style={{fontSize: '5rem'}}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <h2 className="pt-1 d-inline main-white" style={{
                    textAlign: 'center',
                    borderBottom: "5px solid var(--main-yellow)",
                    fontWeight: 'bold'
                }}> WHAT IS TAWSIL ! </h2>
            </div>
            <div className="mt-lg-4 mb-lg-4">
                <img src={PresentationImg} alt=""/>
            </div>
            <div id="presentationText" className="offset-2 col-8 pl-lg-4 pr-lg-4 main-white mb-lg-4">
                Tawseel is a mobile service offers the services of Ministry of Human Resources and Emiratisation (MOHRE) to its customers on their premises at their convenient time. The customer can request Tawseel service either from Tawseel mobile application or by calling Tawseel call center. He can choose the services he would like to get, the suitable time and location for him that he will be at. Then, Tawseel vehicle heads to be at the chosen location on time to fulfill his needs.
            </div>
            <div className="mb-lg-4">
                <iframe width="60%" height="315" src="https://www.youtube.com/embed/5W_cn0jvCMo"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </React.Fragment>
    )
}
