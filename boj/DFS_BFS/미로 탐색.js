// 2178

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const maze = input.map(i => i.split('').map(Number));

const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
let queue = [[0, 0]];
maze[0][0] = 0;

let count = 1;

outer: while (queue.length) {
  const tmp = queue.slice();
  queue = [];
  for (let [x, y] of tmp) {
    if (x === n - 1 && y === m - 1) break outer;
    for (let [dx, dy] of dir) {
      if (x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && maze[x + dx][y + dy]) {
        queue.push([x + dx, y + dy]);
        maze[x + dx][y + dy] = 0;
      }
    }
  }
  count++;
}
console.log(count);