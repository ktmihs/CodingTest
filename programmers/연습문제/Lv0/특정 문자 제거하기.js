function solution(my_string, letter) {
  return [...my_string].filter(str => letter !== str).join('');
}