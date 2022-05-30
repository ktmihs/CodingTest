// 2477

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const k = +input.shift();
const lenList = input.map(line => +line.split(' ')[1]);

const list = [lenList[0] * lenList[5]];
for (let i = 1; i <= 5; i++) list.push(lenList[i - 1] * lenList[i]);

const max = Math.max(...list);
const maxIdx = list.indexOf(max);
const minIdx = maxIdx < 3 ? maxIdx + 3 : maxIdx - 3;
const min = list[minIdx];

console.log((max - min) * k);