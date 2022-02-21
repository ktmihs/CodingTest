// 2579

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);
const dp = new Array(n).fill(0);
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

let i = 0,
  answer = 0;

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
}


console.log(dp[n - 1]);