// 7785

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();

const hash = new Map();

input.forEach(inp => {
  const [name, inOut] = inp.split(' ');
  if (inOut === 'enter') hash.set(name, 1);
  else hash.delete(name);
});

const list = [...hash.keys()].sort().reverse();

console.log(list.join('\n'));