function solution(targets) {
  targets.sort((a, b) => b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]);
  let cnt = 1, tmp = targets.pop()[1];

  while (targets.length) {
    const [start, end] = targets.pop();
    if (start >= tmp) {
      tmp = end;
      cnt++;
    }
  }
  return cnt;
}