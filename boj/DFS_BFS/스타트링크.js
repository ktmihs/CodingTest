// 5014

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [height, start, final, up, down] = input[0].split(' ').map(Number);

const check = new Array(height + 1).fill(false);
const queue = [];
queue.push([start, 0]);

while (queue.length) {
  const len = queue.length;
  for (let i = 0; i < len; i++) {
    const [floor, count] = queue.shift();
    if (floor === final) return console.log(count);

    if (floor + up <= height && !check[floor + up]) {
      queue.push([floor + up, count + 1]);
      check[floor + up] = true;
    };
    if (floor - down >= 1 && !check[floor - down]) {
      queue.push([floor - down, count + 1]);
      check[floor - down] = true;
    };
  }
}

console.log('use the stairs');