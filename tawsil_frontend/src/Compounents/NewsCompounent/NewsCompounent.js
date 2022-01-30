import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGet8News} from "../../redux/actions/actions";
import {FindInPage} from "@mui/icons-material";
import {Typography} from "@mui/material";
import Loader from "react-loader-spinner";
import AdCard from "../0SubCompounents/AdCard";
import endpoints from "../../redux/endpoints";

export default function NewsCompounent(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGet8News());
    }, []);
    const news = useSelector(state => state.News);

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center mt-4 mb-2">
                <FindInPage className="main-yellow" style={{fontSize: '5rem'}}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <h2 className="pt-1 d-inline main-white" style={{
                    textAlign: 'center',
                    borderBottom: "5px solid var(--main-yellow)",
                    fontWeight: 'bold'
                }}> OUR LATEST NEWS ! </h2>
            </div>
            {
                news.loading ? (
                    <Typography align="center">
                        <Loader
                            type="Rings"
                            color="var(--main-yellow)"
                            height={400}
                            width={400}
                        />
                    </Typography>
                ) : news.error ? (
                    <Typography variant="h2" color="var(--main-red)" align="center">
                        <Loader
                            type="Rings"
                            color="var(--main-red)"
                            height={400}
                            width={400}
                        />
                        { news.error}
                    </Typography>
                ):(
                    <React.Fragment>
                        <div className="d-lg-flex justify-content-center mb-lg-4">
                            {news.data.map((aNew,index)=>{
                                if(index<4){
                                    return <AdCard news id={aNew.news_id} key={index} title={aNew.news_title} image={endpoints.BASE_URL_NEWS+ aNew.news_image_url} detail={aNew.news_content.substring(0 , 30)} />
                                }
                            })}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                        </div>
                        <div className="d-lg-flex justify-content-center mb-lg-4">
                            {news.data.map((aNew,index)=>{
                                if(index>=4){
                                    return <AdCard news id={aNew.news_id} key={index} title={aNew.news_title} image={endpoints.BASE_URL_NEWS+ aNew.news_image_url} detail={aNew.news_content.substring(0 , 30)} />
                                }
                            })}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>

    );
}
