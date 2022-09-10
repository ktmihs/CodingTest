// 3187

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const field = input.map(line => line.split(''));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const check = [...new Array(n)].map(e => Array(m).fill(false));

let sh = 0, w = 0;

const BFS = (i, j) => {
  check[i][j] = true;
  let queue = [[i, j]], num1 = 0, num2 = 0;
  if (field[i][j] === 'v') num1++;
  if (field[i][j] === 'k') num2++;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [x, y] of tmp) {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && field[x + dx][y + dy] !== '#' && !check[x + dx][y + dy]) {
          check[x + dx][y + dy] = true;
          queue.push([x + dx, y + dy]);
          if (field[x + dx][y + dy] === 'v') num1++;
          else if (field[x + dx][y + dy] === 'k') num2++;
        }
      }
    }
  }
  return [num1, num2];
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (field[i][j] !== '#' && !check[i][j]) {
      const [n1, n2] = BFS(i, j);
      if (n1 >= n2) w += n1;
      else sh += n2;
    }
  }
}

console.log(`${sh} ${w}`);