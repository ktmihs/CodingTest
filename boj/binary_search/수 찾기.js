// 1920

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cardLen = +input[0];

const numberCard = input[1].split(' ').map(Number).sort((a, b) => a - b);

const allCard = input[3].split(' ');

const isExist = card => {
  let left = 0,
    right = cardLen;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (numberCard[mid] === card) return true;
    else if (numberCard[mid] > card) right = mid;
    else left = mid + 1;
  }
  return false;
}

const answer = [];

allCard.forEach(card => {
  isExist(+card) ? answer.push(1) : answer.push(0);
})

console.log(answer.join('\n'));