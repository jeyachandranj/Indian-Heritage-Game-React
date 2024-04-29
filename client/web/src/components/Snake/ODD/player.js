export class Player {
    position = 0
    total6 = 1
    constructor(name, color) {
      this.name = name
      this.color = color
    }
  
    setPosition(position) {
      this.position = position
    }
    resetTotal() {
      this.total6 = 1
    }
  }
  