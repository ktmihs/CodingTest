// 9095

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const dp = [0, 1, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0];
const DP = n => dp[n] ? dp[n] : DP(n - 1) + DP(n - 2) + DP(n - 3);
console.log(input.map(num => !dp[+num] ? dp[+num] = DP(+num) : dp[+num]).join('\n'));