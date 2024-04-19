import React, { useContext } from "react";
import HomePit from "./HomePit";
import Row from "./Row";
import styles from "./Board.module.css";
import GameContext from "../../Store/game-context";
import GameOverModal from "../Game-Over/GameOverModal";

function Board() {
  const gameCtx = useContext(GameContext);

  //find the total value of the stones in each row
  let row1total = gameCtx.row1.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  }, 0);
  let row2total = gameCtx.row2.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  }, 0);
  // check if the row is empty
  if (row1total === 0 || row2total === 0)
    if (!gameCtx.gameOver) {
      // check if the game is already over. this is to preven infinite loop
      gameCtx.endGame(row1total, row2total);
    }

  return (
    <div className={styles.board}>
      {gameCtx.gameOver && (
        <GameOverModal
          onNewGame={gameCtx.newGame}
          player1score={gameCtx.homePit1}
          player2score={gameCtx.homePit2}
        />
      )}
      <div className={styles.field}>
        <HomePit key={1} stones={gameCtx.homePit1} />
        <section>
          <Row
            stones={gameCtx.row1}
            row={1}
            playerTurn={gameCtx.playerTurn === 1}
          />
          <Row
            stones={gameCtx.row2}
            row={2}
            playerTurn={gameCtx.playerTurn === 2}
          />
        </section>
        <HomePit key={2} stones={gameCtx.homePit2} />
      </div>
    </div>
  );
}

export default Board;
