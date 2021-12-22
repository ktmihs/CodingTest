const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const n = +input.shift();

const hash = new Map();

input.forEach(inp => hash.set(inp, (hash.get(inp) || 0) + 1));

let list = [...hash].sort((a, b) => {
  if (a[1] === b[1]) return a[0] > b[0] ? 1 : -1;
  else return b[1] - a[1];
})

console.log(list[0][0]);