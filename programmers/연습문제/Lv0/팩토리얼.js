function solution(n) {
  let i = 1, mul = 1;
  while (n >= mul) mul *= ++i;
  return i - 1;
}