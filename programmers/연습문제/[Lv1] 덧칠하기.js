function solution(n, m, section) {
  let start = section.shift();

  return section.filter(sec => sec >= start + m && (start = sec)).length + 1;
}