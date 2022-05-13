// 3649
// 백준 js 메모리초과 에러

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\r\n");

const answer = [];

while (input.length) {
  const hole = +input.shift() * 10000000;
  const len = +input.shift();

  const lego = input.splice(0, len).map(Number).sort((a, b) => a - b);

  let left = 0, right = len - 1;
  while (left < right) {
    if (lego[left] + lego[right] === hole) {
      answer.push(`yes ${lego[left]} ${lego[right]}`);
      break;
    } else if (lego[left] + lego[right] > hole) right--;
    else left++;
  }
  if (left >= right) answer.push('danger');
}

console.log(answer.join('\n'));