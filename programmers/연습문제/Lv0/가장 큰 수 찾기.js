function solution(array) {
  return array.reduce((answer, num, idx) => answer[0] < num ? [num, idx] : answer, [0, 0]);
}