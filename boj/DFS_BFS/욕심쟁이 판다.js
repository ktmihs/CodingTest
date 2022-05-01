// 1937

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const bamboo = input.map(line => line.split(' ').map(Number));
const dir = [[0, -1], [0, 1], [1, 0], [-1, 0]];
const dp = [...Array(n)].map(e => Array(n).fill(0));

const DFS = (x, y) => {
  let res = 0;

  if (dp[x][y] != 0) return dp[x][y];

  for (let [dx, dy] of dir) {
    if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < n && bamboo[x + dx][y + dy] > bamboo[x][y]) {
      res = Math.max(res, DFS(x + dx, y + dy));
    }
  }
  dp[x][y] = res + 1;
  return dp[x][y];
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) answer = Math.max(answer, DFS(i, j));
}
console.log(answer);