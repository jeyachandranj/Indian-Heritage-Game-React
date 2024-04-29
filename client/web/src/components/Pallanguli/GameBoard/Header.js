import React, { useContext, useState } from "react";
import GameContext from "../Store/game-context";
import styles from './Header.module.css';

const Header = () => {
  const gameCtx = useContext(GameContext);
  const newGameHandler = () => {
    gameCtx.newGame();
  };
  return (
    <header className={styles.header}>
      <h1>Mancala</h1>
      <div>
      <button onClick={newGameHandler}>Start Over</button>

      </div>
    </header>
  );
};

export default Header;
