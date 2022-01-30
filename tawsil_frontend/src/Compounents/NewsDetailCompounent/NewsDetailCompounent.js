import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGet8News, fetchGetNews} from "../../redux/actions/actions";
import {useParams} from "react-router-dom";
import {Typography} from "@mui/material";
import Loader from "react-loader-spinner";
import {ContactMail} from "@mui/icons-material";
import Endpoints from "../../redux/endpoints";
import endpoints from "../../redux/endpoints";


export default function NewsDetailCompounent(){
    const {newsId} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetNews(newsId));
    }, []);
    const newsDetail = useSelector(state => state.NewsDetail);
    return(
        newsDetail.loading ? (
            <Typography align="center">
                <Loader
                    type="Rings"
                    color="var(--main-yellow)"
                    height={400}
                    width={400}
                />
            </Typography>
        ) : newsDetail.error ? (
            <Typography variant="h2" color="var(--main-red)" align="center">
                <Loader
                    type="Rings"
                    color="var(--main-red)"
                    height={400}
                    width={400}
                />
                { newsDetail.error}
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
                    }}> {newsDetail.data.news_title}</h2>
                </div>
                <div className="mt-lg-4 mb-lg-4">
                    <img src={endpoints.BASE_URL_NEWS+ newsDetail.data.news_image_url} alt=""/>
                </div>
                <div id="presentationText" className="offset-2 col-8 pl-lg-4 pr-lg-4 main-white mb-lg-4">
                    {newsDetail.data.news_content}
                </div>
            </React.Fragment>
        )

    )
    return null;
}
