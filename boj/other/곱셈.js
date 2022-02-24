// 1629

const fs = require('fs');
let [a, b, m] = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0].split(' ').map(BigInt);

const pow = (a, b) => {
  if (b == 0) return 1n;
  else {
    const tmp = pow(a, b / 2n);
    if (b % 2n == 0) return (tmp * tmp) % m;
    else return (tmp * tmp * a) % m;
  }
}
console.log('' + pow(a, b));