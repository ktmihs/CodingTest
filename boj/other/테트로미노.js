// 14500

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [row, col] = input.shift().split(' ').map(Number);
const board = input.map(line => line.split(' ').map(Number));

const tetrominos = [[[0, 0], [0, 1], [0, 2], [0, 3]],
[[0, 0], [1, 0], [2, 0], [3, 0]],

[[0, 0], [0, 1], [1, 0], [1, 1]],

[[0, 0], [0, 1], [0, 2], [1, 0]],
[[0, 0], [0, 1], [0, 2], [1, 2]],
[[1, 0], [1, 1], [1, 2], [0, 2]],
[[1, 0], [1, 1], [1, 2], [0, 0]],
[[0, 0], [1, 0], [2, 0], [2, 1]],
[[0, 0], [1, 0], [2, 0], [0, 1]],
[[0, 1], [1, 1], [2, 1], [2, 0]],
[[0, 1], [1, 1], [2, 1], [0, 0]],

[[0, 0], [1, 0], [1, 1], [2, 1]],
[[0, 1], [1, 0], [1, 1], [2, 0]],
[[0, 1], [0, 2], [1, 0], [1, 1]],
[[0, 0], [0, 1], [1, 1], [1, 2]],

[[0, 0], [0, 1], [0, 2], [1, 1]],
[[0, 0], [1, 0], [2, 0], [1, 1]],
[[0, 1], [1, 1], [2, 1], [1, 0]],
[[1, 0], [1, 1], [1, 2], [0, 1]],
];

let answer = 0;

const calc = (x, y, tetromino) => {
  let sum = 0;
  for (let [dx, dy] of tetromino) {
    if (x + dx >= 0 && x + dx < row && y + dy >= 0 && y + dy < col) sum += board[x + dx][y + dy];
    else return 0;
  }
  return sum;
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    for (let tetromino of tetrominos) {
      answer = Math.max(answer, calc(i, j, tetromino))
    }
  }
}

console.log(answer);