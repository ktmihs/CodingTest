// 16953

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [prev, after] = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(' ').map(Number);

const queue = [prev];
let answer = 1;

while (queue.length) {
  const len = queue.length;
  for (let i = 0; i < len; i++) {
    const n = queue.shift();
    if (n * 2 === after) return console.log(answer + 1);
    else if (n * 2 < after) queue.push(n * 2);
    if (+(n + '1') === after) return console.log(answer + 1);
    else if (+(n + '1') < after) queue.push(+(n + '1'));
  }
  answer++;
}
return console.log(-1);