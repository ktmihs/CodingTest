const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const answerList = input.pop().split(' ').map(Number);
const edges = input.map(edge => edge.split(' ').map(Number));

let graph = new Array(n + 1);
for (let i = 0; i <= n; i++) graph[i] = new Array();
for (let [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

const checked = new Array(n + 1).fill(0);
const stack = [];
checked[1] = 1;
stack.push(1)
let i = 1, flag = 0;

const DFS = (visitNode) => {
  if (i === n) {
    flag = 1;
    return;
  }
  while (!checked[answerList[i]] && graph[visitNode].indexOf(answerList[i]) !== -1) {
    checked[answerList[i]] = 1;
    stack.push(answerList[i]);
    DFS(answerList[i++]);
    stack.pop();
    checked[i] = 0;
  }
  return;
}

DFS(1);
console.log(flag);