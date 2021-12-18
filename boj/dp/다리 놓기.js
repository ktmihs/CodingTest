const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

input.shift()

for (let i of input) {
  const [r, n] = i.split(' ').map(a => +a)
  const dp = new Array(34)
  for (let i = 0; i < 34; i++) dp[i] = new Array(34).fill(0)

  function DFS(n, r) {
    if (dp[n][r] !== 0) return dp[n][r]
    if (n === r || r === 0) return 1
    else return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  console.log(DFS(n, r))
}