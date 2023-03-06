function solution(my_string) {
  return eval(my_string);
}

function solution(my_string) {
  const list = my_string.split(' ');

  let operand = +list[0], operator;
  list.forEach((oper, idx) => {
    if (idx % 2) operator = oper;
    else if (operator === '+') operand += +oper;
    else if (operator === '-') operand -= +oper;
  });
  return operand;
}