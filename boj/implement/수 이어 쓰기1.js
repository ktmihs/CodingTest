// 1748

const num = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

let answer = 0, i = 1;
while (i <= num) {
  answer += (num - i + 1);
  i *= 10;
}
console.log(answer);