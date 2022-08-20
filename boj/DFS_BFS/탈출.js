// 3055

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const forest = input.map(line => line.split(''));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

const find = res => {
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (forest[i][j] === res) queue.push([i, j]);
    }
  }
  return queue;
}
const [hedgehog] = find('S');

let water = find('*'), cnt = 1;
while (water.length) {
  const tmp = water.slice();
  water = [];

  for (const [x, y] of tmp) {
    for (const [dx, dy] of DIR) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && forest[x + dx][y + dy] === '.') {
        forest[x + dx][y + dy] = cnt;
        water.push([x + dx, y + dy]);
      }
    }
  }
  cnt++;
}

const BFS = (queue) => {
  let time = 1;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m) {
          if (forest[x + dx][y + dy] === 'D') return time;
          if (forest[x + dx][y + dy] === '.' || (!isNaN(forest[x + dx][y + dy]) && forest[x + dx][y + dy] > time)) {
            forest[x + dx][y + dy] = 'X';
            queue.push([x + dx, y + dy]);
          }
        }
      }
    }
    time++;
  }
  return 'KAKTUS';
}

console.log(BFS([hedgehog]));