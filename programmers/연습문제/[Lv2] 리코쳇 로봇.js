function solution(board) {
  const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const ROW = board.length, COL = board[0].length;
  const checked = [...new Array(ROW)].map(_ => Array(COL).fill(0));

  const start = board.reduce((pos, line, i) => line.indexOf('R') !== -1 ? [i, line.indexOf('R')] : pos, null);
  let queue = [start], L = 0;

  while (queue.length) {
    const tmp = queue.slice();
    queue = [];

    for (const [x, y] of tmp) {
      if (board[x][y] === 'G') return L;
      for (const [dx, dy] of DIR) {
        let nx = x + dx, ny = y + dy;
        while (nx >= 0 && nx < ROW && ny >= 0 && ny < COL) {
          if (board[nx][ny] === 'D') {
            if (!checked[nx - dx][ny - dy]) {
              queue.push([nx - dx, ny - dy]);
              checked[nx - dx][ny - dy] = 1;
            }
            break;
          }
          nx += dx;
          ny += dy;
          if ((nx < 0 || nx === ROW || ny < 0 || ny === COL) && !checked[nx - dx][ny - dy]) {
            queue.push([nx - dx, ny - dy]);
            checked[nx - dx][ny - dy] = 1;
          }
        }
      }
    }
    L++;
  }
  return -1;
}




