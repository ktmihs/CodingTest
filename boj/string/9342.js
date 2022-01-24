const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

for (let string of input) {
  if (string.match(/^[A-F]?A+F+C+[A-F]?$/)) console.log('Infected!');
  else console.log('Good');
}