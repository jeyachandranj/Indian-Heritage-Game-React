import React, { useContext,useState } from "react";
import HomePit from "./HomePit";
import Row from "./Row";
import styles from "./Board.module.css";
import GameContext from "../Store/game-context";

function Board() {
  const gameCtx = useContext(GameContext);
  const [showPopup, setShowPopup] = useState(false);

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


    const winner =
    gameCtx.homePit1 > gameCtx.homePit2
      ? "Player 1 is the winner"
      : gameCtx.homePit1 < gameCtx.homePit2
      ? "Player 2 is the winner"
      : "It's a tie!";

  return (
    <div className={styles.board}>
      
      {gameCtx.gameOver && (
        <div className="popup-overlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="popup-content" style={{ width: "700px", maxHeight: "80%", overflowY: "auto", backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", position: "relative" }}>
            <h2 style={{ color: '#ff5733', animation: 'rainbow 5s infinite alternate', textAlign:"center"}}>{winner}</h2>
            <div style={{ marginTop: '10px' }}>
              <p>Player 1: {gameCtx.homePit1}</p>
              <p>Player 2: {gameCtx.homePit2}</p>
            </div>
            <div className={styles['game-over']}>
        <button onClick={gameCtx.newGame}>Play Again</button>
      </div>
            <button onClick={() => setShowPopup(false)} style={{ position: "absolute", top: "10px", right: "10px", background: "transparent", border: "none", cursor: "pointer", fontSize: "20px", zIndex: 1000 }}>
              X
            </button>
          </div>
        </div>
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
