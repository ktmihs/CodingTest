// 2573

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const iceberg = input.map(line => line.split(' ').map(Number));
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

let cnt = 1, L = 0;
while (cnt) {
  cnt = 0;

  const check = [...Array(n)].map(e => Array(m).fill(0));

  const checkSide = (x, y) => {
    let cnt = 0;
    for (let [dx, dy] of dir) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && !iceberg[x + dx][y + dy] && !check[x + dx][y + dy]) cnt++;
    }
    return cnt;
  }

  const BFS = (i, j) => {
    let queue = [[i, j]];

    while (queue.length) {
      const tmp = queue.slice();
      queue = [];

      for (let [x, y] of tmp) {
        for (let [dx, dy] of dir) {
          if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && iceberg[x + dx][y + dy] && !check[x + dx][y + dy]) {
            check[x + dx][y + dy] = 1;
            iceberg[x + dx][y + dy] -= checkSide(x + dx, y + dy);
            if (iceberg[x + dx][y + dy] < 0) iceberg[x + dx][y + dy] = 0;
            queue.push([x + dx, y + dy]);
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (iceberg[i][j] && !check[i][j]) {
        check[i][j] = 1;
        iceberg[i][j] -= checkSide(i, j);
        if (iceberg[i][j] < 0) iceberg[i][j] = 0;
        BFS(i, j);
        cnt++;
      }
    }
  }
  if (cnt >= 2) break;
  L++;
  if (!cnt) L = 0;
}

console.log(L);