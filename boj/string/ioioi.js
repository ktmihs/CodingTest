// 5525

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input[0];
let str = input[2];
let p = 'I' + 'OI'.repeat(n);
let s = '';
const list = [];

for (let i = 0; i < +input[1] - 1; i++) {
  if (str[i] !== str[i + 1]) s += str[i + 1];
  else {
    let cnt = s.length;
    if (s.length && s[s.length - 1] === 'O') cnt--;
    if (s.length && s[0] === 'O') cnt--;
    list.push(cnt);
    s = str[i + 1];
  }
}
if (s.length > 1) {
  let cnt = s.length;
  if (s.length && s[s.length - 1] === 'O') cnt--;
  if (s.length && s[0] === 'O') cnt--;
  list.push(cnt);
}

let answer = 0;
for (const item of list) {
  if (item >= p.length) answer += Math.floor((item - 1) / 2) - n + 1;
}
console.log(answer);