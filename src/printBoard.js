const printBoard = (board) => {
  console.log("Here' the current board")

  board.forEach(row =>{
      console.log(row[0] + row[1] + row[2])
  })
}

module.exports = printBoard;