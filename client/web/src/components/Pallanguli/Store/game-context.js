import React from 'react';

const GameContext = React.createContext({

        homePit1: 0,
        homePit2: 0,
        row1: [4, 4, 4, 4, 4, 4],
        row2: [4, 4, 4, 4, 4, 4],
        playerTurn: 1,
        gameOver: false,
        moveStone: (id) => {},
        newGame: () => {},
        endGame: (total1, total2) => {}
});

export default GameContext;