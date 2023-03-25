function solution(lines) {
  lines.sort((a, b) => {
    if (a[0] > b[0] || a[0] === b[0] && a[1] > b[1]) return 1;
    return -1;
  });

  const overlap = [];
  let [start, end] = [-101, -101];

  for (const [x, y] of lines) {
    if (end < x) [start, end] = [x, y];
    else {
      if (end < y) {
        answer += end - x;
        end = y;
      }
      else answer += end - x;
    }
  }
  return answer;
}

function solution(lines) {
  const line = new Array(201).fill(0);
  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) line[i + 100]++;
  });
  return line.reduce((sum, item) => item < 2 ? sum : sum + 1, 0);
}