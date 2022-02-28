// 15657

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

const answer = [];

const DFS = (L, s, tmp) => {
  if (L === m) return answer.push(tmp.slice());
  else {
    for (let i = s; i < n; i++) {
      tmp.push(nums[i]);
      DFS(L + 1, i, tmp);
      tmp.pop();
    }
  }
}
DFS(0, 0, []);

answer.forEach(arr => console.log(arr.join(' ')));