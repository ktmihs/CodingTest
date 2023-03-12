function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    do answer++;
    while (!(answer % 3) || (answer + '').includes(3))
  }
  return answer;
}