import React from 'react';
import Main from './components/Main';
import Result from './components/Result';
import { getCloseButton, getTotalScore } from './gameSlice';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

function App() {

  let closeButton = useSelector(getCloseButton);
  let totalScore = useSelector(getTotalScore);

  return (
    <div className="App">
      <div style={{margin:"10px", marginBottom:"2%", display: "flex", direction:"column", justifyContent:"space-between"}}>
        <Typography variant="h4">Rock Paper Scissors</Typography>
        <Typography variant="h4">Wins: {totalScore}</Typography>
      </div>
      {!closeButton && <Main />}
      {closeButton && <Result />}
    </div>
  );
}

export default App;
