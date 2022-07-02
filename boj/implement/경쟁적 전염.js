// 18405

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, K] = input.shift().split(' ').map(Number);
const [S, X, Y] = input.pop().split(' ').map(Number);
const lab = input.map(line => line.split(' ').map(Number));
const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];

let queue = [];

for (let k = 1; k <= K; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (lab[i][j] === k) queue.push([i, j]);
    }
  }
}

for (let time = 0; time < S; time++) {
  const tmp = queue.slice();
  queue = [];
  for (let [x, y] of tmp) {
    for (let [dx, dy] of DIR) {
      if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < N && !lab[x + dx][y + dy]) {
        lab[x + dx][y + dy] = lab[x][y];
        queue.push([x + dx, y + dy]);
      }
    }
  }
}

console.log(lab[X - 1][Y - 1]);