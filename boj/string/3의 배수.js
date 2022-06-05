// 1769

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];

let cnt = 0, res;
const func = n => {
  if (n.length < 2) return +n % 3 ? res = 'NO' : res = 'YES';
  const m = n.split('').reduce((sum, a) => sum + +a, 0);
  cnt++;
  func(String(m));
}

func(input);
console.log(cnt);
console.log(res);