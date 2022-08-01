// 18429

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, k] = input[0].split(' ').map(Number);
const kit = input[1].split(' ').map(Number);

const check = new Array(n).fill(0);
let answer = 0;
const DFS = (L, sum) => {
  if (L === n) answer++;
  else {
    for (let i = 0; i < n; i++) {
      if (!check[i] && sum + kit[i] - k >= 500) {
        check[i] = 1;
        DFS(L + 1, sum + kit[i] - k);
        check[i] = 0;
      }
    }
  }
}
DFS(0, 500);
console.log(answer);