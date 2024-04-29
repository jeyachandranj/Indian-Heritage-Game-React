export class Dice {
    constructor() {}
  
    rolledDice() {
      return Math.floor(Math.random() * 6) + 1
    }
  }
  