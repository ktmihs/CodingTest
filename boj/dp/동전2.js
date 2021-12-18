const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")

const [n, k] = input.shift().split(' ').map(a => +a)
const coin = [...input.map(a => +a)]

const dp = new Array(k + 1).fill(10e5)
dp[0] = 0

for (let i = 0; i < n; i++) {
  for (let j = coin[i]; j <= k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1)
  }
}
if (dp[k] === 10e5) console.log(-1)
else console.log(dp[k])