function solution(my_string, num1, num2) {
  const list = [...my_string];
  list[num1] = my_string[num2];
  list[num2] = my_string[num1];
  return list.join('');
}

function solution(my_string, num1, num2) {
  const list = [...my_string];
  [list[num1], list[num2]] = [my_string[num2], my_string[num1]];
  return list.join('');
}