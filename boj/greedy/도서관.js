// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const input = [
  '7 2',
  '-37 2 -6 -39 -29 11 -28'
];
const [num, cnt] = input[0].split(' ').map(Number);
const locations = [0, ...input[1].split(' ')].map(Number).sort((a, b) => a - b);
const idx = locations.indexOf(0);
const minus = locations.slice(0, idx).map(Math.abs);
const plus = locations.slice(idx + 1).reverse();
let answer = 0;
const fn = (list, sum) => {
  if (!list.length) return sum;
  return fn(list.slice(cnt), sum + list[0] * 2);
};
if ((minus[0] || 0) > (plus[0] || 0)) {
  answer += fn(plus, 0);
  answer += fn(minus.slice(cnt), 0) + minus[0];
} else {
  answer += fn(minus, 0);
  answer += fn(plus.slice(cnt), 0) + plus[0];
}
console.log(answer);