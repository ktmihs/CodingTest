function solution(numbers) {
  numbers.sort((prev, next) => prev - next);
  return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
}