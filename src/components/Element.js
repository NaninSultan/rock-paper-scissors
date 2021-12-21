import React from 'react';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';


const Element = ({ image, name, clickHandle, clickable }) => {

    return (
        <Card onClick = {clickable === 'true' ? ()=>clickHandle({name,image})  : null } style={{display: "inline-block", margin: "10px", width: "30%", maxWidth: "400px"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          image={image}
          alt="img"
        />
        <Typography variant="h3">{name}</Typography>
      </CardActionArea>
    </Card>
    )
}

export default Element