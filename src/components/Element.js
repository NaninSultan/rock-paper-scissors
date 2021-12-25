import React from 'react';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';


const Element = ({ image, name, clickHandle, clickable }) => {

    return (
        <Card onClick = {clickable === 'true' ? ()=>clickHandle({name,image})  : null } style={{display: "inline-block", margin: "10px", width: "30%", maxWidth: "400px"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          image={image}
          alt="img"
        />
        <Kino variant="h3">{name}</Kino>
      </CardActionArea>
    </Card>
    )
}

export default Element

const Kino = styled(Typography)({
     
   '@media (max-width: 768px)': {
        fontSize: "40px",
        padding: "5px"
        

    },
    '@media (max-width: 425px)': {
        fontSize: "25px",
        padding: "5px"
    }
})