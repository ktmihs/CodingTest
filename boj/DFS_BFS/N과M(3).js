// 15651

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [N, M] = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(' ').map(Number);

const tmp = [],
  answer = [];

function DFS(L) {
  if (L === M) answer.push(tmp.join(' '));
  else {
    for (let i = 1; i <= N; i++) {
      tmp.push(i);
      DFS(L + 1);
      tmp.pop();
    }
  }
}
DFS(0);

console.log(answer.join('\n'));