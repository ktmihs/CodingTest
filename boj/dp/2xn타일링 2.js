// 11727

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = +fs.readFileSync(filePath).toString().trim().split("\n")[0];

let dp = new Array(input + 1).fill(0n);

dp[1] = 1n;
dp[2] = 3n;

for (let i = 3; i <= input; i++) dp[i] = dp[i - 1] + 2n * dp[i - 2];


console.log('' + (dp[input] % 10007n));