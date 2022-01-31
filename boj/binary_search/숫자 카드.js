// 10815

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cardLen = +input[0];

const numberCard = input[1].split(' ').map(Number).sort((a, b) => a - b);

const len = +input[2];

const allCard = input[3].split(' ').map((card, i) => [+card, i]).sort((a, b) => a[0] - b[0]);

const check = new Array(len).fill(0);


let left = 0,
  right = 0;
while (left < cardLen && right < len) {
  if (numberCard[left] === allCard[right][0]) {
    check[allCard[right][1]] = 1;
    right++;
    left++;
  } else if (numberCard[left] < allCard[right][0]) left++;
  else right++;
}

console.log(check.join(' '));