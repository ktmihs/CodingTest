function solution(sides) {
  return sides.reduce((sum, side) => sum + side, 0) > 2 * Math.max(...sides) ? 1 : 2;
}