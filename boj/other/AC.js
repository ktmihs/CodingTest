// 5430

const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const answer = [];

for (let i = 0; i < n; i++) {
  const test = input[i * 3];
  const len = +input[i * 3 + 1];
  const arr = input[i * 3 + 2].slice(1, input[i * 3 + 2].length - 1).split(',');
  
  // dir===true는 순방향, false는 역방향
  let front = 0, back = 0, dir = true;

  [...test].forEach(TC => {
    if (TC === 'R') dir = !dir;
    else if (dir) front++;
    else back++;
  })

  if (front + back > len) answer.push('error');
  else if (dir) answer.push(`[${arr.slice(front, len - back)}]`);
  else answer.push(`[${arr.slice(front, len - back).reverse()}]`);
}

console.log(answer.join('\n'));