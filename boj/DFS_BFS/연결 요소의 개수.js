// 11724

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(i => i.split(' ').map(Number));
const [n, m] = input.shift();

const arr = [...Array(n + 1)].map(e => []);
const checked = new Array(n + 1).fill(0);

for (let [a, b] of input) {
  arr[a].push(b);
  arr[b].push(a);
}

const BFS = i => {
  checked[i] = 1;
  let queue = [i];
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (let a of tmp) {
      for (let k of arr[a]) {
        if (!checked[k]) {
          checked[k] = 1;
          queue.push(k);
        }
      }
    }
  }
}

let answer = 0;
for (let i = 1; i <= n; i++) {
  if (!checked[i]) {
    BFS(i);
    answer++;
  }
}

console.log(answer);