// 2276

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = +input.shift();

for (let i = 0; i < len; i++) {
  const note1len = +input[i * 4 + 0];
  const note1 = input[i * 4 + 1].split(' ').map(Number).sort((a, b) => a - b);
  const note2len = +input[i * 4 + 2];
  const note2 = input[i * 4 + 3].split(' ').map(Number);

  const answer = [];

  note2.forEach((num, i) => {
    let left = 0,
      right = note1len;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (note1[mid] === num) {
        answer.push(1);
        break;
      } else if (note1[mid] > num) right = mid;
      else left = mid + 1;
    };
    if (answer.length - 1 < i) answer.push(0);
  });
  console.log(answer.join('\n'));
}