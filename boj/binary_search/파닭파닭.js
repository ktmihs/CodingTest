// 14627

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [s, c] = input.shift().split(' ').map(Number);
const list = input.map(Number);

let left = 1, right = 10e9 + 1, answer = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const n = list.reduce((cnt, len) => cnt + Math.floor(len / mid), 0);
  if (n >= c) {
    answer = mid;
    left = mid + 1;
  } else right = mid - 1;
}

console.log(list.reduce((sum, len) => sum + len, 0) - (answer * c));