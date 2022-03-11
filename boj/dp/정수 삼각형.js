// 1932

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const tri = [];
input.forEach(i => tri.push(...i.split(' ').map(Number)));

let a = 1, answer = tri[0];
for (let i = 2; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (!j) tri[a] += tri[a - (i - 1)];
    else if (j === i - 1) tri[a] += tri[a - i];
    else tri[a] += Math.max(tri[a - (i - 1)], tri[a - i]);

    if (i === n) answer = Math.max(answer, tri[a]);
    a++;
  }
}
console.log(answer);