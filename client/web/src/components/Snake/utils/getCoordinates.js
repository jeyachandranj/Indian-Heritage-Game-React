export function getCoordinates(start , end , boardSize , cellSize){
    const startRow = Math.floor((start - 1) / boardSize);
    const startCol = startRow % 2 !== 0 ? boardSize - 1 - ((start - 1) % boardSize) : (start - 1) % boardSize;

    const endRow = Math.floor((end - 1) / boardSize);
    const endCol = endRow % 2 !== 0 ? boardSize - 1 - ((end - 1) % boardSize) : (end - 1) % boardSize;

    // calculate cooridantes
    const startX = startCol * cellSize + cellSize / 2 + cellSize;
    const startY = (boardSize -1 - startRow) * cellSize + cellSize / 2 + cellSize;
    const endX = endCol * cellSize + cellSize / 2 + cellSize;
    const endY = (boardSize - 1 - endRow) * cellSize + cellSize / 2 + cellSize;

    //calculate direction 
    const dx = startX - endX;
    const dy = startY - endY;

    const angleRadians = Math.atan2(dy , dx);
    const angleDegrees = angleRadians * (180 / Math.PI) + cellSize + (cellSize - boardSize);

    const height = Math.sqrt(dx * dx + dy * dy);
    
    return [ startRow , endRow , startX , startY , endX , endY , angleDegrees , height ]

}


export function CalculatePositionXY(item , boardSize , cellSize){
    if(item.position == 0){
        let col = (boardSize - 1) * cellSize + cellSize / 2 + 50;
        return [10 , col]
      }
      const row = Math.floor((item.position - 1) / boardSize);
      let col;
      if (row % 2 !== 0) {
          col = boardSize - 1 - ((item.position - 1) % boardSize);
      } else {
        col = (item.position - 1) % boardSize;
      }
      const playerPosX = col * cellSize + cellSize / 2 + cellSize;
      const playerPosY = (boardSize - 1 - row) * cellSize + cellSize / 2 + cellSize;
  
      return [playerPosX , playerPosY]

}