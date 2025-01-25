// const [N, M, X] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M, X] = [
  '3', '1', '0'
];
const xList = X.split(' ').map(Number);
let max = 0;
for (let i = 1; i < +M; i++) {
  max = Math.max(xList[i] - xList[i - 1], max);
};
max = Math.max(Math.ceil(max / 2), xList[0], +N - xList.at(-1));
console.log(max);
