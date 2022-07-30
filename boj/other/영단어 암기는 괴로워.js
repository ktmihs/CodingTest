// 20920

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const words = input.filter(word => word.length >= m);

const hash = new Map();
words.forEach(word => hash.set(word, (hash.get(word) || 0) + 1));

console.log([...hash].sort((prev, next) => {
  if (prev[1] < next[1]) return 1;
  else if (prev[1] > next[1]) return -1;
  else {
    if (prev[0].length < next[0].length) return 1;
    else if (prev[0].length > next[0].length) return -1;
    else {
      if (prev[0] < next[0]) return -1;
      else if (prev[0] > next[0]) return 1;
    }
  }
}).map(word => word[0]).join('\n'));