function solution(i, j, k) {
  return [...new Array(j - i + 1)].reduce((sum, _, idx) => sum + `${i + idx}`.split(k + '').length - 1, 0);
}