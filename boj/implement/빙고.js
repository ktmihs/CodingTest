// 2578

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const arr = new Array(5), check = [...Array(5)].map(e => Array(5).fill(false));
for (let i = 0; i < 5; i++) arr[i] = input[i].split(' ').map(Number);

let bingoCnt = 0;

const Bingo = (x, y) => {
  let col = 0, row = 0, cross = 0, across = 0;
  for (let i = 0; i < 5; i++) {
    check[i][y] && col++;
    check[x][i] && row++;
    x == y && check[i][i] && cross++;
    x + y === 4 && check[4 - i][i] && across++;
  }
  col === 5 && bingoCnt++;
  row === 5 && bingoCnt++;
  cross === 5 && bingoCnt++;
  across === 5 && bingoCnt++;

  if (bingoCnt >= 3) return true;
  return false;
}

const Check = num => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === num) {
        check[i][j] = true;
        if (Bingo(i, j)) return true;
      }
    }
  }
  return false;
}

let cnt = 0;
outer: for (let i = 5; i < 10; i++) {
  const numbers = input[i].split(' ').map(Number);
  for (let number of numbers) {
    cnt++;
    if (Check(number)) {
      console.log(cnt);
      break outer;
    }
  }
}