// 2693

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();
console.log(input.map(line => line.split(' ').sort((a, b) => +b - +a)[2]).join('\n'));