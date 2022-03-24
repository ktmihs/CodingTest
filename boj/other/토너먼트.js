// 1057

const fs = require('fs');
let [n, kim, lim] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

let cnt = 0;

while (kim !== lim) {
  cnt++;
  kim -= Math.floor(kim / 2);
  lim -= Math.floor(lim / 2);
}

console.log(cnt);