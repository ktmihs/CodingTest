function solution(sides) {
  return sides[0] + sides[1] + Math.abs(sides[0] - sides[1]) - 1;
}

function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}