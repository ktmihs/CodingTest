// 10816

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const hash = new Map();
input[1].split(' ').map(num => hash.set(+num, (hash.get(+num) || 0) + 1));
console.log(input[3].split(' ').map(num => hash.get(+num) || 0).join(' '));