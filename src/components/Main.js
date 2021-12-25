import React, { useEffect } from 'react';
import Element from './Element';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';
import Rules from './Rules';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAnswer, addUserImage, addComputerImage, closeButton, addComputerAnswer, getComputerAnswer } from '../gameSlice';
import { Grid } from '@mui/material';


export default function App() {

    let dispatch = useDispatch();
    let computerAnswer = useSelector(getComputerAnswer);

    const computerOptions = [
      {name: 'paper', image: paper},
      {name: 'scissors', image: scissors},
      {name: 'rock', image: rock}
    ];

    const clickHandle = ({ name, image }) => {
      if(name === computerAnswer){
        const list = computerOptions.find((value)=>(
            value.name === computerAnswer
        ))
        var indexValue = computerOptions.indexOf(list);
        if (indexValue === 3){
            indexValue = 0
        }
        randomFunc(indexValue)
        setUserAns(name,image);
    }
    else{
        setUserAns(name,image);
    }
      dispatch(closeButton(true));
    }

    const setUserAns = (name, image) => {
      dispatch(addUserAnswer(name));
      dispatch(addUserImage(image));
    }

    const randomFunc = (arg) =>{
      const answer = computerOptions[arg];
      dispatch(addComputerAnswer(answer.name))
      dispatch(addComputerImage(answer.image))
  }

  useEffect(()=>{
    randomFunc(Math.floor(Math.random()*3))
  })


  return (
    <>
    <Grid style={{textAlign: "center"}} >
      <Element 
        name="rock"
        image={rock}
        clickHandle={clickHandle}
        clickable="true"
      />
      <Element 
        name="paper"
        image={paper}
        clickHandle={clickHandle}
        clickable="true"
      />
      <Element 
        name="scissors"
        image={scissors}
        clickHandle={clickHandle}
        clickable="true"
      />
    </Grid>
      <div style={{textAlign: "center", marginBottom: "30px", marginTop:"30px"}}>
      <Rules />
      </div>
    </>
  );
}
