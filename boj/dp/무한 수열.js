// 1351

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, p, q] = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(' ').map(Number);

const hash = new Map();
hash.set(0, 1);

const DFS = index => {
  if (!hash.get(index)) hash.set(index, DFS(Math.floor(index / p)) + DFS(Math.floor(index / q)));
  return hash.get(index);
}
console.log(DFS(n));