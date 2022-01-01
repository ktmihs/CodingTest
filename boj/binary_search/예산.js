const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const coun = input[1].split(' ').map(Number);
const budg = +input[2];

let answer = 0,
  left = 0,
  right = 2 * 10e9;

if (coun.reduce((sum, c) => sum + c, 0) <= budg) {
  console.log(Math.max(...coun));
  return;
}

while (left < right) {
  const middle = Math.floor((left + right) / 2);

  const sum = coun.reduce((sum, c) => c > middle ? sum + middle : sum + c, 0);

  if (budg >= sum) {
    answer = middle;
    left = middle + 1;
  } else right = middle;
}

console.log(answer);