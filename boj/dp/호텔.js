// const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [info, ...input] = [
  '10 3',
  '3 1',
  '2 2',
  '1 3'
];
const [C, N] = info.split(' ').map(Number);
const cities = input.map(line => line.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
const maxCust = Math.max(...cities.map(city => city[1]));
const dp = new Array(C + maxCust).fill(10e9);
dp[0] = 0;
for (const [cost, cust] of cities) {
  for (let i = cust; i < C + maxCust; i++) {
    dp[i] = Math.min(dp[i - cust] + cost, dp[i]);
  }
}
console.log(Math.min(...dp.slice(C)));
