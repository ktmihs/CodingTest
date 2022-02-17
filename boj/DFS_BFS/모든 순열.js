// 10974

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = +fs.readFileSync(filePath).toString().trim().split("\n")[0];

const answer = [];
const check = new Array(input + 1).fill(0);
const tmp = [];

const DFS = L => {
  if (L === input) answer.push(tmp.join(' '));
  else {
    for (let i = 1; i <= input; i++) {
      if (!check[i]) {
        check[i] = 1;
        tmp.push(i);
        DFS(L + 1);
        check[i] = 0;
        tmp.pop();
      }
    }
  }
}

DFS(0);
console.log(answer.join('\n'));