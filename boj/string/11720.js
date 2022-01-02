const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = input[0].split('').reduce((sum, a) => sum + +a);

console.log(answer);