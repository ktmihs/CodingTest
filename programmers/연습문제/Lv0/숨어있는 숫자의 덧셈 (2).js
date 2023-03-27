function solution(my_string) {
  return my_string.split(/[a-zA-Z]/).reduce((sum, str) => sum + +str, 0);
}