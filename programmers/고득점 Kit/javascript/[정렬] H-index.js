function solution(citations) {
    let answer=0
    citations.sort((a,b)=>b-a)
    for(let i=0;i<citations.length;i++){
        answer=Math.max(answer,Math.min(i+1,citations[i]))
    }
    return answer
}