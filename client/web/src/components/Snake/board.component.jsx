import { useEffect, useState } from "react";
import React from "react";
export const Board = ({ board, boardSize, cellSize }) => {
  const [cellColors, setCellColors] = useState([]);

  useEffect(() => {
    generateRandomColors();
  }, []);

  function generateRandomColors() {
    const colors = ["#8bb5f9", "#e65f5f", "#9dd173"];
    const newCellColors = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        if ((i % 2 == 0 && j % 2 == 1) || (i % 2 == 1 && j % 2 == 0)) {
          row.push("#ffd55a");
        } else {
          const colorIndex = Math.floor(Math.random() * colors.length);
          row.push(colors[colorIndex]);
        }
      }
      newCellColors.push(row);
    }

    setCellColors(newCellColors);
  }

  if(!cellColors || cellColors.length === 0){
    return null;
  }

  return (
    <>
      {board.map((row, r) =>
        row.map((cell, c) => {
          const x = c * cellSize + cellSize;
          const y = r * cellSize + cellSize;
          const cellCenterX = x + 25;
          const cellCenterY = y + 25;

          return (
            <g key={`${r}-${c}`}>
              <rect
                key={`${r}-${c}`}
                x={x}
                y={y}
                width="50"
                height="50"
                fill={cellColors[r][c]}
                stroke="#000"
              />

              <text
                x={cellCenterX - 8}
                y={cellCenterY - 5}
                textAnchor="middle"
                fill="#000"
                fontSize="16"
              >
                {cell}
              </text>
            </g>
          );
        })
      )}
    </>
  );
};
