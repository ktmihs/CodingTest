// 12904

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const s = input[0];
let t = input[1].split('');

while (s.length !== t.length) {
  if (t[t.length - 1] === 'A') t.pop();
  else {
    t.pop();
    t.reverse();
  }
}
console.log(s === t.join('') ? 1 : 0);