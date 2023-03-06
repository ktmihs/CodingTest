function solution(n) {
  return [...`${n}`].reduce((total, num) => total + +num, 0);
}