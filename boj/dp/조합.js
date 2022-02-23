// 2407

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m] = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(' ').map(Number);

const dp = [...Array(n + 1)].map(e => Array(m + 1).fill(0));

function DFS(n, m) {
  if (dp[n][m] !== 0) return dp[n][m] // 이미 저장된 값
  if (n === m || m === 0) return 1n
  else return (dp[n][m] = DFS(n - 1, m - 1) + DFS(n - 1, m))
}
console.log(DFS(n, m) + '');