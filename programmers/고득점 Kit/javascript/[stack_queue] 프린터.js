function solution(priorities, location) {
    let answer = 1, work=0
    let prior_sort=new Array(...priorities).sort((a,b)=>b-a)
    // 작업 중요도로 정렬
    let prior_index=new Array(priorities.length).fill(0)
    for(let i=0;i<priorities.length;i++) prior_index[i]=i
    // 인덱스 배열

    while(prior_index.length){
        work=prior_index.shift()
        // 현재 대기 목록의 첫 번째 꺼냄
        if(priorities[work]===prior_sort[0]){
            // 꺼낸 작업의 우선 순위가 가장 높은 경우
            if(work===location) return answer
                // 요청한 인쇄인 경우 return 
            else prior_sort.shift()
                // 요청한 인쇄가 아닌 경우, 작업 중요도에서 현재 작업한 인쇄 빼줌
            answer++
                // 작업 횟수 증가
        }
        else prior_index.push(work)
            // 더 높은 우선순위가 존재할 경우, 대기 목록의 맨 뒤로 넣어줌
    }
    return answer
}