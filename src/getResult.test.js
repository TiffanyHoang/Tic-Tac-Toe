const getResult = require('./getResult');
test('x is winner', () => {
  const board = [
    ['x','x','x'],
    ['o','o','o'],
    ['o','x','x']
];
  
  const actual = getResult(board); 
  const expected = 'x';

  expect(actual).toBe(expected);
});

test('o is winner', () => {
  const board = [
    ['x','o','x'],
    ['o','o','o'],
    ['o','x','X']
];
  
  const actual = getResult(board); 
  const expected = 'o';

  expect(actual).toBe(expected);
});

test('Draw game', () => {
  const board = [
    ['x','o','x'],
    ['x','x','o'],
    ['o','x','o']
];
  
  const actual = getResult(board); 
  const expected = 'd';

  expect(actual).toBe(expected);
});

test('Game is not completed', () => {
  const board = [
    ['x','o','x'],
    ['x','.','o'],
    ['o','x','o']
];
  
  const actual = getResult(board); 
  const expected = 'i';

  expect(actual).toBe(expected);
});