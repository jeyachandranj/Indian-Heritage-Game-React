import { Board } from "./board.js"
import { Player } from "./player.js"
import { Dice } from "./dice.js"

export class Game {
  players = []
  winnerBoard = []
  constructor(size = 10) {
    this.board = new Board(size)
    this.dice = new Dice()
  }

  getBoard() {
    return this.board.status()
  }

  addPlayer(name, color) {
    let player = new Player(name, color)
    this.players.push(player)
  }

  getAllPlayers() {
    return this.players
  }

  getCurrentPlayer() {
    return this.players[0]
  }

  rollDice() {
    return this.dice.rolledDice()
  }

  canMove(dice) {
    let currentPlayer = this.players[0]
    let positionStart = currentPlayer.position
    let positionEnd = positionStart + dice
    if (positionEnd > this.board.board[0][0]) {
      return false
    }
    return true
  }
  updatePosition(dice) {
    let currentPlayer = this.players[0]
    let positionStart = currentPlayer.position
    let positionEnd = positionStart + dice
    this.updatePlayerPosition(positionEnd)
  }

  updatePlayerPosition(value) {
    let currentPlayer = this.players[0]
    currentPlayer.setPosition(value)
  }

  changeTurn(dice) {
    let currentPlayer = this.players[0]
    if (dice == 6 && currentPlayer.total6 < 3) {
      currentPlayer.total6 += 1
      return false
    }
    currentPlayer.resetTotal()
    this.players = this.players.slice(1)
    this.players.push(currentPlayer)
    return true
  }

  checkSnake(position) {
    return this.board.checkForSnake(position)
  }

  checkLadder(position) {
    return this.board.checkForLadder(position)
  }
  isWinner(player) {
    const won = this.board.checkWinner(player.position)
    if (won) {
      this.winnerBoard.push(player)
      this.players = this.players.filter(item => item.color != player.color)
    }

    return [won, this.players.length == 1]
  }
}
