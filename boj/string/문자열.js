// 1120

const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ');

let big, small;
if (x.length > y.length) {
  big = x;
  small = y;
} else {
  big = y;
  small = x;
}
let answer = small.length;

for (let i = 0; i <= big.length - small.length; i++) {
  let cnt = 0;
  for (let j = 0; j < small.length; j++) {
    if (big[i + j] !== small[j]) cnt++;
  }
  answer = Math.min(answer, cnt);
}

console.log(answer);