function solution(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}