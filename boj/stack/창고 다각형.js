// const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, ...input] = [
  '7',
  '2 4',
  '11 4',
  '15 8',
  '4 6',
  '5 3',
  '8 10',
  '13 6'
];
const N = +n;
const sortedList = input.map(line => line.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
let asc = [sortedList[0]];
let desc = [[sortedList.at(-1)[0] + 1, sortedList.at(-1)[1]]];
for (let i = 1; i < N; i++) {
  if (asc.at(-1)[1] < sortedList[i][1]) {
    asc.push(sortedList[i]);
  }
}
for (let i = N - 1; i > 0; i--) {
  if (desc.at(-1)[1] < sortedList[i][1]) {
    desc.push([sortedList[i][0] + 1, sortedList[i][1]]);
  }
}
let sum = 0;
for (let i = 1; i < asc.length; i++) {
  sum += (asc[i][0] - asc[i - 1][0]) * asc[i - 1][1];
}
desc = desc.reverse();
desc.unshift(asc.at(-1));
for (let i = 1; i < desc.length; i++) {
  sum += (desc[i][0] - desc[i - 1][0]) * desc[i][1];
}
console.log(sum);