const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

for (let str of input) {
  let answer = 0;
  let cnt = 1;
  for (let s of str) {
    if (s === 'O') answer += cnt++;
    else cnt = 1;
  }
  console.log(answer);
}