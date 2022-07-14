// 1972

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
input.pop();

console.log(input.map(string => {
  const N = string.length;
  let flag = false;
  outer: for (let i = 1; i < N; i++) {
    const set = new Set();
    for (let j = 0; j < N; j++) {
      if (j + i >= N) break;
      if (set.has(`${string[j]}${string[j + i]}`)) {
        flag = true;
        break outer;
      } set.add(`${string[j]}${string[j + i]}`);
    }
  }
  return flag ? `${string} is NOT surprising.` : `${string} is surprising.`
}).join('\n'));