const getResult = (board) => {
  const winningCases= [
    board[0][0] + board[0][1] + board[0][2],
    board[1][0] + board[1][1] + board[1][2],
    board[2][0] + board[2][1] + board[2][2],
    board[0][0] + board[1][0] + board[2][0],
    board[0][1] + board[1][1] + board[2][1],
    board[0][2] + board[1][2] + board[2][2],
    board[0][0] + board[1][1] + board[2][2],
    board[0][2] + board[1][1] + board[2][0]
  ]

  // check if x wins
  const xWin = (value) => {
    return value === 'xxx'
  }

  if (winningCases.some(xWin)) {
    return 'x'
  }
  
  // check if o wins
  const oWin = (value) => {
    return value === 'ooo'
  }

  if (winningCases.some(oWin)) {
    return 'o'
  }


  // check if draw
  const cellFilled = cell => {
    return cell !== ''
  }

  const rowFilled = row => { 
    return row.every(cellFilled)
  }
  
  if (board.every(rowFilled)) {
    return 'd'
  }
 
  return 'i'

}

module.exports = getResult;