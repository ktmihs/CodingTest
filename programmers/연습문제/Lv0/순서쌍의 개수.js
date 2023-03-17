function solution(n) {
  return new Array(n).fill().filter((_, i) => !(n % (i + 1))).length;
}