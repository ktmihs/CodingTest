function solution(box, n) {
  return box.reduce((count, side) => count * Math.floor(side / n), 1);
}