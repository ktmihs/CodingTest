function solution(numlist, n) {
  return numlist.sort((prev, next) => {
    if (Math.abs(prev - n) > Math.abs(next - n)) return 1;
    if (Math.abs(prev - n) < Math.abs(next - n)) return -1;
    return next - prev;
  })
}