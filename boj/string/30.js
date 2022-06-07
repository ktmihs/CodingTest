// 10610

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

input.indexOf(0) === -1 ? console.log(-1) : console.log([...input].reduce((sum, num) => sum + +num, 0) % 3 ? -1 : [...input].sort((a, b) => +b - +a).join(''));