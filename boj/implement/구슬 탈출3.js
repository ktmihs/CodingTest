// 15644

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const visited = Array.from(Array(n), () => Array.from(Array(m), () => Array.from(Array(n), () => Array.from(Array(m), () => false))));

let answer, R, B, lastPos;

const MOVE = (x, y, [dx, dy], ox, oy) => {
  let flag = false;
  while (x >= 0 && x < n && y >= 0 && y < m && input[x][y] !== '#') {
    x += dx;
    y += dy;
    if (input[x][y] === 'O') return 0
    if (x === ox && y === oy) flag = true;
  }
  return flag ? [x - dx * 2, y - dy * 2] : [x - dx, y - dy];
}

const BFS = ([ri, rj], [bi, bj]) => {
  let queue = [[ri, rj, bi, bj]], cnt = 0;
  while (queue.length) {

    const tmp = queue.slice();
    queue = [];
    cnt++;
    for (const [x, y, bx, by] of tmp) {
      for (const dir of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
        const newDir = MOVE(x, y, dir, bx, by);
        const blueDir = MOVE(bx, by, dir, x, y);

        if (!newDir && blueDir) {
          lastPos = [x, y, bx, by, dir].join('.');
          return cnt;
        }
        if (!blueDir) continue;

        const [nx, ny] = newDir;
        const [cx, cy] = blueDir;

        if (!visited[nx][ny][cx][cy]) {
          visited[nx][ny][cx][cy] = [x, y, bx, by, dir].join('.');
          queue.push([nx, ny, cx, cy]);
        }
      }
    }
    if (cnt === 10) return -1;
  }
  return -1;
}

outer: for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 'R') R = [i, j];
    if (input[i][j] === 'B') B = [i, j];
    if (R && B) {
      visited[R[0]][R[1]][B[0]][B[1]] = 10e9;
      answer = BFS(R, B);
      break outer;
    }
  }
}

console.log(answer);
if (answer !== -1) {
  const list = [];
  while (lastPos !== 10e9) {
    const [x, y, bx, by, dir] = lastPos.split('.');
    const DIR = { '1,0': 'D', '0,-1': 'L', '0,1': 'R', '-1,0': 'U' };
    list.push(DIR[dir]);
    lastPos = visited[x][y][bx][by];
  }
  console.log(list.reverse().join(''));
}