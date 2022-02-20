// 1939

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);

const [start, end] = input.pop().split(' ').map(Number);

const arr = new Array(n + 1);
for (let i = 0; i <= n; i++) arr[i] = [];

input.forEach(route => {
  const [u, v, w] = route.split(' ').map(Number);
  arr[u].push([v, w]);
  arr[v].push([u, w]);
})

const BFS = mid => {
  const queue = [start];
  const visited = new Array(n + 1).fill(false);
  visited[start] = true;

  while (queue.length) {
    let x = queue.shift();
    for (let [y, w] of arr[x]) {
      if (!visited[y] && w >= mid) {
        visited[y] = true;
        queue.push(y);
      }
    }
  }
  return visited[end];
}

let left = 0, right = 10e9, answer = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (BFS(mid)) {
    answer = mid;
    left = mid + 1;
  } else right = mid - 1;
}

console.log(answer);