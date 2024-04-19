import React from "react";
import "./cricket.css";

export const Result = ({ winner, onClick }) => {
  return (
    <div className="result-container">
      <h3 className="game-result">{winner} won the game!</h3>
      <div className="button-container">
        <button className="button" onClick={onClick}>
          Restart
        </button>
      </div>
    </div>
  );
};
