// 각 좌표를 저장, 각 행마다 제일 큰 숫자 - 작은 숫자 + 1
const calc = (list) => {
  let total = -1;

  list.sort((prev, next) => {
    if (prev[0] > next[0]) return 1;
    if (prev[0] === next[0]) {
      if (prev[1] > next[1]) return 1;
      return -1;
    }
    return -1;
  });

  let i = -1, min = 0, max = 0;
  list.forEach(point => {
    const [x, y] = point;

    if (i !== x) {
      total += max - min + 1;
      i = x;
      min = y;
      max = y;
    }
    else max = y;
  });

  total += max - min + 1;

  return total;
}


function solution(grid) {
  const DIR = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const ROW = grid.length;
  const COL = grid.length[0];
  const checked = [...new Array(ROW)].map(e => Array(COL).fill(0));
  let answer = 0;

  const BFS = (i, j) => {
    const list = [[i, j]];
    let queue = [[i, j]];

    while (queue.length) {
      const tmp = queue.slice();
      queue = [];

      for (let [x, y] of tmp) {
        for (const [dx, dy] of DIR) {
          if (x + dx >= 0 && x + dx < ROW && y + dy >= 0 && y + dy < COL && !checked[x + dx][y + dy] && grid[x + dx][y + dy] === '#') {
            queue.push([x + dx, y + dy]);
            list.push([x + dx, y + dy]);
            checked[x + dx][y + dy] = 1;
          }
        }
      }
    }

    return calc(list);
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === '#' && !checked[i][j]) {
        checked[i][j] = 1;
        answer += BFS(i, j);
      }
    }
  }

  return answer;
}