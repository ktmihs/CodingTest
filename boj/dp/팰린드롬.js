const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const str = input.shift().split(' ').map(Number);
const dp = [...Array(n)].map(e => Array(n).fill(0));

for (let i = 0; i < n; i++) {
  dp[i][i] = 1;
  if (i + 1 < n) str[i] === str[i + 1] ? dp[i][i + 1] = 1 : dp[i][i + 1] = 0;
}

let i = 0;
for (let j = 2; j < n; j++) {
  for (i = 0; i < n - j; i++) {
    if (str[i] === str[i + j]) dp[i][i + j] = +dp[i + 1][i + j - 1];
    else dp[i][i + j] = 0;
  }
}
input.shift();
const answer = [];

input.forEach(quest => {
  const [S, E] = quest.split(' ').map(Number);
  answer.push(dp[S - 1][E - 1]);
})
console.log(answer.join('\n'));