const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = parseInt(fs.readFileSync(filePath).toString().trim())

let dp = new Array(input).fill(1)
dp[1] = 2

for (let i = 2; i < input; i++) dp[i] = parseInt((dp[i - 1] + dp[i - 2]) % 10007)

console.log(dp[input - 1])