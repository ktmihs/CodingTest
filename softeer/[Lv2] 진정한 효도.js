const board = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.split(' ').map(Number));
let minVal = 100;

for (let k = 1; k <= 3; k++) {
  for (let i = 0; i < 3; i++) {
    let row = 0, col = 0;
    for (let j = 0; j < 3; j++) {
      row += Math.abs(board[i][j] - k);
      col += Math.abs(board[j][i] - k);
    }
    minVal = Math.min(minVal, row, col);
  };
}

console.log(minVal);