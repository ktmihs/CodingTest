function solution(number) {
  let answer = 0, sum = 0;

  const DFS = (L, k) => {
    if (L === 3) {
      if (!sum) answer++;
      return;
    }
    for (let i = k; i < number.length; i++) {
      sum += number[i];
      DFS(L, i + 1);
      sum -= number[i];
    }
  }

  DFS(0, 0);
  return answer;
}