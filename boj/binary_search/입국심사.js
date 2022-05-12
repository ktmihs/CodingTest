// 3079

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const times = input.map(Number);

let left = 0n, right = answer = BigInt(times[0] * m);

while (left <= right) {
  const mid = BigInt((left + right) / 2n);
  let total = 0n;
  for (let time of times) {
    total += BigInt(mid / BigInt(time));
    if (total >= m) break;
  }
  if (total >= m) {
    right = mid - 1n;
    answer = mid;
  } else left = mid + 1n;
}
console.log(answer + '');