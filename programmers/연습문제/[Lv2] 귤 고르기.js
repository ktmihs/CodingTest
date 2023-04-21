function solution(k, tangerine) {
  const dist = new Map();
  tangerine.forEach(each => dist.set(each, (dist.get(each) || 0) + 1));

  const arr = [...dist].sort((a, b) => a[1] - b[1]);
  let answer = 0;
  while (k > 0 && arr.length) {
    k -= arr.pop()[1];
    answer++;
  }
  return answer;
}