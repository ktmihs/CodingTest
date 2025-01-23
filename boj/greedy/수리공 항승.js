// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3 1',
  '3 2 1'
];
const [N, L] = input[0].split(' ').map(Number);
const positions = input[1].split(' ').map(Number).sort((a, b) => a - b);
let cnt = 0, i = 0;

while (i < N) {
  const endPoint = positions[i] + L;
  while ((i + 1 < N) && (positions[i + 1] < endPoint)) i++;
  cnt++;
  i++;
}

console.log(cnt);