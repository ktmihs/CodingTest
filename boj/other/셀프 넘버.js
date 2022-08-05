// 4673

const num = (x) => x + [...(x + '')].reduce((p, n) => +p + +n, 0);

const answer = new Array(10001).fill(0);
for (let i = 1; i < 10001; i++) {
  const n = num(i);
  if (n <= 10001) answer[n] = 1;
}
const res = [];
answer.forEach((val, i) => i && !val && res.push(i));
console.log(res.join('\n'));