// 1303

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [M, N] = input.shift().split(' ').map(Number);
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const area = input.map(line => line.split(''));
let white = 0, black = 0;

const BFS = (i, j, target) => {
  area[i][j] = '0';
  let queue = [[i, j]], cnt = 1;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < N && y + dy >= 0 && y + dy < M && area[x + dx][y + dy] === target) {
          area[x + dx][y + dy] = '0';
          queue.push([x + dx, y + dy]);
          cnt++;
        }
      }
    }
  }
  return cnt * cnt;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (area[i][j] === 'W') white += BFS(i, j, 'W');
    if (area[i][j] === 'B') black += BFS(i, j, 'B');
  }
}

console.log(`${white} ${black}`);