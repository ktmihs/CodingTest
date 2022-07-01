// 16918

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [r, c, n] = input.shift().split(' ').map(Number);
const DIR = [[-1, 0], [0, -1], [0, 1], [1, 0]];

const BFS = (state) => {
  const queue = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (state[i][j] === 'O') {
        queue.push([i, j]);
        state[i][j] = '.';
      } else state[i][j] = 'O';
    }
  }
  for (let [x, y] of queue) {
    for (let [dx, dy] of DIR) {
      if (x + dx >= 0 && x + dx < r && y + dy >= 0 && y + dy < c) state[x + dx][y + dy] = '.';
    }
  }
  return state;
}

if (n === 1) console.log(input.join('\n'));
else if (!(n % 2)) console.log(Array(r).fill('O'.repeat(c)).join('\n'));
else {
  let state = input.map(e => e.split(''));
  for (let k = 0; k < Math.floor(n / 2); k++) state = BFS(state);
  
  console.log(state.map(line => line.join('')).join('\n'))
}