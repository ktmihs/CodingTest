function solution(my_string) {
  const set = new Set();

  return [...my_string].filter(char => !set.has(char) && set.add(char)).join('');
}

function solution(my_string) {
  return [...new Set(my_string)].join('');
}