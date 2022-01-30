import SearchFilters from "../Compounents/0SubCompounents/SearchFilters";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Download,
    FitnessCenter,
    Inbox,
    Keyboard,
    Preview,
    PushPin,
    Search,
    Start,
    ViewColumn
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ComboBox from "../Compounents/0SubCompounents/ComboBox";
import * as React from "react";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem, Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import './styles.css'
import {TablePagination} from "@material-ui/core";
import endpoints from "../redux/endpoints";
import moment from "moment";
import wilayasLookup from "../Globals/wilayasLookup";
import {AdSearch} from "../Compounents/SearchCompounent/SearchCompounent";

export const IhmSearchFilters =()=>{
    return (
        <React.Fragment>
            {/*<div className="offset-4 col-2 mt-4 mb-5">*/}
            {/*    <Accordion>*/}
            {/*        <AccordionSummary*/}
            {/*            expandIcon={<ExpandMoreIcon className="expand-icon" />}*/}
            {/*            aria-controls="panel1a-content"*/}
            {/*            id="panel1a-header"*/}
            {/*            className="accordion-summary"*/}
            {/*            style={{borderBottom : "2px solid var(--ihm-main-red)"}}*/}

            {/*        >*/}
            {/*            <Keyboard className="main-white mr-lg-2" /> <Typography>Search Input</Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails  className="accordion-details">*/}
            {/*            <TextField id="outlined-basic" label="Search Input" variant="outlined" defaultValue="Ux Design" />*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Accordion>*/}
            {/*        <AccordionSummary*/}
            {/*            expandIcon={<ExpandMoreIcon className="expand-icon" />}*/}
            {/*            aria-controls="panel1a-content"*/}
            {/*            id="panel1a-header"*/}
            {/*            className="accordion-summary"*/}
            {/*            style={{borderBottom : "2px solid var(--ihm-main-red)"}}*/}

            {/*        >*/}
            {/*            <Download className="main-white mr-lg-2" /> <Typography>Download Type</Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails  className="accordion-details">*/}
            {/*            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>*/}
            {/*                <InputLabel id="demo-simple-select-standard-label">Download type</InputLabel>*/}
            {/*                <Select*/}
            {/*                    labelId="demo-simple-select-standard-label"*/}
            {/*                    id="demo-simple-select-standard"*/}
            {/*                    label="Download Type"*/}
            {/*                >*/}
            {/*                    <MenuItem value="">*/}
            {/*                        <em>None</em>*/}
            {/*                    </MenuItem>*/}
            {/*                    <MenuItem value={10}>Resumed dl with original filename</MenuItem>*/}
            {/*                    <MenuItem value={20}>Resumed dl with translit filename</MenuItem>*/}
            {/*                    <MenuItem value={30}>Resumed dl with md5 filename</MenuItem>*/}
            {/*                    <MenuItem>Open file in browser</MenuItem>*/}
            {/*                </Select>*/}
            {/*            </FormControl>*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Accordion>*/}
            {/*        <AccordionSummary*/}
            {/*            expandIcon={<ExpandMoreIcon className="expand-icon" />}*/}
            {/*            aria-controls="panel1a-content"*/}
            {/*            id="panel1a-header"*/}
            {/*            className="accordion-summary"*/}
            {/*            style={{borderBottom : "2px solid var(--ihm-main-red)"}}*/}

            {/*        >*/}
            {/*            <Preview className="main-white mr-lg-2" /> <Typography>View Results :</Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails className="accordion-details">*/}
            {/*            <FormControl>*/}
            {/*                <RadioGroup*/}
            {/*                    row*/}
            {/*                    aria-labelledby="demo-row-radio-buttons-group-label"*/}
            {/*                    name="row-radio-buttons-group"*/}
            {/*                >*/}
            {/*                    <FormControlLabel value="Simple" control={<Radio />} label="Simple" />*/}
            {/*                    <FormControlLabel value="Detailed" control={<Radio />} label="Detailed" />*/}
            {/*                </RadioGroup>*/}
            {/*            </FormControl>*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Accordion>*/}
            {/*        <AccordionSummary*/}
            {/*            expandIcon={<ExpandMoreIcon className="expand-icon" />}*/}
            {/*            aria-controls="panel1a-content"*/}
            {/*            id="panel1a-header"*/}
            {/*            className="accordion-summary"*/}
            {/*            style={{borderBottom : "2px solid var(--ihm-main-red)"}}*/}

            {/*        >*/}
            {/*            <Search className="main-white mr-lg-2" /> <Typography>Search with words :</Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails className="accordion-details">*/}
            {/*            <FormControl>*/}
            {/*                <RadioGroup*/}
            {/*                    row*/}
            {/*                    aria-labelledby="demo-row-radio-buttons-group-label"*/}
            {/*                    name="row-radio-buttons-group"*/}
            {/*                >*/}
            {/*                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />*/}
            {/*                    <FormControlLabel value="No" control={<Radio />} label="No" />*/}
            {/*                </RadioGroup>*/}
            {/*            </FormControl>*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Accordion>*/}
            {/*        <AccordionSummary*/}
            {/*            expandIcon={<ExpandMoreIcon className="expand-icon" />}*/}
            {/*            aria-controls="panel1a-content"*/}
            {/*            id="panel1a-header"*/}
            {/*            className="accordion-summary"*/}
            {/*            style={{borderBottom : "2px solid var(--ihm-main-red)"}}*/}

            {/*        >*/}
            {/*            <ViewColumn className="main-white mr-lg-2" /> <Typography>Search in Fields</Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails className="accordion-details">*/}
            {/*            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>*/}
            {/*                <InputLabel id="demo-simple-select-standard-label">In :</InputLabel>*/}
            {/*                <Select*/}
            {/*                    labelId="demo-simple-select-standard-label"*/}
            {/*                    id="demo-simple-select-standard"*/}
            {/*                    label="Download Type"*/}
            {/*                >*/}
            {/*                    <MenuItem value="">*/}
            {/*                        <em>None</em>*/}
            {/*                    </MenuItem>*/}
            {/*                    <MenuItem value={10}>The column set default </MenuItem>*/}
            {/*                    <MenuItem value={20}>Title</MenuItem>*/}
            {/*                    <MenuItem value={30}>Author(s)</MenuItem>*/}
            {/*                    <MenuItem>Series</MenuItem>*/}
            {/*                    <MenuItem>Publisher</MenuItem>*/}
            {/*                    <MenuItem>Year</MenuItem>*/}
            {/*                    <MenuItem>ISBN</MenuItem>*/}
            {/*                    <MenuItem>Language</MenuItem>*/}
            {/*                    <MenuItem>MD5</MenuItem>*/}
            {/*                    <MenuItem>TAGS</MenuItem>*/}
            {/*                    <MenuItem>EXTENSION</MenuItem>*/}

            {/*                </Select>*/}
            {/*            </FormControl>*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*</div>*/}


            <div className="col-8 offset-2">
                <AdSearch ad_id={"1"}
                          price={"7500 DA"}
                          type={"Guaranteed"} productType={"Electronic"} image={"image"}
                          volume={`100CM3 ~ 1000CM3`}
                          weight={`500G ~ 1500G`}
                          created_at={moment().format('L')} details={"Written by Victor Hugo"}
                          address={"Khemis Meliana"} title={"UX DESIGN"}
                          wilaya={`26 -> 44`}/>
            </div>
            {/*<TablePagination*/}
            {/*    component="div"*/}
            {/*    count={100}*/}
            {/*    page={2}*/}
            {/*    // onPageChange={handleChangePage}*/}
            {/*    rowsPerPage={10}*/}
            {/*    // onRowsPerPageChange={handleChangeRowsPerPage}*/}
            {/*/>*/}
        </React.Fragment>

    )

}
