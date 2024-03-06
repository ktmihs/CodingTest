function solution(land) {
  function BFS(start) {
    let oil = new Set().add(start[1]);
    let queue = [start];
    let size = 1;

    while (queue.length) {
      const tmp = queue.slice();
      queue = [];

      for (const [nx, ny] of tmp) {
        for (const [dx, dy] of DIR) {
          if (nx + dx >= 0 && nx + dx < ROW && ny + dy >= 0 && ny + dy < COL && land[nx + dx][ny + dy]) {
            land[nx + dx][ny + dy] = 0;
            queue.push([nx + dx, ny + dy]);
            oil.add(ny + dy);
            size++;
          }
        }
      }
    }
    [...oil].forEach(i => COL_LIST[i] += size);
  }

  const ROW = land.length;
  const COL = land[0].length;
  const DIR = [[0, -1], [0, 1], [1, 0], [-1, 0]];
  const COL_LIST = new Array(COL).fill(0);

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (land[i][j]) {
        land[i][j] = 0;
        BFS([i, j]);
      }
    }
  }

  return Math.max(...COL_LIST);
}
