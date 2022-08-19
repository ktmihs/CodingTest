// 1743

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m, k] = input.shift().split(' ').map(Number);
const floor = [...new Array(n)].map(e => Array(m).fill(0));
input.forEach(line => {
  const [x, y] = line.split(' ').map(Number);
  floor[x - 1][y - 1] = 1;
});
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

let max = 0;

const BFS = (i, j) => {
  let queue = [[i, j]], cnt = 1;
  floor[i][j] = 0;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      for (let [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && floor[x + dx][y + dy]) {
          floor[x + dx][y + dy] = 0;
          queue.push([x + dx, y + dy]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (floor[i][j]) max = Math.max(max, BFS(i, j));
  }
}

console.log(max);