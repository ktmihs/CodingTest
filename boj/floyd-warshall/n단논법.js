// 15723

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = +input.shift();
const n = 26;
const dp = [...Array(n)].map(e => Array(n).fill(0));
dp.forEach((arr, i) => arr[i][i] = 1);

for (let i = 0; i < len; i++) {
  const [prev, next] = input[i].split(' is ').map((item, i) => item.charCodeAt(0) - 97);
  dp[prev][next] = 1;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][k] && dp[k][j]) dp[i][j] = 1;
    }
  }
}

const resultLen = +input[len];
const answer = [];

for (let i = len + 1; i <= len + resultLen; i++) {
  const [prev, next] = input[i].split(' is ').map((item, i) => item.charCodeAt(0) - 97);
  if (dp[prev][next]) answer.push('T') : answer.push('F');
}

console.log(answer.join('\n'));