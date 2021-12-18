const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const n = +input.shift()

input = input.map(i => [...i.split(' ').map(a => +a)])

const dp = new Array(n + 1).fill(0)

for (let i = 0; i < n; i++) {
  for (let j = i + input[i][0]; j <= n; j++) {
    dp[j] = dp[j] < dp[i] + input[i][1] ? dp[i] + input[i][1] : dp[j]
  }
}
console.log(dp[n])