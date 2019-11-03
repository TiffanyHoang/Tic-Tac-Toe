const isValidNesxtPosition = (board, position) => { 
  // CHECK VALID INPUT
  // not valid input 
  const positionArray = position.split(',').map(Number);
  const positionRow = positionArray[0] - 1;
  const positionColumn = positionArray[1] - 1;

  if (positionArray.length !== 2 || isNaN(positionRow) || isNaN(positionColumn)){
    return false;
  }

  // not in the board row & column
  const boardHeight = board.length;
  const boardWidth = board[0].length;
  if (positionRow > boardHeight || positionRow === boardHeight) {
    return false;
  } 
  if (positionColumn > boardWidth || positionColumn === boardWidth) {
    return false;
  }

  // the cell is not empty
  const selectedCell = board[positionRow][positionColumn];
  if(selectedCell !== '.'){
    return false;
  }

  return true;
};

module.exports = isValidNesxtPosition;