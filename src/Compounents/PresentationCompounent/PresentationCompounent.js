
import Loader from 'react-loader-spinner';
import React, {useEffect} from "react";
import {ContactMail} from "@mui/icons-material";
import PresentationImg from "../../assets/PresentationImg.jpg"
import './styles.css'
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {fetchGetPresentation} from "../../redux/actions/actions";
import Endpoints from '../../redux/endpoints';
export default function Presentation(){
    const presentationContent = useSelector(state=>state.presentation);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetPresentation());
    }, []);
    return(
            presentationContent.loading ? (
                <Typography align="center">
                    <Loader
                        type="Rings"
                        color="var(--main-yellow)"
                        height={400}
                        width={400}
                    />
                </Typography>
            ) : presentationContent.error ? (
                <Typography variant="h2" color="var(--main-red)" align="center">
                    <Loader
                        type="Rings"
                        color="var(--main-red)"
                        height={400}
                        width={400}
                    />
                    { presentationContent.error}
                </Typography>
            ):(
                <React.Fragment>
                    <div className="d-flex justify-content-center mt-4 mb-2">
                        <ContactMail className="main-yellow" style={{fontSize: '5rem'}}/>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <h2 className="pt-1 d-inline main-white" style={{
                            textAlign: 'center',
                            borderBottom: "5px solid var(--main-yellow)",
                            fontWeight: 'bold'
                        }}> {presentationContent.data.presentation_title}</h2>
                    </div>
                    <div className="mt-lg-4 mb-lg-4">
                        <img src={ `${Endpoints.BASE_URL}/${presentationContent.data.presentation_image_url}`} alt=""/>
                    </div>
                    <div id="presentationText" className="offset-2 col-8 pl-lg-4 pr-lg-4 main-white mb-lg-4">
                        {presentationContent.data.presentation_content}
                    </div>
                    <div className="mb-lg-4">
                        <iframe width="60%" height="315" src={presentationContent.data.presentation_video_url}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </React.Fragment>
            )

    )
}
