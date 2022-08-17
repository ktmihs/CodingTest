// 6593

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const answer = [];
while (input.length) {
  const [l, n, m] = input.shift().split(' ').map(Number);
  if (!l && !n && !m) break;
  const building = [...new Array(l)].map(e => []);
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < n; j++) building[i].push(input.shift().split(''));
    input.shift();
  }

  const DIR = [[0, -1, 0], [0, 0, -1], [0, 1, 0], [0, 0, 1], [1, 0, 0], [-1, 0, 0]];

  const findPos = X => {
    for (let k = 0; k < l; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (building[k][i][j] === X) return [k, i, j];
        }
      }
    }
    return [-1, -1, -1];
  }

  const [sk, si, sj] = findPos('S');
  const [ek, ei, ej] = findPos('E');

  let queue = [[sk, si, sj]], time = 0, res = 'Trapped!';

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [k, x, y] of tmp) {
      if (k === ek && x === ei && y === ej) res = `Escaped in ${time} minute(s).`;
      for (const [dk, dx, dy] of DIR) {
        if (k + dk >= 0 && k + dk < l && x + dx >= 0 && x + dx < n && y + dy >= 0 && y + dy < m && building[k + dk][x + dx][y + dy] !== '#') {
          building[k + dk][x + dx][y + dy] = '#';
          queue.push([k + dk, x + dx, y + dy]);
        }
      }
    }
    time++;
  }

  answer.push(res);
}

console.log(answer.join('\n'));