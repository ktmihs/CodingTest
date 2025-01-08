// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")[0];
const input = '1';
const coins = [500, 100, 50, 10, 5, 1];
let change = 1000 - (+input), cnt = 0;
coins.forEach(coin => {
  cnt += Math.floor(change / coin);
  change %= coin;
});
console.log(cnt);