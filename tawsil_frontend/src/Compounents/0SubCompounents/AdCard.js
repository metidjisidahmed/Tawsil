import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgTest from '../../assets/The logo dark bg.png'
import {CardActionArea} from "@mui/material";
import {BinaryImageSrc} from "./BinaryImage";
import {Link} from "react-router-dom";
import {history} from "../../App";
import swal from "sweetalert";

export default function AdCard({title , image , detail , id , news}) {
    return (
        <Card className="main-black-bg mr-lg-2 ml-lg-2 col-lg-3 ">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    src={image}
                    className="ml-lg-2 mr-lg-2"
                />
                <CardContent className="main-white">
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" className="main-gray">
                        {detail} ...
                    </Typography>
                </CardContent>
                <CardActions className="d-lg-flex justify-content-lg-end">
                    <Button onClick={()=>{
                        if(news){
                            history.push('/news/' + id);
                        }else{
                            if(localStorage.getItem("account")){
                                history.push('/ad/' + id);
                            }else{
                                swal({
                                    title: "WARNING !",
                                    text: "You have to signup/login before checking this section",
                                    icon: "warning"}
                                )
                            }
                        }

                    }} style={{textDecoration : "underline" , borderWidth : '0'}} className="main-yellow font-weight-bold" to={ news ? '/news/'+id : '/ad/'+id}>Show More</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
