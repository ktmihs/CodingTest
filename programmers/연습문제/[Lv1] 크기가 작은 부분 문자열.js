function solution(t, p) {
  let answer = 0;
  const T_LEN = t.length, P_LEN = p.length;

  for (let i = 0; i <= T_LEN - P_LEN; i++) {
    if (+t.slice(i, i + P_LEN) <= +p) answer++;
  }
  return answer;
}