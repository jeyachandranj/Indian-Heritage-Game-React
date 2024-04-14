import React, { useState } from "react";
import "./Lobby.css";

export const Lobby = ({
  userName,
  showMyCards,
  roomCode,
  start,
  gameState,
}) => {
  const [copied, setCopied] = useState(false);

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
  };

  return (
    <div className="lobby-container">
      <div className="lobby-content">
        {gameState.myCards.length === 0 && (
          <p className="wait-message">Hello, {userName}</p>
        )}

        {roomCode && !start && (
          <div className={`room-code-container ${copied ? "copied" : ""}`}>
            <p className={copied ? "copied-room-code" : ""}>
              Share Room Code: {roomCode}
            </p>
            <button onClick={copyRoomCode} className="copy-button">
              Copy
            </button>
          </div>
        )}

        {roomCode && !start && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Waiting for your friend to join...</p>
          </div>
        )}

        {start && gameState.myCards.length === 0 && (
          <button onClick={showMyCards} className="start-button">
            Start Game
          </button>
        )}
      </div>
    </div>
  );
};
