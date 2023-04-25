const count = (left, right, len) => {
  let cnt = 0;
  if (left < len) {
    cnt += left;
    if (right < len) cnt += len + right + 1;
    else cnt += right - len + 1;
  }
  else cnt += right + left - len + 1;

  return cnt;
}

function solution(queue1, queue2) {
  const total = [...queue2, ...queue1];
  const half = total.reduce((sum, q) => sum + BigInt(q), 0n) / 2n;
  if (queue1.reduce((sum, q) => sum + BigInt(q), 0n) === half) return 0;

  let answer = 10e9;
  let left = 0, right, sum = 0n;
  for (right = 0; right < total.length; right++) {
    sum += BigInt(total[right]);
    while (sum > half) sum -= BigInt(total[left++]);
    if (sum === half) answer = Math.min(answer, count(left, right, total.length / 2));
  }
  return answer === 10e9 ? -1 : answer;
}