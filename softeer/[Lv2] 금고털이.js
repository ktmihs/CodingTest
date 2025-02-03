const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [W, N] = info.split(' ').map(Number);
const stoneList = input.map(line => line.split(' ').map(Number)).sort((a, b) => b[1] - a[1]);

let sum = 0, total = 0;
for (const [weight, cost] of stoneList) {
  if (sum >= info) break;
  const possibleWeight = Math.min(weight, W - sum);
  sum += possibleWeight;
  total += (possibleWeight * cost);
}

console.log(total);