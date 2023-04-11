function solution(sequence, k) {
  let left = 0, sum = 0;
  return sequence.reduce(([start, end], num, right) => {
    sum += num;
    while (sum > k) sum -= sequence[left++];
    if (sum === k && end - start > right - left) return [left, right];
    return [start, end];
  }, [0, 10e5]);
}