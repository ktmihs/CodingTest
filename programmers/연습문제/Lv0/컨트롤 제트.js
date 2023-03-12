function solution(s) {
  const stack = [];
  s.split(' ').forEach(word => Number.isInteger(+word) ? stack.push(word) : stack.pop());
  return stack.reduce((sum, num) => sum + +num, 0);
}