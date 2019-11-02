const isValidNextPosition = require('./isValidNextPosition'); 

test('returns false when invalid input (2 numbers separated by comma)', () => {
  const board = [['']];
  const position = '123';
  
  const actual = isValidNextPosition(board, position); 
  const expected = false;

  expect(actual).toBe(expected);
});

test('returns false when invalid input (2 numbers separated by comma)', () => {
  const board = [['']];
  const position = '3-4';
  
  const actual = isValidNextPosition(board, position); 
  const expected = false;

  expect(actual).toBe(expected);
});

test('returns false when invalid input (2 numbers separated by comma)', () => {
  const board = [['']];
  const position = 'a,a';
  
  const actual = isValidNextPosition(board, position); 
  const expected = false;

  expect(actual).toBe(expected);
});


test('returns false when invalid row', () => {
  const board = [['']];
  const position = '1,1';
  
  const actual = isValidNextPosition(board, position); 
  const expected = false;

  expect(actual).toBe(expected);
});


test('returns false when invalid column', () => {
  const board = [['','','']];
  const position = '0,3';
  
  const actual = isValidNextPosition(board, position); 
  const expected = false;

  expect(actual).toBe(expected);
});

test('returns false when it is not empty', () => {
  const board = [['a','','']];
  const position = '0,3';
  
  const actual = isValidNextPosition(board, position); 
  const expected = false;

  expect(actual).toBe(expected);
});

test('returns true when valid input', () => {
  const board = [['']];
  const position = '0,0';

  const actual = isValidNextPosition(board, position); 
  const expected = true;

  expect(actual).toBe(expected);
});
