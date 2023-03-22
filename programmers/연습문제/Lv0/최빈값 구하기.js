function solution(array) {
  const hash = new Map();
  array.forEach(num => hash.set(num, (hash.get(num) || 0) + 1));

  const cntList = [...hash].sort((prev, next) => next[1] - prev[1]);
  return cntList.length > 1 && cntList[0][1] === cntList[1][1] ? -1 : cntList[0][1];
}