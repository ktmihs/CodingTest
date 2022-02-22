// 5582

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dp = [...Array(input[0].length)].map(e => Array(input[1].length).fill(0));
let answer = 0;

for (let i = 0; i < input[0].length; i++) {
  if (input[0][i] === input[1][0]) {
    dp[i][0] = 1;
    answer = 1;
  }
}
for (let j = 0; j < input[1].length; j++) {
  if (input[0][0] === input[1][j]) {
    dp[0][j] = 1;
    answer = 1;
  }
}
for (let i = 1; i < input[0].length; i++) {
  for (let j = 1; j < input[1].length; j++) {
    if (input[0][i] === input[1][j]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      answer = Math.max(dp[i][j], answer);
    }
  }
}
console.log(answer);