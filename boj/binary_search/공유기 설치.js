// 2110

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, c] = input.shift().split(' ').map(Number);
const house = input.map(Number).sort((a, b) => a - b);
let left = 0, right = 10e9, answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 1, prevHouse = house[0];
  for (let i = 1; i < house.length; i++) {
    if (house[i] - prevHouse >= mid) {
      prevHouse = house[i];
      cnt++;
    }
  }
  if (cnt >= c) {
    left = mid + 1;
    answer = mid;
  } else right = mid - 1;
}
console.log(answer);