// 19637

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const keyword = [];
const answer = [];

for (let i = 0; i < n; i++) {
  const [key, val] = input[i].split(' ');
  if (keyword.length && keyword[keyword.length - 1][1] === +val) continue;
  keyword.push([key, +val]);
}

for (let i = n; i < input.length; i++) {
  const target = +input[i];
  let left = 0, right = keyword.length - 1, res;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (keyword[mid][1] > target) {
      res = keyword[mid][0];
      right = mid - 1;
    } else if (keyword[mid][1] === target) {
      res = keyword[mid][0];
      break;
    } else left = mid + 1;
  }
  answer.push(res);
}

console.log(answer.join('\n'));