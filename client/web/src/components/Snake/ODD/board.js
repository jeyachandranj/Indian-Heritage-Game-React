import { Laddar } from "./Laddar.js"
import { Snake } from "./snake.js"

const snakeDefaultValues = [
  { start: 99, end: 28 },
  { start: 97, end: 86 },
  { start: 89, end: 67 },
  { start: 76, end: 63 },
  { start: 73, end: 12 },
  { start: 59, end: 37 },
  { start: 50, end: 34 },
  { start: 35, end: 5 },
  { start: 27, end: 7 }
]
const ladderValues = [
  { start: 2, end: 23 },
  { start: 7, end: 29 },
  { start: 22, end: 41 },
  { start: 28, end: 75 },
  { start: 30, end: 32 },
  { start: 54, end: 69 },
  { start: 70, end: 90 },
  { start: 80, end: 83 },
  { start: 87, end: 93 }
]

export class Board {
  snakes = []

  ladder = []

  boardNum = 10

  board = []

  shuffleBoard = []

  constructor(size = 10) {
    this.boardNum = size
    let count = size * size
    for (let i = 0; i < size; i++) {
      let row = new Array(size)
      for (let j = 0; j < size; j++) {
        if (i % 2 == 0) {
          row[j] = count
        } else {
          row[size - 1 - j] = count
        }
        count -= 1
      }
      this.board.push(row)
    }

    if (size * size == 100) {
      this.addDefaultSnakeAndLadder(snakeDefaultValues, "snake")
      this.addDefaultSnakeAndLadder(ladderValues, "laddar")
    } else {
      this.shuffleBoard = [...this.board.slice(1)].flat()
      this.shuffleArray()
      this.addSnake()
      this.addLaddar()
    }
  }

  // when board size is 10 * 10 , add default positions for snakes and laddar
  addDefaultSnakeAndLadder(defaultArr, type) {
    for (let i = 0; i < defaultArr.length; i++) {
      let { start, end } = defaultArr[i]
      if (type == "laddar") {
        this.ladder.push(new Laddar(start, end))
      } else {
        this.snakes.push(new Snake(start, end))
      }
    }
  }

  //add dynamic position for snakes and laddar
  shuffleArray() {
    for (let i = 0; i < this.boardNum; i++) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[this.shuffleBoard[i], this.shuffleBoard[j]] = [
        this.shuffleBoard[j],
        this.shuffleBoard[i]
      ]
    }
  }

  addSnake() {
    for (let i = 0; i < Math.floor(this.boardNum / 2); i++) {
      let index1 = Math.floor(Math.random() * this.shuffleBoard.length)
      let start = this.shuffleBoard[index1]
      this.shuffleBoard = this.shuffleBoard.filter(item => item != start)

      let index2 = Math.floor(Math.random() * this.shuffleBoard.length)
      let end = this.shuffleBoard[index2]
      this.shuffleBoard = this.shuffleBoard.filter(item => item != end)

      if (start > end) {
        this.snakes.push(new Snake(start, end))
      } else {
        this.snakes.push(new Snake(end, start))
      }
    }
  }

  addLaddar() {
    for (let i = 0; i < Math.floor(this.boardNum / 2); i++) {
      let index1 = Math.floor(Math.random() * this.shuffleBoard.length)
      let start = this.shuffleBoard[index1]
      this.shuffleBoard = this.shuffleBoard.filter(item => item != start)

      let index2 = Math.floor(Math.random() * this.shuffleBoard.length)
      let end = this.shuffleBoard[index2]
      this.shuffleBoard = this.shuffleBoard.filter(item => item != end)

      if (start < end) {
        this.ladder.push(new Laddar(start, end))
      } else {
        this.ladder.push(new Laddar(end, start))
      }
    }
  }

  status() {
    return this.board
  }

  gtBoardSize() {
    return this.boardNum
  }

  checkForSnake(position) {
    const checkisHaveSnake = this.snakes.find(
      ({ start, end }) => start == position
    )
    if (checkisHaveSnake) {
      return [true, checkisHaveSnake.end]
    }
    return [false, null]
  }

  checkForLadder(position) {
    const checkisHaveLadder = this.ladder.find(
      ({ start, end }) => start == position
    )
    if (checkisHaveLadder) {
      return [true, checkisHaveLadder.end]
    }
    return [false, null]
  }

  checkWinner(position) {
    if (position == this.board[0][0]) {
      return true
    }
    return false
  }
}
