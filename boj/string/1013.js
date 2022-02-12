// contact

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const answer = input.map(string => /^(100+1+|01)+$/.test(string) ? 'YES' : 'NO')
console.log(answer.join('\n'));