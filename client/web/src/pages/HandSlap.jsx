import React, { useState } from 'react';

const HandSlap = () => {
  const [playerHand, setPlayerHand] = useState(false);
  const [computerHand, setComputerHand] = useState(false);
  const [winner, setWinner] = useState(null);

  const handlePlayerHand = () => {
    setPlayerHand(true);
    setComputerHand(false);
    setTimeout(() => {
      setPlayerHand(false);
      setComputerHand(true);
      determineWinner();
    }, 1000);
  };

  const determineWinner = () => {
    if (playerHand && !computerHand) {
      setWinner('Player');
    } else if (!playerHand && computerHand) {
      setWinner('Computer');
    } else {
      setWinner('Tie');
    }
  };

  const handleReset = () => {
    setPlayerHand(false);
    setComputerHand(false);
    setWinner(null);
  };

  return (
    <div>
      <h1>Hand Slap Game</h1>
      <div>
        {playerHand && <div>Player's hand is up</div>}
        {computerHand && <div>Computer's hand is up</div>}
        {winner && <div>The winner is: {winner}</div>}
      </div>
      <button onClick={handlePlayerHand}>Slap!</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default HandSlap;