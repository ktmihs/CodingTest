// 14002

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const dp = new Array(n);
for (let i = 0; i < n; i++) dp[i] = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = dp[i].length > dp[j].length ? dp[i].slice() : dp[j].slice();
  }
  dp[i].push(arr[i]);
}

let cnt = 0, index = 0;
dp.forEach((list, idx) => {
  if (list.length > cnt) {
    cnt = list.length;
    index = idx;
  }
})

console.log(cnt);
console.log(dp[index].join(' '));