// 2847

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);
let cnt = 0;

for (let i = n - 1; i > 0; i--) {
  if (arr[i] <= arr[i - 1]) {
    cnt += (arr[i - 1] - arr[i] + 1);
    arr[i - 1] = arr[i] - 1;
  }
}
console.log(cnt);