function solution(k, dungeons) {
  let answer = -1, n = dungeons.length;

  const DFS = (L, k, check) => {
    answer = Math.max(answer, L);

    for (let i = 0; i < n; i++) {
      if (!check[i] && k >= dungeons[i][0]) {
        check[i] = 1;
        DFS(L + 1, k - dungeons[i][1], check);
        check[i] = 0;
      }
    }
  }
  DFS(0, k, new Array(n).fill(0));
  return answer;
}