// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(line => line.split(' '));
const [N, ...input] = ['5',
  '1',
  '3',
  '8',
  '-2',
  '2'].map(Number);
const sort = input.sort((a, b) => a - b);
const map = new Map();
input.forEach(num => map.set(num, (map.get(num) || 0) + 1));
const sortMap = [...map.entries()].sort((a, b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]);

const a = Math.round(input.reduce((sum, num) => sum + num, 0) / N);
const b = input[~~(N / 2)];
const c = (sortMap.length > 1 && sortMap[0][1] === sortMap[1][1]) ? sortMap[1][0] : sortMap[0][0];
const d = input.at(-1) - input[0];
console.log([a, b, c, d].join('\n'));