// 17836

const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const [n, m, t] = input.shift().split(' ').map(Number);
const castle = input.map(line => line.split(' ').map(Number));
const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];

let Excalibur;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) if (castle[i][j] === 2) Excalibur = [i, j];
}

const BFS = (s, e) => {
  const check = [...new Array(n)].map(e => Array(m).fill(false));
  const [sx, sy] = s;
  const [ex, ey] = e;

  let queue = [[sx, sy]], time = 0;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [x, y] of tmp) {
      if (x === ex && y === ey) return time;
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && castle[x + dx][y + dy] !== 1 && !check[x + dx][y + dy]) {
          check[x + dx][y + dy] = true;
          queue.push([x + dx, y + dy]);
        }
      }
    }
    time++;
  }
  return 10e9;
}

const atob = BFS([0, 0], Excalibur);
const btoc = (n - 1) - Excalibur[0] + (m - 1) - Excalibur[1];
const atoc = BFS([0, 0], [n - 1, m - 1]);

const min = Math.min(atob + btoc, atoc);
console.log(min > t ? 'Fail' : min);