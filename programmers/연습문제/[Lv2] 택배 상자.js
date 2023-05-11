function solution(order) {
  const stack = [];
  let answer = 0, idx = 1;

  while (stack[stack.length - 1] || order[answer]) {
    while (order[answer] > idx) stack.push(idx++);

    if (idx === order[answer] || stack[stack.length - 1] === order[answer]) {
      stack[stack.length - 1] === order[answer] ? stack.pop() : idx++;
      answer++;
    } else break;
  }

  return answer;
}