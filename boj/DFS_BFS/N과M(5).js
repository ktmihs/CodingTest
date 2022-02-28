// 15654

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

const answer = [];
const check = new Array(n).fill(0);

const DFS = (L, tmp) => {
  if (L === m) return answer.push(tmp.slice());
  else {
    for (let i = 0; i < n; i++) {
      if (!check[i]) {
        tmp.push(nums[i]);
        check[i] = 1;
        DFS(L + 1, tmp);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
}
DFS(0, []);

answer.forEach(arr => console.log(arr.join(' ')));

