// 3020

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [lens, height] = input.shift().split(' ').map(Number);

// 전체를 종유석과 석순 두 가지로 나눠준다.
const stals = input.map(Number);

// 높이가 1과 3인 석순이 있다면 높이가 1, 2, 3일 때 각각 2, 1, 1번 부딪힌다.
// 따라서, 사이 높이일 때는 큰 숫자와 같은 횟수로 부딪히게 되기 때문에, 역순으로 확인하면서 사이 높이일 때, 큰 숫자가 부딪하는 횟수로 저장한다.
const mites = []; // 석순

// 높이가 1과 3인 종유석이 있다면 각각은 height-1, height-3이상일 때 부딪히게 된다.
// 따라서, height-1, height-2, height-3은 각각 1, 1, 2번 부딪히게 되기 때문에, 순차적으로 확인하면서 사이 높이일 때, 앞 숫자와 같은 횟수로 저장한다.
const tites = []; // 종유석

stals.forEach((stal, i) => i % 2 ? tites.push(height - stal) : mites.push(stal - 1));

mites.sort((a, b) => b - a);
tites.sort((a, b) => a - b);

const cave1 = new Array(height).fill(0);
const cave2 = new Array(height).fill(0);

mites.forEach((mite, i) => cave1[mite] = i + 1)
for (let i = cave1.length - 2; i >= 0; i--) {
  if (!cave1[i]) cave1[i] = cave1[i + 1];
}

tites.forEach((tite, i) => cave2[tite] = i + 1)
for (let i = 1; i < cave2.length; i++) {
  if (!cave2[i]) cave2[i] = cave2[i - 1];
}

// 종유석과 석순에 부딪힐 때를 더한다.
for (let i = 0; i < cave1.length; i++) cave1[i] += cave2[i];

cave1.sort((a, b) => a - b);

const cnt = cave1.filter(cave => cave === cave1[0]).length;

// 가장 작은 수가 몇번 나오는지 계산해서 출력한다.
console.log(`${cave1[0]} ${cnt}`);