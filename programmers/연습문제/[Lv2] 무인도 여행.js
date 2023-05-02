function solution(maps) {
  const DIR = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const ROW = maps.length, COL = maps[0].length, answer = [];
  maps = maps.map(line => line.split(''));

  const island = (i, j) => {
    let total = +maps[i][j];
    maps[i][j] = 'X';
    const DFS = (x, y) => {
      for (const [dx, dy] of DIR) {
        if (x + dx >= 0 && x + dx < ROW && y + dy >= 0 && y + dy < COL && maps[x + dx][y + dy] !== 'X') {
          total += +maps[x + dx][y + dy];
          maps[x + dx][y + dy] = 'X';
          DFS(x + dx, y + dy);
        }
      }
    }
    DFS(i, j);
    return total;
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (maps[i][j] !== 'X') answer.push(island(i, j));
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}