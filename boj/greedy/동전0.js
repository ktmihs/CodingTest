// 11047

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, k] = input.shift().split(' ').map(Number);

let answer = 0;
while (k) {
  const coin = +input.pop();
  const cnt = Math.floor(k / coin);
  answer += cnt;
  k -= cnt * coin;
}

console.log(answer);