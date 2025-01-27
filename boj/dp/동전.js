// const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [T, ...input] = [
  '3',
  '2',
  '1 2',
  '1000',
  '3',
  '1 5 10',
  '100',
  '2',
  '5 7',
  '22'
];
const result = [];
for (let i = 0; i < input.length; i += 3) {
  const N = +input[i];
  const coins = input[i + 1].split(' ').map(Number).sort((a, b) => a - b);
  const cost = +input[i + 2];
  const dp = new Array(cost + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let j = 0; j <= cost; j++) {
      if (j >= coin) dp[j] += dp[j - coin];
    }
  }
  result.push(dp[cost]);
}
console.log(result.join('\n'));