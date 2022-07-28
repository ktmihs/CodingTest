// 11651

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();
const dott = input.map(i => i.split(' ').map(Number)).sort((prev, next) => {
  if (prev[1] === next[1]) return prev[0] - next[0];
  return prev[1] - next[1];
});
console.log(dott.map(d => d.join(' ')).join('\n'))