function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      }
    }
  }
  return answer;
}

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];
  numbers.forEach((num, i) => {
    while (stack.length && numbers[stack[stack.length - 1]] < num) {
      answer[stack.pop()] = num;
    }
    stack.push(i);
  })
  return answer;
}