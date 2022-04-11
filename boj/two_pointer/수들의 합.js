const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = +fs.readFileSync(filePath).toString().trim().split("\n")[0];

let left = 1, right = 1, sum = 0, answer = 0;

while (right <= input) {
  sum += right++;
  while (sum > input) sum -= left++;
  if (sum === input) answer++;
}
console.log(answer);