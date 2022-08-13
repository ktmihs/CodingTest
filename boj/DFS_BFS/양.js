// 3184

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const field = input.map(line => line.split(''));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const check = [...new Array(n)].map(e => Array(m).fill(false));

let sh = 0, w = 0;

const BFS = (i, j) => {
  let queue = [[i, j]];
  let sh = 0, w = 0;
  if (field[i][j] === 'v') w++;
  if (field[i][j] === 'o') sh++;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (let [x, y] of tmp) {
      for (let [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && field[x + dx][y + dy] !== '#' && !check[x + dx][y + dy]) {
          if (field[x + dx][y + dy] === 'v') w++;
          else if (field[x + dx][y + dy] === 'o') sh++;
          check[x + dx][y + dy] = true;
          queue.push([x + dx, y + dy]);
        }
      }
    }
  }
  return [sh, w];
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (field[i][j] !== '#' && !check[i][j]) {
      check[i][j] = true;
      const [o, v] = BFS(i, j);
      if (o > v) sh += o;
      else w += v;
    }
  }
}

console.log(`${sh} ${w}`);