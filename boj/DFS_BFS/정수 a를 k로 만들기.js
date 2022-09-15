// 25418

const [A, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);
const checked = new Array(1000001).fill(0);
checked[A] = 1;

const BFS = () => {
  let queue = [A], cnt = 0;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const x of tmp) {
      if (x === K) return cnt;
      for (const dx of [x + 1, x * 2]) {
        if (dx <= 1000000 && !checked[dx]) {
          checked[dx] = 1;
          queue.push(dx);
        }
      }
    }
    cnt++;
  }
  return -1;
}

console.log(BFS());