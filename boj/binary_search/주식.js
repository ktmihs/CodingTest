// 12014

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input.shift();
const answer = [];

for (let i = 0; i < n; i++) {
  const [_, k] = input[i * 2].split(' ').map(Number);
  const stock = input[i * 2 + 1].split(' ').map(Number);

  const purchase = [0];

  const BS = n => {
    let left = 0, right = purchase.length, answer = 0;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (purchase[middle] < n) {
        answer = middle;
        left = middle + 1;
      } else right = middle - 1;
    }
    return answer;
  }

  stock.forEach(item => {
    const index = BS(item);
    purchase.length <= index ? purchase.push(item) : purchase[index + 1] = item;
  })

  answer.push(`Case #${i + 1}`);
  purchase.length - 1 >= k ? answer.push(1) : answer.push(0);
}
console.log(answer.join('\n'));