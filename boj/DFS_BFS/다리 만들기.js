// 2146

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const map = input.map(line => line.split(' ').map(Number));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

let num = 2, answer = 10e9;

const bridge = (i, j) => {
  const check = [...new Array(n)].map(e => Array(n).fill(false));
  check[i][j] = true;
  let queue = [[i, j]], cnt = 1;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && !check[x + dx][y + dy] && map[x + dx][y + dy] !== num) {
          if (!map[x + dx][y + dy]) {
            check[x + dx][y + dy] = true;
            queue.push([x + dx, y + dy]);
          } else answer = Math.min(answer, cnt);
        }
      }
    }
    cnt++;
    if (cnt > answer) return;
  }
}

const island = (i, j) => {
  map[i][j] = num;
  const edge = new Set();
  let queue = [[i, j]];

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n) {
          if (map[x + dx][y + dy] === 1) {
            map[x + dx][y + dy] = num;
            queue.push([x + dx, y + dy]);
          } else if (!map[x + dx][y + dy]) edge.add([x + dx, y + dy].join(','));
        }
      }
    }
  }
  for (const pos of [...edge]) bridge(...pos.split(',').map(Number));
  num++;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) island(i, j);
  }
}

console.log(answer);