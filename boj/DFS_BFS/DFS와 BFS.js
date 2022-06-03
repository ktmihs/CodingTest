// 1260

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m, v] = input.shift().split(' ').map(Number);

const arr = [...Array(n + 1)].map(e => []);
input.forEach(V => {
  const [a, b] = V.split(' ').map(Number);
  arr[a].push(b);
  arr[b].push(a);
});

arr.forEach(V => V.sort((a, b) => a - b));

const check = new Array(n + 1).fill(0);
check[v] = 1;
const dfs = [v];
const DFS = s => {
  for (let x of arr[s]) {
    if (!check[x]) {
      check[x] = 1;
      dfs.push(x);
      DFS(x);
    }
  }
}

DFS(v)
console.log(dfs.join(' '));
const BFS = () => {
  let queue = [v];
  const check = new Array(n + 1).fill(0);
  check[v] = 1;
  const bfs = [v];

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (let t of tmp) {
      for (let x of arr[t]) {
        if (!check[x]) {
          check[x] = 1;
          bfs.push(x);
          queue.push(x);
        }
      }
    }
  }
  return bfs;
}
console.log(BFS().join(' '));