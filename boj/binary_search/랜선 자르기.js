// 1654

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [k, n] = input.shift().split(' ').map(Number);
const lens = input.map(Number);

let left = 1, right = 10e9;
let answer = right;

while (left <= right) {
  const middle = Math.floor((left + right) / 2);

  let cnt = 0;
  lens.forEach(len => cnt += Math.floor(len / middle));
  if (cnt >= n) {
    answer = middle;
    left = middle + 1;
  } else right = middle - 1;
}

console.log(answer);