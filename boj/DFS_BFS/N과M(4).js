// 15652

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

const answer = [];

const DFS = (L, s, tmp) => {
  if (L === m) return answer.push(tmp.slice());
  else {
    for (let i = s; i <= n; i++) {
      tmp.push(i);
      DFS(L + 1, i, tmp);
      tmp.pop();
    }
  }
}
DFS(0, 1, []);

answer.forEach(arr => console.log(arr.join(' ')));