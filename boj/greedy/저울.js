// 2437

const list = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[1].split(' ').map(Number).sort((a, b) => a - b);
const N = list.length;
let sum = 0;

for (let i = 0; i < N; i++) {
  if (sum + 1 < list[i]) break;
  sum += list[i];
}

console.log(sum + 1);