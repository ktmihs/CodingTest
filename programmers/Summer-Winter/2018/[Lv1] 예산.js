function solution(d, budget) {
    let sum = 0, cnt = 0;
    d.sort((a,b) => a - b);
    for(let a of d){
        sum += a;
        cnt++;
        if(sum > budget) return cnt - 1;
    }
    return cnt;
}