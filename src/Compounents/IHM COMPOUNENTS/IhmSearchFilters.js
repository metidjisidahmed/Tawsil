import SearchFilters from "../0SubCompounents/SearchFilters";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    AccessTime,
    AddRoad,
    Download, DriveFileRenameOutline, Extension, FileDownload, FilePresent,
    FitnessCenter, GppBad,
    Inbox,
    Keyboard, MenuBook,
    Preview, PriceCheck,
    PushPin,
    Search, StarRate,
    Start, SystemUpdate, SystemUpdateAlt, Translate, VerifiedUser,
    ViewColumn
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ComboBox from "../0SubCompounents/ComboBox";
import * as React from "react";
import Image1 from "./image 1.jpg";
import Image2 from "./Image2.jpg"
import Image3 from "./Image3.jpg"
import Image4 from "./Image 4.jpg"
import {
    Button,
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
import moment from "moment";
import wilayasLookup from "../../Globals/wilayasLookup";
import {history} from "../../App";
import swal from "sweetalert";
import {FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";

const IhmDetail=({icon , content})=>{
    return(
        <div className="w-100 d-flex pt-lg-1 pb-lg-1">
            {icon}
            <div className="font-weight-bold adSearchSubDetails pl-lg-2">{content}</div>
        </div>
    )
}

const IhmDetails=({year, pages , language, size, extension,  timeAdded })=>{
    return (
        <React.Fragment>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <IhmDetail icon={<MenuBook className="adSearchSubDetailsIcon"/>} content={"Pages : " +pages}/>
                <IhmDetail icon={<Translate className="adSearchSubDetailsIcon"/>} content={"Language : "+language}/>
            </div>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <IhmDetail icon={<FilePresent className="adSearchSubDetailsIcon"/>} content={"Extension : "+extension}/>
                <IhmDetail icon={<FileDownload className="adSearchSubDetailsIcon"/>} content={"Size : "+size}/>
            </div>
            <div className="d-flex flex-column col-4 pl-0 pr-0 pt-lg-1 pb-lg-1">
                <IhmDetail icon={<DriveFileRenameOutline className=" adSearchSubDetailsIcon"/>} content={"Written at : "+year}/>
                <IhmDetail icon={<SystemUpdateAlt className="adSearchSubDetailsIcon"/>} content={"Updated at : "+timeAdded}/>
            </div>
        </React.Fragment>
    )
}


const IhmSearch =({title, image , details , author , publisher, year , pages , language , size , extension , timeAdded , rating })=>{
    return(
        <div className="w-100 d-flex mt-lg-4 mb-lg-4 main-black-bg " style={{borderRadius : "15px"}} >
            <div className="col-4 pl-0">
                <img style={{ height: "15rem", width: "20rem" , borderTopLeftRadius : "15px" , borderBottomLeftRadius : "15px"  }} src={image} />
            </div>
            <div className="col-8 pl-3 pt-2 book-detail with-shadow" style={{borderTopRightRadius : "15px" , borderBottomRightRadius : "15px"}}>
                {/*<CardActionArea className="w-100">*/}
                <div style={{textAlign : "start"}} className="d-lg-flex flex-column">
                    <div className="d-lg-flex justify-content-lg-between">
                        <div className="adSearchTitle"> {title}</div>
                        <div style={{color : "#A00507"}} className="pt-lg-2 d-flex align-items-center"> <StarRate/> <span className="pl-1" style={{fontWeight : "bold" , fontSize : "1.4rem" }}>{rating}</span> </div>
                    </div>
                    <div>
                        {details}
                    </div>
                    <div className="w-100 d-flex  pt-lg-2 pb-lg-2">
                        <IhmDetails year={year}  pages={pages}  language={language} size={size} extension={extension}  timeAdded={timeAdded}   />
                    </div>
                    <div className="w-100 d-flex justify-content-lg-end">
                        <div className="d-flex justify-content-center align-items-center mb-lg-4">
                            <Button onClick={()=>{


                            }} style={{textDecoration : "underline" , borderWidth : '0' , color : "#0A4386"}} className="font-weight-bold" >Show More</Button>
                        </div>
                    </div>
                </div>
                {/*</CardActionArea>*/}
            </div>
        </div>

    )
}

export const IhmSearchFilters =()=>{
    const [ads , setAds]=useState([
        {
            ad_id : 1,
            title: 	"A Project Guide to UX Design [1 ed.]",
            author : "Russ Unger, Carolyn Chandler",
            publisher : "Morgan Kaufmann",
            year : 2009,
            pages : 288,
            language : "English",
            size : "5 Mb",
            extension : "Pdf",
            timeAdded : moment().format('L'),
            rating : 4.7,
            image : Image1,
            details : "If you are a young designer entering or contemplating entering the UX field this is a canonical book. If you are an organization that really needs to start grokking UX this book is also for you. \"  -- Chris Bernard, User Experience Evangelist, MicrosoftUser experience design"

        },
        {
            ad_id : 1,
            title: 	"iOS Wow Factor: UX Design Techniques for iPhone and iPad",
            author : "Tim Wood",
            publisher : "Apress",
            year : 2011,
            pages : 147,
            language : "English",
            size : "5 MB",
            extension : "Epub",
            timeAdded : moment().format('L'),
            rating : 4.4,
            image : Image2,
            details : "With the millions of apps in the crowded Apple iTunes App Store, it can be difficult to get your apps noticed. How can you make your app stand out from the crowd and get it the reviews it deserves?  iOS Wow Factor shows you how to get noticed! It explains how to go beyond the basics and where to \"break the rules\" to give your users a \"wow\" experience! You'll learn to use standard controls, as well as to create non-standard controls and high-impact custom interactions to realize truly compelling app designs. Get grounded in Apple"

        },
        {
            ad_id : 1,
            title: 	"Killer UX Design",
            author : "Jodie Moule",
            publisher : "SitePoint",
            year : 2012,
            pages : 301,
            language : "English",
            size : "36 MB",
            extension : "Epub",
            timeAdded : moment().format('L'),
            rating : 4.4,
            image : Image3,
            details : "Today, technology is used to shift, sway and change attitudes and behavior. This creates amazing opportunities and challenges for designers. If we want to create products and services that have the power to educate people so they may live better lives, or help to reduce the time people take to do certain tasks, we first need an understanding of how these people think and work - what makes them «tick» The premise of this book is the need to understand how people «behave» their habits, motivators and drivers, as a critical way to better understand what a great customer experience for your audience looks like, facilitating better design decisions. The book will lead you from understanding"

        },
        {
            ad_id : 1,
            title: 	"boas práticas em UX Design",
            author : "Fabricio Teixeira",
            publisher : "CASA DO CODIGO",
            year : 2014,
            pages : 225,
            language : "Portuguese",
            size : "3 MB",
            extension : "Pdf",
            timeAdded : moment().format('L'),
            rating : 4.2,
            image : Image4,
            details : "Cada vez mais o desenvolvimento do front-end de sites e sistemas tem papel preponderante em como o seu site converte, retém e agrada os usuários. Porém, além de saber como implementar uma tela, é importante saber também o que fazer nela. Quais recursos devem ser usados? Quais informações precisam ser exibidas? Em quais lugares?\n" +
                "Atualmente, a experiência do usuário (User Experience - UX) tem ganhado um papel fundamental na criação de sites e aplicativos. Entender como o usuário se comportará no seu sistema é de extremo valor para criar um site simples para ele."

        }
    ])
    return (
        <React.Fragment>
            <div className="d-flex">
                <div style={{ height: "fit-content",
                    position: "sticky",
                    top: "1rem"
                }} className="offset-1 col-2 mt-4 mb-5">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expand-icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="accordion-summary"
                            style={{borderBottom : "2px solid var(--ihm-main-red)"}}

                        >
                            <Keyboard className="summary-icon mr-lg-2" /> <Typography>Search Input</Typography>
                        </AccordionSummary>
                        <AccordionDetails  className="accordion-details">
                            {/*<TextField id="outlined-basic"  variant="outlined" placeholder="Ux Design" />*/}
                            <FormGroup>
                                <Input className="accordion-input" type="text" name="email" id="exampleEmail" value="Ux design" />
                            </FormGroup>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expand-icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="accordion-summary"
                            style={{borderBottom : "2px solid var(--ihm-main-red)"}}

                        >
                            <Download className="summary-icon mr-lg-2" /> <Typography>Download Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails  className="accordion-details">
                            <FormGroup>
                                <Input className="accordion-input accordion-select" type="select" name="select" id="exampleSelect">
                                    <option >Resumed dl with original filename</option>
                                    <option >Resumed dl with translit filename</option>
                                    <option>Resumed dl with md5 filename</option>
                                    <option>Open file in browser</option>
                                </Input>
                            </FormGroup>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expand-icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="accordion-summary"
                            style={{borderBottom : "2px solid var(--ihm-main-red)"}}

                        >
                            <Preview className="summary-icon mr-lg-2" /> <Typography>View Results :</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion-details">
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Simple" control={<Radio />} label="Simple" />
                                    <FormControlLabel value="Detailed" control={<Radio />} label="Detailed" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expand-icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="accordion-summary"
                            style={{borderBottom : "2px solid var(--ihm-main-red)"}}

                        >
                            <Search className="summary-icon mr-lg-2" /> <Typography>Search with words</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion-details">
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="expand-icon" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="accordion-summary"
                            style={{borderBottom : "2px solid var(--ihm-main-red)"}}

                        >
                            <ViewColumn className="summary-icon mr-lg-2" /> <Typography>Search in Fields</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion-details">
                            <FormGroup>
                                <Input className="accordion-input accordion-select" type="select" name="select" id="exampleSelect">
                                    <option value={10}>The column set default </option>
                                    <option value={20}>Title</option>
                                    <option value={30}>Author(s)</option>
                                    <option>Series</option>
                                    <option>Publisher</option>
                                    <option>Year</option>
                                    <option>ISBN</option>
                                    <option>Language</option>
                                    <option>MD5</option>
                                    <option>TAGS</option>
                                    <option>EXTENSION</option>
                                </Input>
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-8 ml-3" >
                    {ads.map((ad)=>{
                        return (
                            <IhmSearch
                                rating={ad.rating}
                                image={ad.image}
                                title={ad.title}
                                author={ad.author}
                                publisher={ad.publisher}
                                year={ad.year}
                                pages={ad.pages}
                                language={ad.language}
                                size={ad.size}
                                extension={ad.extension}
                                timeAdded={ad.timeAdded}
                                details={ad.details.substring(0 , 150)+"..."}
                            />
                        )
                    })}

                </div>
            </div>

            <TablePagination
                className="ihmPagination"
                component="div"
                count={100}
                page={2}
                // onPageChange={handleChangePage}
                rowsPerPage={10}
                // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </React.Fragment>

    )

}
