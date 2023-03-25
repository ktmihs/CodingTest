function solution(keyinput, board) {
  const DIR = { left: [-1, 0], right: [1, 0], up: [0, 1], down: [0, -1] }
  const [width, height] = board.map(e => (e - 1) / 2);

  let [x, y] = [0, 0];
  keyinput.forEach(key => {
    const [dx, dy] = DIR[key];
    x = width * -1 > x + dx ? width * -1 : width < x + dx ? width : x + dx;
    y = height * -1 > y + dy ? height * -1 : height < y + dy ? height : y + dy;
  });

  return [x, y];
}