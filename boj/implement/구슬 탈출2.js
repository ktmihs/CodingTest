// 13460

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const visited = Array.from(Array(n), () => Array.from(Array(m), () => Array.from(Array(n), () => Array.from(Array(m), () => false))));

let answer, R, B;

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

        if (!newDir && blueDir) return cnt;
        if (!blueDir) continue;

        const [nx, ny] = newDir;
        const [cx, cy] = blueDir;

        if (!visited[nx][ny][cx][cy]) {
          visited[nx][ny][cx][cy] = true;
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
      visited[R[0]][R[1]][B[0]][B[1]] = true;
      answer = BFS(R, B);
      break outer;
    }
  }
}

console.log(answer);