// 21736

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const campus = input.map(line => line.split(''));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

let answer = 0;
const BFS = (i, j) => {
  let queue = [[i, j]];
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && campus[x + dx][y + dy] !== 'X') {
          if (campus[x + dx][y + dy] === 'P') answer++;
          campus[x + dx][y + dy] = 'X';
          queue.push([x + dx, y + dy]);
        }
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (campus[i][j] === 'I') BFS(i, j);
  }
}

console.log(answer ? answer : 'TT');