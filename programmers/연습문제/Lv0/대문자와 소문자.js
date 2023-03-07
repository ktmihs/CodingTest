function solution(my_string) {
  return [...my_string].map(char => /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()).join('');
}