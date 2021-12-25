import { useSelector, useDispatch } from "react-redux";
import { Card, CardActionArea, CardMedia, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from "react";
import { closeButton } from '../gameSlice';
import { increaseTotalScore, decreaseTotalScore, getComputerAnswer, getUserAnswer, getUserImage, getComputerImage } from "../gameSlice";
import { styled } from "@mui/system";

const Result = () => {

    const dispatch = useDispatch();
    const [result,setResult] = useState();

    const userAnswer = useSelector(getUserAnswer);
    const userImage = useSelector(getUserImage);
    const computerAnswer = useSelector(getComputerAnswer);
    const computerImage = useSelector(getComputerImage);

    const handleClick = () => {
        
        dispatch(closeButton(false));
    }

    const handleQuery = ()=>{
        if (userAnswer === 'paper' && computerAnswer === 'rock'){
            dispatch(increaseTotalScore())
            setResult('You Win')
        }
        else if(userAnswer === 'rock' && computerAnswer === 'scissors'){
            dispatch(increaseTotalScore())
            setResult('You Win')
        }
        else if(userAnswer === 'scissors' && computerAnswer === 'paper'){
            dispatch(increaseTotalScore())
            setResult('You Win')
        }
        else if(userAnswer === computerAnswer) {
            setResult("It's a draw!")
        }
        else{
            dispatch(decreaseTotalScore())
            setResult('You Lose');
        }
    }

    useEffect(()=>{
            handleQuery()        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userAnswer])


    return (
        <>
            <Grid style={{whiteSpace: "nowrap", width: "100%", textAlign: "center"}} >
                <Card style={{display: "inline-block", margin: "10px", width: "30%", maxWidth:"400px"}}>
                <Typography  style={{textAlign: "cneter"}} >You picked:</Typography>
                <CardActionArea>
                    <CardMedia
                    name={userAnswer}
                    component="img"
                    image={userImage}
                    alt={userAnswer}
                    />
                    <Kino variant="h3">{userAnswer}</Kino>
                </CardActionArea>
                </Card>
                <Card style={{display: "inline-block", margin: "10px", width: "30%", maxWidth:"400px"}}>
                <Typography style={{textAlign: "center"}} >Comp picked:</Typography>
                <CardActionArea>
                    <CardMedia
                    name={computerAnswer}
                    component="img"
                    image={computerImage}
                    alt={computerAnswer}
                    />
                    <Kino variant="h3">{computerAnswer}</Kino>
                </CardActionArea>
                </Card>
                <Typography padding="30px" variant="h3">{result}</Typography>
                <Button style={{marginBottom: "20px"}} variant="contained" color="primary" onClick={handleClick}>Play Again</Button>
            </Grid>
        </>
    )
}

export default Result;


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