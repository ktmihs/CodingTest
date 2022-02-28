// 15666

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

const answer = new Set();

const DFS = (L, s, tmp) => {
  if (L === m) return answer.add(tmp.join(' '));
  else {
    for (let i = s; i < n; i++) {
      tmp.push(nums[i]);
      DFS(L + 1, i, tmp);
      tmp.pop();
    }
  }
}
DFS(0, 0, []);

answer.forEach(arr => console.log(arr));