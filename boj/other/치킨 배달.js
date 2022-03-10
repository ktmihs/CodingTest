// 15686

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const city = input.map(line => line.split(' ').map(Number));

const house = [], chicken = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) house.push([i, j]);
    else if (city[i][j] === 2) chicken.push([i, j]);
  }
}

const chickenRoad = () => {
  let roadLen = 0;
  house.forEach(([hx, hy]) => {
    let closed = 10e9;
    chicken.forEach((ch, index) => {
      if (check[index]) {
        const [cx, cy] = ch;
        closed = Math.min(closed, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
    })
    roadLen += closed;
  })
  return roadLen;
}

const check = new Array(chicken.length).fill(0);
let answer = 10e9;

const DFS = (cnt, index) => {
  if (cnt === m) answer = Math.min(answer, chickenRoad());
  else {
    for (let i = index; i < chicken.length; i++) {
      if (check[i]) continue;
      check[i] = 1;
      DFS(cnt + 1, i);
      check[i] = 0;
    }
  }
}

DFS(0, 0);
console.log(answer);