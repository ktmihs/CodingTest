// 2606

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input.shift();
input.shift();

const pc = new Array(n);
for (let i = 0; i < n; i++) pc[i] = [];

input.forEach(i => {
  const [x, y] = i.split(' ').map(Number);
  pc[x - 1].push(y - 1);
  pc[y - 1].push(x - 1);
})

const check = new Array(n).fill(0);
check[0] = 1;
let answer = 0;

const DFS = (x) => {
  for (let i of pc[x]) {
    if (!check[i]) {
      check[i] = 1;
      answer++;
      DFS(i);
    }
  }
}

DFS(0);
console.log(answer);