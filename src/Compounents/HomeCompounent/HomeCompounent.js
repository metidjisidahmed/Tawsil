import './styles.css'
import React, {useEffect} from "react"
import {DoubleArrow, TravelExplore, Send, FindInPage, OpenInNew, NoteAdd, AddCircle} from "@mui/icons-material";
import {Button, Dialog, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import AdCard from "../0SubCompounents/AdCard";
import AdAddDialog from "../0SubCompounents/AddAdDialog"
import{history} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {fetchget8Ads} from "../../redux/actions/actions";
import Loader from "react-loader-spinner";
import homePageAds from "../../redux/reducers/homePageAds";
import endpoints from "../../redux/endpoints";

export default function HomeCompounent(){
    const dispatch = useDispatch();
    const homePageAds = useSelector(state => state.homePageAds);
    useEffect(() => {
        dispatch(fetchget8Ads());
    }, []);
    const searchBtnClicked =()=>{
        history.push("/search?from=44&to=26");
    }
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center mt-4 mb-2">
                <TravelExplore className="main-yellow" style={{fontSize: '5rem'}}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <h2 className="pt-1 d-inline main-white" style={{
                    textAlign: 'center',
                    borderBottom: "5px solid var(--main-yellow)",
                    fontWeight: 'bold'
                }}> SEARCH THE APPROPRIATE ADS FOR YOU HERE ! </h2>
            </div>
            <div style={{ justifyContent : 'space-evenly'}} className="d-lg-flex align-items-lg-center mt-lg-2 mb-lg-4">
                <div>
                        <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                            <InputLabel  id="demo-simple-select-filled-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={null}
                                onChange={(e) => console.log(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                <DoubleArrow className="main-yellow" style={{fontSize: '5rem'}}/>
                <div>
                    <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
                        <InputLabel  id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={null}
                            onChange={(e) => console.log(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <DoubleArrow className="main-yellow" style={{fontSize: '5rem'}}/>
                <Button onClick={()=>searchBtnClicked()}  id="allezY" className="main-yellow p-lg-4" variant="outlined" endIcon={<Send/>}>Allez-y !</Button>
            </div>
            <div className="d-flex justify-content-center mt-lg-5 mb-2">
                <NoteAdd className="main-yellow" style={{fontSize: '5rem'}}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <h2 className="pt-1 d-inline main-white" style={{
                    textAlign: 'center',
                    borderBottom: "5px solid var(--main-yellow)",
                    fontWeight: 'bold'
                }}> OR ADD YOUR OWN AD ! </h2>
            </div>
            <AdAddDialog/>
            <div className="d-flex justify-content-center mt-4 mb-2">
                <FindInPage className="main-yellow" style={{fontSize: '5rem'}}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <h2 className="pt-1 d-inline main-white" style={{
                    textAlign: 'center',
                    borderBottom: "5px solid var(--main-yellow)",
                    fontWeight: 'bold'
                }}> THE ADS YOU MAY LIKE ! </h2>
            </div>
            {
                homePageAds.loading ? (
                    <Typography align="center">
                        <Loader
                            type="Rings"
                            color="var(--main-yellow)"
                            height={400}
                            width={400}
                        />
                    </Typography>
                ) : homePageAds.error ? (
                    <Typography variant="h2" color="var(--main-red)" align="center">
                        <Loader
                            type="Rings"
                            color="var(--main-red)"
                            height={400}
                            width={400}
                        />
                        { homePageAds.error}
                    </Typography>
                ):(
                    <React.Fragment>
                        <div className="d-lg-flex justify-content-center mb-lg-4">
                            {homePageAds.data.map((ad,index)=>{
                                if(index<4){
                                    return <AdCard title={ad.title} image={endpoints.BASE_URL_ADS+ad.image} detail={ad.details.substring(0 , 30)} />
                                }
                            })}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                            {/*<AdCard/>*/}
                        </div>
                        <div className="d-lg-flex justify-content-center mb-lg-4">
                            {homePageAds.data.map((ad,index)=>{
                                if(index>=4){
                                    return <AdCard title={ad.title} image={endpoints.BASE_URL_ADS+ad.image} detail={ad.details.substring(0 , 30)} />
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

            <div className="d-flex justify-content-center align-items-center mb-4">
                <Link style={{textDecoration : "underline" , fontSize : "2rem"}} className="main-yellow" to={'/news'}>Comment cela fonctionne ? </Link>
                <OpenInNew  className={"main-yellow mt-lg-2"}/>
            </div>
            {/*Ad Add Dialog*/}

        </React.Fragment>


    );
}
