import React from "react";

export const DrawDeck = (drawCards) => {
  const drawDeck = drawCards["drawCards"];
  return (
    <div>
      {drawDeck.map((card, index) => (
        <p key={index}>
          {index + 1}. {card.Name}
        </p>
      ))}
    </div>
  );
};
