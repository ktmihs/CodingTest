// 팰린드롬 만들기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0];

let count = 0;
let len = input.length;
for (let i = 0; i < len; i++) {
  const string = input.slice(i);
  if (string === string.split('').reverse().join('')) {
    count = i;
    break;
  }
}
console.log(len + count);