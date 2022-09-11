// 12761

const [a, b, n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);
const check = new Array(100001).fill(0);

const BFS = () => {
  check[n] = 1;
  let queue = [n], cnt = 0;
  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const x of tmp) {
      if (x === m) return cnt;
      for (const pos of [x + 1, x - 1, x + a, x - a, x + b, x - b, x * a, x * b]) {
        if (pos >= 0 && pos <= 100000 && !check[pos]) {
          check[pos] = 1;
          queue.push(pos);
        }
      }
    }
    cnt++;
  }
  return -1;
}

console.log(BFS());