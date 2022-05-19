// 11652

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const hash = new Map();
input.shift();
input.forEach(num => hash.set(BigInt(num), (hash.get(BigInt(num)) || 0) + 1));
console.log([...hash].sort((a, b) => b[1] === a[1] ? a[0] - b[0] >= 0 ? 1 : -1 : b[1] - a[1])[0][0] + '');