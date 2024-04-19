import React from 'react';
import RockPaperScissors from '../components/RPS/RockPaperScissors';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissor from '../assets/scissor.png';

const choicesList = [
  {
    id: 'ROCK',
    image: rock,
  },
  {
    id: 'SCISSORS',
    image: paper,
  },
  {
    id: 'PAPER',
    image: scissor,
  },
];

const App = () => <RockPaperScissors choicesList={choicesList} />;

// Inline CSS styles
const inlineStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .rounded-image {
    border-radius: 50%;
    width: 50px; 
    height: 50px; 
    margin-left: 80px; /* Corrected spelling */
    margin-bottom: 20px; /* Corrected spelling */
    border: 2px solid blue;
  }
`;


const styleElement = document.createElement('style');
styleElement.innerHTML = inlineStyles;
document.head.appendChild(styleElement);

export default App;
