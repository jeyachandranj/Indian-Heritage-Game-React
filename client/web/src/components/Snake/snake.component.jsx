import snake from "../snake.png";
import bigSnake from "../big-snake.png";
import { getCoordinates } from "./utils/getCoordinates";
import React from 'react';
export const Snake = ({ snakes, boardSize, cellSize }) => {
  return (
    <>
      {snakes.map(({ start, end }, index) => {

        const [ startRow , endRow , startX , startY , endX , endY , angleDegrees , height ] = getCoordinates(start , end , boardSize , cellSize);

        return (
          <div
            key={index}
            className={`snake img-${index}`}
            style={{
              left: `${startX - 20}px`,
              top: `${startY}px`,
              height: `${height}px`,
              transform: `rotate(${angleDegrees}deg)`,
              transformOrigin: "top center",
            }}
          >
            { Math.abs(endRow - startRow)  <= 4 ? (
              <img src={snake} width="80px" className="s-snake" />
            ) : (
              <img src={bigSnake} className="b-snake" />
            )}
          </div>
        );
      })}
    </>
  );
};
