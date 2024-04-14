import React, { useState } from "react";
import "./Home.css";

export const Home = ({
  handleSubmit,
  handleChange,
  handleRoomInput,
  handleNumberOfCards,
  inputValue,
  roomInput,
  userName,
  numberOfCards,
}) => {
  return (
    <div className="home">
      {userName === "" && (
        <div className="box-layout">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name" className="input-label">
                  Your name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={inputValue}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="numberOfCards" className="input-label">
                  Number of cards to play:
                </label>
                <select
                  id="numberOfCards"
                  value={numberOfCards}
                  onChange={handleNumberOfCards}
                  className="select-field"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="roomCode" className="input-label">
                  Room Code:
                </label>
                <input
                  type="text"
                  id="roomCode"
                  value={roomInput}
                  onChange={handleRoomInput}
                  className="input-field"
                  placeholder="Room Code (optional)"
                />
              </div>
              <button
                type="submit"
                disabled={inputValue === "" || roomInput !== ""}
                className={`submit-button ${
                  inputValue === "" || roomInput !== "" ? "disabled" : ""
                }`}
              >
                Create Room
              </button>
              <button
                type="submit"
                disabled={roomInput === ""}
                className={`submit-button ${
                  roomInput === "" ? "disabled" : ""
                }`}
              >
                Join Room
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
