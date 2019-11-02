const isValidNesxtPosition = (board, position) => { 
  // CHECK VALID INPUT
  // not valid input 
  const positionArray = position.split(',').map(Number);
  const positionRow = positionArray[0];
  const positionColumn = positionArray[1];

  if (positionArray.length !== 2 || isNaN(positionRow) || isNaN(positionColumn)){
    console.log('not valid input');
    return false;
  }

  // not in the board row & column
  const boardHeight = board.length;
  const boardWidth = board[0].length;
  if (positionRow > boardHeight || positionRow === boardHeight) {
    console.log('not in the board - row');
    return false;
  } 
  if (positionColumn > boardWidth || positionColumn === boardWidth) {
    console.log('not in the board - col');
    return false;
  }

  // the cell is not empty
  const selectedCell = board[positionRow][positionColumn]
  if(selectedCell !== ''){
    return false
  }

  return true;
};

module.exports = isValidNesxtPosition;