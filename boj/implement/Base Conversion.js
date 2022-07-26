// 11576

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [A, B] = input[0].split(' ').map(Number);
const list = input[2].split(' ').map(Number).reverse();

const answer = [];
let DEC = 0;
list.forEach((li, i) => DEC += li * (A ** i));


if (DEC === 0) console.log(0);
else {
  while (DEC > 0) {
    answer.unshift(DEC % B);
    DEC = Math.floor(DEC / B);
  }
  console.log(answer.join(' '));
}