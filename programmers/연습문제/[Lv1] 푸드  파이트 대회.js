function solution(food) {
  let answer = '';
  food.forEach((cal, idx) => answer += `${idx}`.repeat(Math.floor(cal / 2)))
  return answer + '0' + answer.split('').reverse().join('');
}