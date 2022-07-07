// 1347

const road = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[1].split('');
const DIR = [[1, 0], [0, 1], [-1, 0], [0, -1]], map = [];

let minX = 0, minY = 0, maxX = 0, maxY = 0;
let x = 0, y = 0, dir = 0;

for (let char of road) {
  if (char === 'L') dir = dir === 3 ? 0 : dir + 1;
  else if (char === 'R') dir = dir === 0 ? 3 : dir - 1;
  else {
    x += DIR[dir][0];
    y += DIR[dir][1];
    if (minX > x) minX = x;
    if (maxX < x) maxX = x;
    if (minY > y) minY = y;
    if (maxY < y) maxY = y;
    map.push([x, y]);
  }
}

const maze = [...Array(maxX - minX + 1)].map(e => Array(maxY - minY + 1).fill('#'));
maze[- minX][- minY] = '.';

map.forEach(([x, y]) => maze[x - minX][y - minY] = '.')

console.log(maze.map(m => m.join('')).join('\n'));