import "./Snake.css";
import React from "react";
import { useEffect, useState } from "react";
import { Game } from "../components/Snake/ODD/game.js";
import { MultiDialogs } from "../components/Snake/multiDialogs.component.jsx";
import { Snake } from "../components/Snake/snake.component.jsx";
import { Laddar } from "../components/Snake/Laddar.component.jsx";
import { Dice } from "../components/Snake/dice.component.jsx";
import { Board } from "../components/Snake/board.component.jsx";
import { Player } from "../components/Snake/player.component.jsx";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";




function App() {
  const [game, setGame] = useState(new Game(10));
  const [board, setBoard] = useState(game.getBoard());

  const [boardSize, setBoardSize] = useState(10);

  const [snakes, setSnakes] = useState([]);

  const [ladder, setLadder] = useState([]);

  const cellSize = 50;

  const [start, setStart] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const [players, setPlayers] = useState([]);

  const [currentPlayer, setCurrentPlayer] = useState();

  const [wonBoard, setWonBoard] = useState([]);

  async function handleDice(diceNum) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    // for backend to update
    const canMove = game.canMove(diceNum);
    if (canMove) {
      await run(diceNum);
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
    let res = game.changeTurn(diceNum , currentPlayer);
    if (!res) {
      alert("Cool , its again your turn !!!");
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
    setCurrentPlayer(game.getCurrentPlayer());
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  async function run(diceNum) {
    let currentPlayer = game.getCurrentPlayer();
    return new Promise(async (resolve, reject) => {
      for (let i = 1; i <= diceNum; i++) {
        // for updating in ui
        const updateItem = [...players];
        const index = players.findIndex(
          (item) => item.color == currentPlayer.color
        );
        currentPlayer = {
          ...currentPlayer,
          position: currentPlayer.position + 1,
        };
        updateItem[index] = { ...currentPlayer };
        await move(updateItem);
      }
      game.updatePosition(diceNum);
      let [status, value] = await checkSnakeAndLadder(currentPlayer);
      if (status) {
        game.updatePlayerPosition(value);
      }

      let [wonStatus, isGameEnd] = game.isWinner(currentPlayer);
      if (wonStatus) {
        setWonBoard([...wonBoard, currentPlayer]);
      } 
      if (isGameEnd) {
        setOpenDialog(true);
      }
      console.log(wonStatus , isGameEnd);
      resolve();
    });
  }

  function move(updateItem) {
    return new Promise(async (resolve, reject) => {
      setPlayers(updateItem);
      await new Promise((resolve) => setTimeout(resolve, 400));
      resolve();
    });
  }

  async function updatePlyear(player, value) {
    const updateItem = [...players];
    const index = players.findIndex((item) => item.color == player.color);
    player = { ...updateItem[index], position: value };
    updateItem[index] = { ...player };
    await move(updateItem);
  }

  // check for snake and ladder;
  async function checkSnakeAndLadder(player) {
    let [snakeStatus, snakeValue] = game.checkSnake(player.position);
    let [LadderStatus, ladderValue] = game.checkLadder(player.position);
    let value;
    let status = false;
    if (LadderStatus) {
      updatePlyear(player, ladderValue);
      value = ladderValue;
      status = true;
    }
    if (snakeStatus) {
      updatePlyear(player, snakeValue);
      value = snakeValue;
      status = true;
    }
    return [status, value];
  }

 
 function settingBoard(size){
  size = parseInt(size);
  setBoardSize(size);
  let g = new Game(size);
  setGame(g);
  setBoard(g.getBoard());
  
 }
 
  function startGame(players) {
    addGamePlayers(players);
    setSnakes([...game.board.snakes]);
    setLadder([...game.board.ladder])
    setStart(true);
  }


  function addGamePlayers(players){
    players.map((item) => {
      game.addPlayer(item.name , item.color)
    })
    setPlayers([...game.players]);
    setCurrentPlayer(game.getCurrentPlayer());
  }

  function restartGame() {
    let g = new Game();
    setGame(g);
    setBoard(g.getBoard());
    setPlayers([]);
    setCurrentPlayer({});
    setWonBoard([]);
    setStart(false);
    setOpenDialog(false);
  }



  return (
    <div className="App">
      {!start ? (
        <div className="input-container">
          <div className="content">
          <div>
             <MultiDialogs startGame={startGame}  /> 
          </div>
          
          </div>
          
        </div>
      ) : (
        ""
      )}

      {start ? (
        <div>
          <div className="game">
            <div className="dice-contaner">
              <div>{currentPlayer.name} is your turn</div>
              <div className="curentPlayer-container">
                {players.map((item, index) => {
                 
                return <div className={ item.position == 100 ? 'disable' : ''}>
                    <span
                    key={index}
                    style={{ background: item.color }}
                    className={
                      item.color == currentPlayer.color ? "active" : ""
                    }
                  ></span>

                  </div>
                  })
                }
              </div>
              <Dice
                game={game}
                handleDice={handleDice}
                currentPlayer={currentPlayer}
              />
              {
                wonBoard.length != 0 ? <div className="winnerBoard">
                <h2>Leader Board</h2>
                {wonBoard.map((item, index) => (
                  <div key={index}>
                    {index + 1} place {item.name} -{" "}
                    <span
                      style={{ background: item.color }}
                      className="piece"
                    ></span>
                  </div>
                ))}
              </div> : ''
              }
              
            </div>

            <div className="board">
              <svg
                width={(boardSize + 2) * cellSize}
                height={(boardSize + 1) * cellSize}
              >
                <Board
                  board={board}
                  boardSize={boardSize}
                  cellSize={cellSize}
                />

                <Player
                  players={players}
                  boardSize={boardSize}
                  cellSize={cellSize}
                />
              </svg>

              <Snake
                snakes={snakes}
                boardSize={boardSize}
                cellSize={cellSize}
              />
              <Laddar
                ladder={ladder}
                boardSize={boardSize}
                cellSize={cellSize}
              />
            </div>
          </div>

          <div className="restart">
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle></DialogTitle>
              <DialogContent>
                <h2>Game Board</h2>
                <div>
                  {wonBoard.map((item, index) => {
                    return <div key={index}>
                      {index + 1} place {item.name} -{" "}
                      <span
                        style={{ background: item.color }}
                        className="piece"
                      ></span>
                    </div>;
                  })}
                  <div>
                    
                    lost {currentPlayer.name} - <span
                        style={{ background: currentPlayer.color }}
                        className="piece"
                      ></span>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={restartGame} variant="outlined">Play Again</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
