const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
input = input.map(Number);

let answer = 1;

let left = 0,
  right = input.reduce((sum, i) => sum + i);
while (left <= right) {
  const middle = Math.floor((left + right) / 2);

  let bud = 0,
    cnt = 1;

  for (let i of input) {
    if (middle < i) {
      left = middle + 1;
      break;
    }
    bud += i;
    if (bud > middle) {
      cnt++;
      bud = i;
    }
  }
  if (cnt <= m && left !== middle + 1) {
    answer = middle;
    right = middle - 1;
  } else {
    left = middle + 1;
  }
}

console.log(answer);