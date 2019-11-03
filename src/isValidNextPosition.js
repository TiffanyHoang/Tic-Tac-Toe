const isValidNextPosition = (board, position) => { 
  const positionArray = position.split(',').map(Number);
  const positionRow = positionArray[0] - 1;
  const positionColumn = positionArray[1] - 1;
  
  // not valid input: not 2 integer numbers separated by comma
  if (positionArray.length !== 2 || isNaN(positionRow) || isNaN(positionColumn)){
    return false;
  }

  
  const boardHeight = board.length;
  const boardWidth = board[0].length;

  // not valid input: the first number is not positive integer or greater than or equal the number of board row
  if (positionRow < 0 || positionRow >= boardHeight) {
    return false;
  } 
  // not valid input: the second number is not positive integer or greater than or equal the number of board column
  if (positionColumn < 0 || positionColumn >= boardWidth) {
    return false;
  }

  // not valid input: the place entered are already taken
  const selectedCell = board[positionRow][positionColumn];
  if(selectedCell !== '.'){
    return false;
  }

  return true;
};

module.exports = isValidNextPosition;