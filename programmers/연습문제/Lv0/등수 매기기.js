function solution(score) {
  const result = new Array(score.length).fill(0);
  const total = score.map(([eng, math], idx) => [(eng + math) / 2, idx]).sort((prev, next) => next[0] - prev[0]);

  result[total[0][1]] = 1;
  for (let i = 1; i < score.length; i++) {
    const [avg, originIdx] = total[i];
    if (total[i - 1][0] === avg) result[originIdx] = result[total[i - 1][1]];
    else result[originIdx] = i + 1;
  }
  return result;
}

