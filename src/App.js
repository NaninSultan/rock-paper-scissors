import React from 'react';
import Main from './components/Main';
import Result from './components/Result';
import { getCloseButton, getTotalScore } from './gameSlice';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

function App() {

  let closeButton = useSelector(getCloseButton);
  let totalScore = useSelector(getTotalScore);

  return (
    <Game>
      <div style={{margin:"10px", marginBottom:"2%", display: "flex", direction:"column", justifyContent:"space-between"}}>
        <Header variant="h4">Rock Paper Scissors</Header>
        <Header variant="h4">Wins: {totalScore}</Header>
      </div>
      {!closeButton && <Main />}
      {closeButton && <Result />}
    </Game>
  );
}

export default App;

const Game = styled("div")({

 '@media (max-width: 1024px)': {
  },
  '@media (max-width: 768px)': {

  }
})

const Header = styled(Typography)({
     
   '@media (max-width: 425px)': {
       fontSize: "25px"
   }
})
