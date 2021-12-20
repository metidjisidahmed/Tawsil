import './styles.css'
import React from "react"
import {DoubleArrow, TravelExplore , Send} from "@mui/icons-material";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
export default function HomeCompounent(){

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
            <div style={{ justifyContent : 'space-evenly'}} className="d-lg-flex align-items-lg-center mt-lg-2 mb-lg-2">
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
                <Button  id="allezY" className="main-yellow p-lg-4" variant="outlined" endIcon={<Send/>}>Allez-y !</Button>

            </div>
        </React.Fragment>


    );
}
