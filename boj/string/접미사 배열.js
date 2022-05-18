// 11656

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const arr = [];
for (let i = 0; i < input.length; i++) arr.push(input.slice(i));
console.log(arr.sort().join('\n'));