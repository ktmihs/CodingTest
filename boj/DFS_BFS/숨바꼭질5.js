// 17071

const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);

const BFS = time => {
  const odd = new Array(5 * 10e4 + 1).fill(false);
  const even = new Array(5 * 10e4 + 1).fill(false);
  even[n] = true;

  let answer = -1;
  let queue = [n], bro = k;

  outer: while (queue.length) {
    const tmp = queue.slice();
    queue = [];
    time++;
    bro += time;

    for (let pos of tmp) {
      for (let nowPos of [pos - 1, pos + 1, pos * 2]) {
        if (nowPos >= 0 && nowPos <= 5 * 10e4) {
          if (time % 2) {
            if (nowPos !== bro && !odd[nowPos]) {
              odd[nowPos] = true;
              queue.push(nowPos);
            } else if (nowPos === bro || odd[bro]) {
              answer = time;
              break outer;
            }
          } else {
            if (nowPos !== bro && !even[nowPos]) {
              even[nowPos] = true;
              queue.push(nowPos);
            } else if (nowPos === bro || even[bro]) {
              answer = time;
              break outer;
            }
          }
        }
      }
    }
  }
  return answer;
}

console.log(n === k ? 0 : BFS(0));