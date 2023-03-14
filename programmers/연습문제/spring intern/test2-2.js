function solution(grid) {
  const DIR = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const ROW = grid.length;
  const COL = grid[0].length;
  const checked = [...new Array(ROW)].map(e => Array(COL).fill(0));
  let answer = 0;

  const calc = list => {
    list.sort((prev, next) => {
      if (prev[0] > next[0]) return 1;
      if (prev[0] === next[0]) {
        if (prev[1] > next[1]) return 1;
        return -1;
      }
      return -1;
    });


    let i = -1, min = 0, max = 0, cnt = 0;
    const board = [...new Array(ROW)].map(e => Array(COL).fill(0));
    list.forEach(([x, y]) => board[x][y] = 1);

    list.push([10e9, 10e9]);

    list.forEach(([x, y]) => {
      if (i === x) {
        max = y;
        return;
      }

      if (i < 0) {
        i = x;
        min = y;
        max = y;
        return;
      }
      for (let k = min; k <= max; k++) {
        // # 일 경우
        if (grid[i][k] === '#') cnt++;
        else {
          let innerCnt = 0;

          // 상 (0 ~ i-1, k)
          const up = [];
          for (let u = 0; u < i; u++) up.push([u, k]);
          innerCnt += up.some(([x, y]) => board[x][y]);

          // 하 (i+1 ~ ROW, k)
          const down = [];
          for (let d = i + 1; d < ROW; d++) down.push([d, k]);
          innerCnt += down.some(([x, y]) => board[x][y]);

          // 좌 (i, 0 ~ k-1)
          const left = [];
          for (let l = 0; l < k; l++) left.push([i, l]);
          innerCnt += left.some(([x, y]) => board[x][y]);

          // 우 (i, k+1 ~ COL)
          const right = [];
          for (let r = k + 1; r < COL; r++) right.push([i, r]);
          innerCnt += right.some(([x, y]) => board[x][y]);

          if (innerCnt === 4) cnt++;
        }
      }

      i = x;
      min = y;
      max = y;
    });

    return cnt;
  }

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