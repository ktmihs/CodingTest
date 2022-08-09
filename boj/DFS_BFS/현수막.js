// 14716

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [m, n] = input.shift().split(' ').map(Number);
const arr = input.map(line => line.split(' ').map(Number));

const dir = [[0, 1], [1, 0], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
const BFS = (i, j) => {
  let queue = [[i, j]];
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (let [x, y] of tmp) {
      for (const [dx, dy] of dir) {
        if (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n && arr[x + dx][y + dy]) {
          arr[x + dx][y + dy] = 0;
          queue.push([x + dx, y + dy]);
        }
      }
    }
  }
  return 1;
}

let answer = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j]) answer += BFS(i, j);
  }
}

console.log(answer);