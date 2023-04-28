function solution(x, y, n) {
  const checked = new Array(y + 1).fill(0);
  checked[x] = 1;
  let queue = [x], cnt = 0;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    for (const exec of tmp) {
      if (exec === y) return cnt;
      for (const val of [exec + n, exec * 2, exec * 3]) {
        if (val <= y && !checked[val]) {
          checked[val] = 1;
          queue.push(val);
        }
      }
    }
    cnt++;
  }

  return -1;
}