function solution(n) {
  let answer = 0;
  const DFS = (L, R) => {
    if (L + R === n * 2) {
      if (L === n && R === n) answer++;
      return;
    }
    if (L > R) {
      DFS(L, R + 1);
    } DFS(L + 1, R);
    return;
  }
  DFS(0, 0);
  return answer;
}