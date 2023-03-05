function solution(quiz) {
  return quiz.map(string => {
    const [expr, res] = string.split('=');
    return eval(expr) === +res ? 'O' : 'X';
  })
}

function solution(quiz) {
  const calc = (o1, oper, o2) => oper === '+' ? +o1 + +o2 : +o1 - +o2;

  return quiz.map(string => {
    const [operand1, operator, operand2, _, res] = string.split(' ');
    return calc(operand1, operator, operand2) === +res ? 'O' : 'X';
  })
}