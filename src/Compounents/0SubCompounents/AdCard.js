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

export default function AdCard() {
    return (
        <Card sx={{ maxWidth: 345 }}  className="main-black-bg mr-lg-2 ml-lg-2">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    src={`data:image/jpeg;base64,${BinaryImageSrc}`}
                    className="ml-lg-2 mr-lg-2"
                />
                <CardContent className="main-white">
                    <Typography gutterBottom variant="h5" component="div">
                        Ad Title Ad Title Ad Title
                    </Typography>
                    <Typography variant="body2" className="main-gray">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica ...
                    </Typography>
                </CardContent>
                <CardActions className="d-lg-flex justify-content-lg-end">
                    <Button className="main-yellow mr-lg-2" size="small">Learn More</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
