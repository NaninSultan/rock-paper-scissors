import { useSelector, useDispatch } from "react-redux";
import { Card, CardActionArea, CardMedia, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from "react";
import { closeButton } from '../gameSlice';
import { increaseTotalScore, decreaseTotalScore, getComputerAnswer, getUserAnswer, getUserImage, getComputerImage } from "../gameSlice";

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
                <Typography  variant="h4">You picked:</Typography>
                <CardActionArea>
                    <CardMedia
                    name={userAnswer}
                    component="img"
                    image={userImage}
                    alt={userAnswer}
                    />
                    <Typography variant="h3">{userAnswer}</Typography>
                </CardActionArea>
                </Card>
                <Card style={{display: "inline-block", margin: "10px", width: "30%", maxWidth:"400px"}}>
                <Typography variant="h4">Computer picked:</Typography>
                <CardActionArea>
                    <CardMedia
                    name={computerAnswer}
                    component="img"
                    image={computerImage}
                    alt={computerAnswer}
                    />
                    <Typography variant="h3">{computerAnswer}</Typography>
                </CardActionArea>
                </Card>
                <Typography padding="30px" variant="h3">{result}</Typography>
                <Button style={{marginBottom: "20px"}} variant="contained" color="primary" onClick={handleClick}>Play Again</Button>
            </Grid>
        </>
    )
}

export default Result;