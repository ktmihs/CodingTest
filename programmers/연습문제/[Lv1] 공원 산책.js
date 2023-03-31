function solution(park, routes) {
  const DIR = { E: [0, 1], W: [0, -1], N: [-1, 0], S: [1, 0] };
  const ROW = park.length, COL = park[0].length;
  let [nx, ny] = park.reduce((start, line, i) => line.indexOf('S') !== -1 ? [i, line.indexOf('S')] : start, null);

  routes.forEach(route => {
    const [pos, len] = route.split(' ');
    const [dx, dy] = DIR[pos];

    if (nx + dx * len < 0 || nx + dx * len >= ROW || ny + dy * len < 0 || ny + dy * len >= COL) return;
    for (let i = 1; i <= +len; i++) if (park[nx + dx * i][ny + dy * i] === 'X') return;

    [nx, ny] = [nx + dx * len, ny + dy * len];
  });

  return [nx, ny];
}