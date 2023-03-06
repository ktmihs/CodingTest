function solution(my_str, n) {
  const answer = [], my_list = [...my_str];
  while (my_list.length) {
    answer.push(my_list.splice(0, n).join(''));
  }
  return answer;
}