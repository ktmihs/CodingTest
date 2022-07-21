// 1094

const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

console.log([...input.toString(2)].filter(i => i === '1').length);