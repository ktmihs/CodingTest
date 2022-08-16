// 14226

const s = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

const dp = [...Array(s * 2)].map(e => Array(s * 2).fill(false));
let queue = [[1, 0]], cnt = 0;
dp[1][0] = true;

outer: while (queue.length) {
  const tmp = queue.slice();
  queue = [];
  for (let [view, clip] of tmp) {
    if (view === s) break outer;

    if (view >= 0 && view < s * 2 && !dp[view][view]) {
      queue.push([view, view]);
      dp[view][view] = true;
    } if (clip && view + clip >= 0 && view + clip < s * 2 && !dp[view + clip][clip]) {
      queue.push([view + clip, clip]);
      dp[view + clip][clip] = true;
    } if (view - 1 >= 0 && view - 1 < s * 2 && !dp[view - 1][clip]) {
      queue.push([view - 1, clip]);
      dp[view - 1][clip] = true;
    }
  }
  cnt++;
}
console.log(cnt);