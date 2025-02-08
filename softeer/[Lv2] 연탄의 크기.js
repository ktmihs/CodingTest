const [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const house = input.split(' ').map(Number);
const map = new Map();

house.forEach(h => {
  for (let i = 1; i <= Math.sqrt(h); i++) {
    if (!(h % i)) {
      if (i !== (h / i) && i !== 1) map.set(i, (map.get(i) || 0) + 1);
      map.set(h / i, (map.get(h / i) || 0) + 1);
    }
  }
});
const maxCnt = [...map.entries()].sort((a, b) => b[1] - a[1])[0][1];
console.log(maxCnt);