import React, { Component } from 'react';
import './Pallanguli.css';
import GameProvider from '../components/Pallanguli/Store/GameProvider';
import Header from '../components/Pallanguli/GameBoard/Header';
import Board from '../components/Pallanguli/GameBoard/Board';

class Pallanguli extends Component {
  render() {
    return (
      <GameProvider>
        <Header />
        <Board />
      </GameProvider>
    );
  }
}

export default Pallanguli;
