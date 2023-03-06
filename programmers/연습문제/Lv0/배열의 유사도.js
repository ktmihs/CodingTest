function solution(s1, s2) {
  const totalList = [...s1, ...s2];
  return totalList.length - new Set(totalList).size;
}