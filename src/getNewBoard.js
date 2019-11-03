const getNewBoard  = (currentBoard,mark,position) => {

  const positionArray = position.split(',').map(Number);
  const positionRow = positionArray[0] - 1;
  const positionColumn = positionArray[1] - 1;

  currentBoard[positionRow][positionColumn] = mark;

  return currentBoard;
}

module.exports = getNewBoard;


