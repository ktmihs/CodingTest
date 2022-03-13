// 2473

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const len = +input[0];
const liq = input[1].split(' ').map(Number);
liq.sort((a, b) => a - b);

const answer = [0, 0, 0];
let sum = 3 * 10e9;

for (let i = 0; i < len - 2; i++) {
  let left = i + 1, right = len - 1;

  while (left < right) {
    const T = liq[i] + liq[left] + liq[right];
    if (sum > Math.abs(T)) {
      sum = Math.abs(T);
      answer[0] = liq[i];
      answer[1] = liq[left];
      answer[2] = liq[right];
    }
    T > 0 ? right-- : left++;
  }
}

console.log(answer.join(' '));