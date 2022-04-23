// 1520

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [row, col] = input.shift().split(' ').map(Number);
const maps = input.map(map => map.split(' ').map(Number));
const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const dp = [...Array(row)].map(e => Array(col).fill(-1));

function DFS(x, y) {
  if (x === row - 1 && y === col - 1) return 1;
  else if (dp[x][y] === -1) {
    dp[x][y] = 0;
    for (let [dx, dy] of dir) {
      if (x + dx >= 0 && x + dx < row && y + dy >= 0 && y + dy < col && maps[x][y] > maps[x + dx][y + dy]) {
        dp[x][y] += DFS(x + dx, y + dy);
      }
    }
  }
  return dp[x][y];
}

console.log(DFS(0, 0));