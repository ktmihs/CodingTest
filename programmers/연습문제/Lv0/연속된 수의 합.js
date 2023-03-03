function solution(num, total) {
  const val = total / num;
  let answer = num % 2 ? [val] : [];
  for (let i = num % 2; i < num / 2; i++) {
    answer = [Math.floor(val - i), ...answer, Math.ceil(val + i)];
  }
  return answer;
}