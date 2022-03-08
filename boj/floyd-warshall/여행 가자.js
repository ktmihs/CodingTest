// 1976

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const m = +input.shift();
const routes = input.pop().split(' ').map(Number);
const cities = input.map(city => city.split(' ').map(Number));

for (let k = 0; k < n; k++) {
  cities[k][k] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (cities[i][k] && cities[k][j]) cities[i][j] = 1;
    }
  }
}

let answer = '';
for (let i = 1; i < m; i++) {
  if (!cities[routes[i - 1] - 1][routes[i] - 1]) answer = 'NO';
}
!answer ? console.log('YES') : console.log(answer);