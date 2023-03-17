function solution(num_list) {
  return num_list.reduce((answer, num) => {
    answer[num % 2]++;
    return answer;
  }, [0, 0]);
}