// 16938

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, L, R, X] = input[0].split(' ').map(Number);
const sol = input[1].split(' ').map(Number);

let answer = new Set();
const DFS = (i, list, sum, min, max) => {
  if (i > N) return;
  if (list.length >= 2 && sum >= L && sum <= R && max - min >= X) answer.add(list.join('.'));
  DFS(i + 1, [...list, i], sum + sol[i], min > sol[i] ? sol[i] : min, max < sol[i] ? sol[i] : max);
  DFS(i + 1, list, sum, min, max);
}

DFS(0, [], 0, 10e9, 0);
console.log([...answer].length);