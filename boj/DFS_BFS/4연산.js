// 14395

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [s, end] = input.shift().split(' ').map(Number);
const visit = new Set();
visit.add(s);

const BFS = () => {
  if (s === end) return 0;
  let queue = [[s, '']];
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const [n, oper] of tmp) {
      if (n === end) return oper;
      if (!visit.has(n * n)) {
        visit.add(n * n);
        queue.push([n * n, oper + '*']);
      } if (!visit.has(n + n)) {
        visit.add(n + n);
        queue.push([n + n, oper + '+']);
      } if (!visit.has(n - n)) {
        visit.add(n - n);
        queue.push([n - n, oper + '-']);
      } if (n && !visit.has(n / n)) {
        visit.add(n / n);
        queue.push([n / n, oper + '/']);
      }
    }
  }
  return -1;
}
console.log(BFS());