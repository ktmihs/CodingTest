// 3036

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[1].split(' ').map(Number);
const GCD = (a, b) => b ? GCD(b, a % b) : a;

const st = input.shift(), answer = [];
input.forEach(R => {
  const gcd = st > R ? GCD(st, R) : GCD(R, st);
  answer.push(`${st / gcd}/${R / gcd}`);
})
console.log(answer.join('\n'));