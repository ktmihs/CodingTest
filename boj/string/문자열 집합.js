// 14425

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const set = new Set(input.slice(0, n));
let cnt = 0;
for (let i = n; i < input.length; i++) {
  if (set.has(input[i])) cnt++;
}

console.log(cnt);