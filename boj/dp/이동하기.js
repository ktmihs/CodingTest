// 11048

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(line => line.split(' ').map(Number));
const [n, m] = input.shift();

for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    let max = 0;
    for (let [dx, dy] of [[-1, 0], [0, -1], [-1, -1]]) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m) {
        if (max < input[x + dx][y + dy]) max = input[x + dx][y + dy];
      }
    }
    input[x][y] += max;
  }
}
console.log(input[n - 1][m - 1]);