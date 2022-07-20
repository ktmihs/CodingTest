// 1065

const n = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

if (n < 100) return console.log(n);

let answer = 99;
for (let i = 100; i <= n; i++) {
  let H = Math.floor(i / 100);
  let T = Math.floor(i / 10) % 10;
  let O = i % 10;

  if ((H - T) === (T - O)) answer++;
}

console.log(answer);