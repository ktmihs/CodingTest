// 1543

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

console.log(input[0].split(input[1]).length - 1);