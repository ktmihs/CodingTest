function solution(board) {
  const ROW = board.length, COL = board[0].length;
  const DIR = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  const minesweeper = (x, y) => {
    for (const [dx, dy] of DIR) {
      if (x + dx >= 0 && x + dx < ROW && y + dy >= 0 && y + dy < COL && !board[x + dx][y + dy]) {
        board[x + dx][y + dy] = 2;
      }
    }
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (board[i][j] === 1) minesweeper(i, j);
    }
  }

  return board.reduce((safe, line) => safe + line.filter(block => !block).length, 0);
}