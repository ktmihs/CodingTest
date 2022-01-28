function solution(n, left, right) {
    let answer = [];
    for(let i = Math.floor(left/n) ; i <= n ; i++){
        for(let j = 1 ; j <= n ; j++){
            if((i-1)*n+(j-1)<left) continue;
            if((i-1)*n+(j-1)>right) break;
            i >= j ? answer.push(i) : answer.push(j);
        }
    }
    return answer;
}