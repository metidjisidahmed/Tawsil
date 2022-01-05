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

export default function AdCard({title , image , detail}) {
    return (
        <Card sx={{ maxWidth: 345 }}  className="main-black-bg mr-lg-2 ml-lg-2">
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
                    <Button className="main-yellow mr-lg-2" size="small">Learn More</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
