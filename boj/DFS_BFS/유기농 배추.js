// 1012

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
let index = 0;
const answer = [];
const dir = [[0, -1], [-1, 0], [1, 0], [0, 1]];

for (let k = 0; k < n; k++) {
  const [n, m, k] = input[index++].split(' ').map(Number);

  const arr = [...Array(n)].map(e => Array(m).fill(0));
  for (let j = index; j < index + k; j++) {
    const [x, y] = input[j].split(' ').map(Number);
    arr[x][y] = 1;
  }

  const cabbages = (x, y) => {
    arr[x][y] = 0;
    for (let [dx, dy] of dir) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && arr[x + dx][y + dy]) {
        cabbages(x + dx, y + dy);
      }
    }
    return 1;
  }

  let worm = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j]) worm += cabbages(i, j);
    }
  }
  answer.push(worm);
  index += k;
}
console.log(answer.join('\n'));