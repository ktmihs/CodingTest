const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

if (!input[0].trim()) {
  console.log(0);
  return;
}
console.log(input[0].trim().split(' ').length);