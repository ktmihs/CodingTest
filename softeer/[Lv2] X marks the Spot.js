const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = input.map(line => {
  const [S, T] = line.split(' ').map(word => word.toUpperCase());
  const idx = S.indexOf('X');
  return T[idx];
});
console.log(answer.join(''));