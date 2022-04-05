const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, k] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').map(Number).sort((a, b) => a - b);
console.log(arr[k - 1]);