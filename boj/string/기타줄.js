// 1049

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);

const [a, b] = [Math.floor(n / 6), n % 6];
let minSet = 10e9, minOne = 10e9;

input.forEach(g => {
  const [set, one] = g.split(' ').map(Number);
  minSet = Math.min(minSet, set);
  minOne = Math.min(minOne, one);
})

console.log(Math.min(minSet * (a + !!b), minSet * a + minOne * b, minOne * n));