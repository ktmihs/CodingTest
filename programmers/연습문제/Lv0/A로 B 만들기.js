function solution(before, after) {
  return +([...before].sort().join('') === [...after].sort().join(''));
}