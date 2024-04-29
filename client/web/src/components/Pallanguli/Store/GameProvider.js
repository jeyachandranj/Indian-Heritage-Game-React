import React from "react";
import GameContext from "./game-context";
import { useReducer } from "react";

const defaultGameState = {
  homePit1: 0,
  homePit2: 0,
  row1: [4, 4, 4, 4, 4, 4],
  row2: [4, 4, 4, 4, 4, 4],
  playerTurn: 1,
  gameOver: false
};

// the gameReducer contains all the game's logic
const gameReducer = (state, action) => {
  if (action.type === "MOVE") {
    let homePits = [state.homePit1, state.homePit2];
    let rows = [[...state.row1], [...state.row2]];
    let row = +action.row;
    let player = +action.row;
    let enemyRow;
    // determine the index of the enemy's row
    player === 1 ? (enemyRow = 1) : (enemyRow = 0);
    // console.log(player);
    let pit = action.pit;
    let stones = rows[row - 1][pit];
    rows[row - 1][pit] = 0;
    for (let i = stones; i > 0; i--) {
      // check if the player can steal from the enemy's rows
      if (
        // if i === 1 it is the last stone
        i === 1 &&
        player === row &&
        // if the pit to be played in is empty
        rows[row - 1][pit + 1] === 0 &&
        // make sure the enemy's row isn't empty -- 4 - pit because pit hasn't been incremented
        rows[enemyRow][4 - pit] !== 0
      ) {
        // increase the value of pit
        pit++;

        // the index of the opposite pit will be 5-the current pit's index
        // add the stones in that pit and the capturing stone to the player's home pit
        homePits[player - 1] += rows[enemyRow][5 - pit] + 1;
        // empty the enemy's pit of those stones
        rows[enemyRow][5 - pit] = 0;
        // remove the player's stone from the last pit
        rows[row - 1][pit] = 0;
        continue;
      }
      // check if the stone is still in the current row array
      if (pit + 1 < 6) {
        pit++;
        rows[row - 1][pit]++;
        continue;
      } else if (player === row) {
        //if the stone is the player's stone, put it in her home pit
        homePits[player - 1]++;
        // determine which row the remaining stones should move to
        player === 1 ? (row = 2) : (row = 1);
        // make sure the next pit increment equals zero
        pit = -1;
        // if the player lands their last stone in their homepit
        if (i === 1) {
          player = row;
        }
        continue;
      } else if (player !== row) {
        //if it's not the player's row, skip the home pit and switch rows
        player === 1 ? (row = 1) : (row = 2);
        rows[row - 1][0]++;
        pit = 0;
        continue;
      }
    }
    return {
      homePit1: homePits[0],
      homePit2: homePits[1],
      row1: [...rows[0]],
      row2: [...rows[1]],
      playerTurn: player === 1 ? 2 : 1
    };
  }
  if (action.type === "NEW_GAME") {

    return defaultGameState;
  }

  if(action.type === "END_GAME") {
    const currHomePit1 = +state.homePit1;
    const currHomePit2 = +state.homePit2;
    return ({
      homePit1: currHomePit1 + action.total1,
      homePit2: currHomePit2 + action.total2,
      row1: [0,0,0,0,0,0],
      row2: [0,0,0,0,0,0],
      //set gameOver to true in order to prevent an infinite loop
      gameOver: true
    });
  }

};

const GameProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  const moveStoneHandler = (id) => {
    dispatchGameAction({
      type: "MOVE",
      row: id.row,
      pit: id.pit,
    });
  };

  const newGameHandler = (total1, total2) => {
    dispatchGameAction({
      type: "NEW_GAME",
      total1: total1,
      total2: total2
    })
  };

  const endGameHandler = (total1, total2) => {
    dispatchGameAction({
      type: "END_GAME",
      total1: total1,
      total2: total2
    })

  }

  const gameContext = {
    homePit1: gameState.homePit1,
    homePit2: gameState.homePit2,
    row1: gameState.row1,
    row2: gameState.row2,
    playerTurn: gameState.playerTurn,
    gameOver: gameState.gameOver,
    moveStone: moveStoneHandler,
    newGame: newGameHandler,
    endGame: endGameHandler
  };
  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
