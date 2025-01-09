// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = ['0', '1', '3', '2'];
const MAX = Math.max(...input);
const array = new Array(MAX + 1).fill();
array[0] = '-';
for (let i = 1; i <= MAX; i++) {
  array[i] = array[i - 1] + ' '.repeat(array[i - 1].length) + array[i - 1];
}
console.log(input.map(num => array[+num]).join('\n'));