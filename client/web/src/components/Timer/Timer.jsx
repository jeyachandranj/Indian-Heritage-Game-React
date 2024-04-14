import React, { useState, useEffect } from "react";
import "./Timer.css"; // Import CSS file for styling

export const Timer = ({ timeLimit, onTimeUp }) => {
  const [secondsLeft, setSecondsLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          onTimeUp(); // Trigger the event when time's up
          return prevSeconds;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, [onTimeUp, timeLimit]);

  // Calculate percentage of time remaining
  const timePercentage = ((timeLimit - secondsLeft) / timeLimit) * 100;

  // Format seconds to display as seconds only
  const formatTime = (seconds) => seconds.toString();

  return (
    <div className="timer-wrapper">
      <div className="timer">
        <svg className="timer-svg" viewBox="0 0 100 100">
          <circle className="timer-circle-bg" cx="50" cy="50" r="40" />
          <circle
            className="timer-circle"
            cx="50"
            cy="50"
            r="40"
            style={{
              strokeDasharray: `${timePercentage} ${100 - timePercentage}`,
              strokeDashoffset: `${100 - timePercentage * 2.5}`, // Adjust based on circle radius (40)
            }}
          />
        </svg>
        <div className="timer-text">{formatTime(secondsLeft)}</div>
      </div>
    </div>
  );
};
