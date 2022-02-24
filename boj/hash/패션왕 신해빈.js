// 9375

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();

for (let i = 0; i < n; i++) {
  const len = +input.shift();
  const clothes = input.splice(0, len);
  let answer = 1;
  const hash = new Map();
  clothes.forEach(cloth => {
    const [_, i] = cloth.split(' ');
    hash.set(i, (hash.get(i) || 0) + 1);
  })
  for (let [i, v] of hash) answer *= (v + 1);
  console.log(answer - 1);
}