// 2468

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const heightList = new Set();

const area = input.map(line => {
  const numbers = line.split(' ').map(Number);
  numbers.forEach(number => heightList.add(number));
  return numbers;
});

const list = [...heightList].sort((a, b) => a - b);
const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];

let answer = 1;

for (let k of list) {
  const checked = [...Array(n)].map(e => Array(n).fill(0));

  const DFS = (x, y, k) => {
    for (let [dx, dy] of dir) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && area[x + dx][y + dy] > k && !checked[x + dx][y + dy]) {
        checked[x + dx][y + dy] = 1;
        DFS(x + dx, y + dy, k);
      }
    }
    return true;
  }
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (area[i][j] > k && !checked[i][j]) cnt += DFS(i, j, k);
    }
  }
  answer = Math.max(answer, cnt);
}
console.log(answer);