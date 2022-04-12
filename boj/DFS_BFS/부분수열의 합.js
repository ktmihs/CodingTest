// 1182

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let answer = 0;
const DFS = (i, sum) => {
  if (i === n) return;
  if (sum + arr[i] === S) answer++;

  DFS(i + 1, sum);
  DFS(i + 1, sum + arr[i]);
}

DFS(0, 0);
console.log(answer);