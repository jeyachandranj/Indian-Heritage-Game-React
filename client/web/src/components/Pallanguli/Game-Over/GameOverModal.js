import React from "react";
import ModalElement from "../UI/ModalElement";
import styles from "./GameOverModal.module.css";

const GameOverModal = (props) => {
  const winner =
    props.player1score > props.player2score
      ? "Player 1 is the winner"
      : props.player1score < props.player2score
      ? "Player 2 is the winner"
      : "It's a tie!";

  return (
    <ModalElement onClick={props.onNewGame}>
      <div >
        <h2>{winner}</h2>
        <p>Player 1: {props.player1score}</p>
        <p>Player 2: {props.player2score}</p>
      </div>
      <div className={styles['game-over']}>
        <button onClick={props.onNewGame}>Play Again</button>
      </div>
    </ModalElement>
  );
};

export default GameOverModal;
