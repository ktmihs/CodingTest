// 12851

const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

if (n === k) {
  console.log(0);
  console.log(1);
} else {

  const check = new Array(100001).fill(false);
  check[n] = true;
  let queue = [n], answer = 0, L = 0;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    L++;

    for (let x of tmp) {
      for (let p of [x + 1, x - 1, x * 2]) {
        if (p === k) answer++;
        check[x] = true;
        if (p >= 0 && p <= 100000 && !check[p]) {
          queue.push(p);
        }
      }
    }
    if (answer) break;
  }

  console.log(L);
  console.log(answer);
}
