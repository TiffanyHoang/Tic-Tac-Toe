const printResult = (result) => {
  if (result === 'x'){
    console.log("Congratulations! x wons the game.");
  }
  if (result === 'o'){
    console.log("Congratulations! o wons the game.");
  }
  if (result === 'd'){
    console.log("Draw!");
  }
}
module.exports = printResult;