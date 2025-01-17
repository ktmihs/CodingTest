// const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, ...input] = [
  '3',
  'ENTER',
  'lms0806',
  'lms0806',
];

let cnt = 0;
let set = new Set();
for (const word of input) {
  if (word === 'ENTER') {
    cnt += set.size;
    set = new Set();
  } else set.add(word);
}

console.log(cnt + set.size);