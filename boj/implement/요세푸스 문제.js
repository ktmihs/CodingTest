// const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(Number);
const [N, K] = [7, 3];
const answer = [];
const numbers = new Array(N).fill().map((_, i) => i + 1);
let cnt = 1;
while (numbers.length) {
  const num = numbers.shift();
  !(cnt % K) ? answer.push(num) : numbers.push(num);
  cnt++;
}
console.log(`<${answer.join(', ')}>`);