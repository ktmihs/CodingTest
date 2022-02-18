// 2309

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const sum = input.reduce((acc, i) => acc + i);

input.sort((a, b) => a - b);

let left = 0,
  right = 8;
const len = sum - 100;
const answer = [];

while (left < right) {
  if (len === input[left] + input[right]) {
    for (let i = 0; i < 9; i++) {
      if (i !== left && i !== right) answer.push(input[i]);
    }
    break;
  } else if (len > input[left] + input[right]) left++;
  else right--;
}

console.log(answer.join('\n'));