function solution(numbers) {
  const numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  numberList.map((number, idx) => numbers = numbers.replace(new RegExp(number, 'ig'), idx));
  return numbers;
}