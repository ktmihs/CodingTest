// 1339

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();
const hash = new Map();

input.forEach(word => {
  for (let i = 1; i <= word.length; i++) hash.set(word[i - 1], (hash.get(word[i - 1]) || 0) + 10 ** (word.length - i));
})

const list = [...hash].sort((a, b) => b[1] - a[1]);
let num = 9, answer = 0;
for (let [_, value] of list) answer += (num--) * value;

console.log(answer);