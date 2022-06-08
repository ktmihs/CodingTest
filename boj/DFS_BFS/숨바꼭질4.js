// 13913

const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

let queue = [n], answer = [];
if (n !== k) {
  const visited = new Map();
  visited.set(n, 1);

  outer: while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (let pos of [x * 2, x - 1, x + 1]) {
        if (pos === k) {
          visited.set(pos, x);
          break outer;
        }
        if (pos >= 0 && pos < 100001 && !visited.has(pos)) {
          queue.push(pos);
          visited.set(pos, x);
        }
      }
    }
  }
  let pos = k;
  while (pos !== n) {
    answer.push(pos);
    pos = visited.get(pos);
  }
}
answer.push(n);
console.log(answer.length - 1);
console.log(answer.reverse().join(' '));