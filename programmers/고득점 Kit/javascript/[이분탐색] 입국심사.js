function solution(n, times) {
    let answer = 0
    function waiting(left, right){
        if(left>=right) return
        let middle=parseInt((left+right)/2)
        let sum=0
        
        for(let time of times) sum+=Math.floor(middle/time)
        // 정해진 시간(middle)동안 각 입국심사자들이 몇명을 맡을 수 있는 지 계산
        
        if(n<=sum){
            // n보다 많은 인원을 맡을 수 있다면, 시간을 줄여서 검색
            answer=middle
            waiting(left, middle)
        }
        else waiting(middle+1, right)
        // n보다 적다면, 시간을 늘려서 검색
    }
    waiting(0, Math.min(...times)*n)
    // 최대는 가장 적게 걸리는 사람이 모든 인원을 맡을 때로
    return answer
}