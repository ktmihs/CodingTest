// 7569

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [m, n, h] = input.shift().split(' ').map(Number);
const tomatos = [...new Array(h)].map(e => []);
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) tomatos[i].push(input.shift().split(' ').map(Number));
}

const DIR = [[0, -1, 0], [0, 0, -1], [0, 1, 0], [0, 0, 1], [1, 0, 0], [-1, 0, 0]];

let queue = [], L = -1;

const BFS = yummy => {
  let queue = yummy.slice();
  while (queue.length) {
    L++;
    const tmp = queue.slice();
    queue = [];
    for (let [k, x, y] of tmp) {
      for (let [dk, dx, dy] of DIR) {
        if (k + dk >= 0 && k + dk < h && x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && !tomatos[k + dk][x + dx][y + dy]) {
          tomatos[k + dk][x + dx][y + dy] = 1;
          queue.push([k + dk, x + dx, y + dy]);
        }
      }
    }
  }
}

let isAll = 0;

for (let k = 0; k < h; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tomatos[k][i][j] === 1) queue.push([k, i, j]);
      if (tomatos[k][i][j] === 0) isAll++;
    }
  }
}

if (!isAll) console.log(0);
else {
  BFS(queue);
  if (tomatos.some(box => box.some(line => line.some(item => !item)))) console.log(-1);
  else console.log(L);
}