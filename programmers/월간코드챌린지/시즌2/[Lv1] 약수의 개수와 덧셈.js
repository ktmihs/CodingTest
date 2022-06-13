function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) answer = Math.sqrt(i) === Math.floor(Math.sqrt(i)) ? answer - i : answer + i;
    return answer;
}