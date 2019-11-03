const isValidNextPosition = require('./isValidNextPosition');
const getNewBoard = require('./getNewBoard');
const getResult = require('./getResult');
const printResult = require('./printResult');
const printBoard = require('./printBoard');

// Get process.stdin as the standard input project
const standardInput = process.stdin;

// Set input character encoding
standardInput.setEncoding('utf-8'); 

let isXturn = true;
let board = [
  ['.','.','.'],
  ['.','.','.'],
  ['.','.','.']
]
let result;
const printInstruction = (mark) => {
  console.log(`Player ${mark} enter a coord x,y to place your mark or enter 'q' to give up.`);
};
let mark = isXturn ? 'x':'o';

console.log("Welcome to Tic Tac Toe Game.");
printBoard(board);
printInstruction(mark);

// When user input data and click enter key
standardInput.on('data', (data) => {
  const position = data.replace('\n', '');

  if (position === 'q') {
    process.exit();
  }

  if (isValidNextPosition(board, position)){
    mark = isXturn ? 'x':'o';
    board = getNewBoard(board, mark, position);
    result = getResult(board);
    printResult(result);

    if (result === 'i'){ 
      isXturn = !isXturn;
      mark = isXturn ? 'x':'o';
      printBoard(board);
      printInstruction(mark);
      return;
    }

    printBoard(board);
    process.exit(); 
  }

  console.log("Oh no, this is not a valid spot! Try again...");
  printInstruction(mark);
})