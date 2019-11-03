const printResult = (result) => {
  if (result === 'x'){
    console.log("Congratulations! X wons the game.")
  }
  if (result === 'o'){
    console.log("Congratulations! O wons the game.")
  }
  if (result === 'd'){
    console.log("Draw!")
  }
}
module.exports = printResult;