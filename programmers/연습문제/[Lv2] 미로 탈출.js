function solution(maps) {
  const DIR = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  const ROW = maps.length, COL = maps[0].length;
  const POS = {};

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (maps[i][j] === 'S') POS.start = [i, j];
      if (maps[i][j] === 'L') POS.lever = [i, j];
    }
  }

  const move = (start, end) => {
    const newMaps = maps.map(line => line.split(''));

    let queue = [start], time = 1;

    while (queue.length) {
      const tmp = queue.slice();
      queue = [];

      for (const [x, y] of tmp) {
        for (const [dx, dy] of DIR) {
          if (x + dx >= 0 && x + dx < ROW && y + dy >= 0 && y + dy < COL && newMaps[x + dx][y + dy] !== 'X') {
            if (newMaps[x + dx][y + dy] === end) return time;
            newMaps[x + dx][y + dy] = 'X';
            queue.push([x + dx, y + dy]);
          }
        }
      }
      time++;
    }
    return -1;
  }

  const lever = move(POS.start, 'L');
  const end = move(POS.lever, 'E');

  if (lever === -1 || end === -1) return -1;
  return lever + end;
}