import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {FitnessCenter, Inbox, PushPin, Start} from "@mui/icons-material";
import ComboBox from "./ComboBox";

export default function SearchFilters() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="main-yellow" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="main-white main-black-bg"
                    style={{borderBottom : "2px solid var(--main-yellow)"}}

                >
                    <Start className="main-white mr-lg-2" /> <Typography>Starting Wilaya</Typography>
                </AccordionSummary>
                <AccordionDetails className="main-black-bg">
                    <ComboBox/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="main-yellow" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className="main-white main-black-bg"
                    style={{borderBottom : "2px solid var(--main-yellow)"}}

                >
                    <PushPin className="main-white mr-lg-2" /> <Typography>Destination Wilaya</Typography>
                </AccordionSummary>
                <AccordionDetails className="main-black-bg">
                    <ComboBox/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="main-yellow" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    className="main-white main-black-bg"
                    style={{borderBottom : "2px solid var(--main-yellow)"}}
                >
                   <FitnessCenter className="main-white mr-lg-2"/>   <Typography>Weight</Typography>
                </AccordionSummary>
                <AccordionDetails className="main-black-bg">
                    <ComboBox/>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="main-yellow" />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    className="main-white main-black-bg"
                    style={{borderBottom : "2px solid var(--main-yellow)"}}

                >
                    <Inbox className="main-white mr-lg-2"/>   <Typography>Package Type</Typography>
                </AccordionSummary>
                <AccordionDetails className="main-black-bg">
                    <ComboBox/>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="main-yellow" />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    className="main-white main-black-bg"
                    style={{borderBottom : "2px solid var(--main-yellow)"}}

                >
                    <Inbox className="main-white mr-lg-2"/>   <Typography>Transport Type</Typography>
                </AccordionSummary>
                <AccordionDetails className="main-black-bg">
                    <ComboBox/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
