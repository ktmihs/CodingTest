function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] < b[col - 1]) return -1;
    if (a[col - 1] > b[col - 1]) return 1;
    else return a[0] > b[0] ? -1 : 1;
  });

  let answer = data[row_begin - 1].reduce((sum, val) => sum + val % row_begin, 0);
  for (let i = row_begin; i < row_end; i++) {
    answer ^= data[i].reduce((sum, val) => sum + (val % (i + 1)), 0);
  }
  return answer;
}
function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

  let answer = data[row_begin - 1].reduce((sum, val) => sum + val % row_begin, 0);
  for (let i = row_begin; i < row_end; i++) {
    answer ^= data[i].reduce((sum, val) => sum + (val % (i + 1)), 0);
  }
  return answer;
}