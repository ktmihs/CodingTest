function solution(k, score) {
  const fame = [];
  return score.map(day => {
    fame.push(day);
    fame.sort((a, b) => b - a);
    return fame.length < k ? fame[fame.length - 1] : fame[k - 1];
  });
}