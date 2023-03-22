function solution(my_string) {
  return [...my_string].reduce((sum, char) => Number.isInteger(+char) ? sum + +char : sum, 0)
}

function solution(my_string) {
  return [...my_string].reduce((sum, char) => Number.isNaN(+char) ? sum : sum + +char, 0)
}