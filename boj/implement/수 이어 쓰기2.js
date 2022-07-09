// 1790

let [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);
let answer = 0, digit = 1, S = 9;

while (k > digit * S) {
  k -= digit * S;
  answer += S;
  digit++;
  S *= 10;
}

answer = (answer + 1) + Math.floor((k - 1) / digit);
console.log(answer > n ? -1 : String(answer)[(k - 1) % digit]);